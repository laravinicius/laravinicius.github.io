(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const menu = document.getElementById('nav-menu');
    const summary = menu && menu.querySelector('summary');
    const scheme = window.matchMedia('(prefers-color-scheme: dark)');
    const STORAGE_KEY = 'laravinicius-theme';
    let savedTheme;

    try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.setAttribute('aria-pressed', String(theme === 'dark'));
            toggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
        }
    }

    applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : scheme.matches ? 'dark' : 'light');

    if (toggle) {
        toggle.addEventListener('click', function () {
            savedTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(savedTheme);
            try { localStorage.setItem(STORAGE_KEY, savedTheme); } catch (e) {}
        });
    }

    scheme.addEventListener('change', function (event) {
        if (savedTheme !== 'light' && savedTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
    });

    if (menu && summary) {
        function closeMenu(restoreFocus) {
            menu.open = false;
            if (restoreFocus) summary.focus();
        }
        function updateMenuState() {
            summary.setAttribute('aria-expanded', String(menu.open));
            summary.setAttribute('aria-label', menu.open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        }
        updateMenuState();
        menu.addEventListener('toggle', updateMenuState);
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menu.open) {
                event.preventDefault();
                closeMenu(true);
            }
        });
        document.addEventListener('click', function (event) {
            if (menu.open && !menu.contains(event.target)) closeMenu(menu.contains(document.activeElement));
        });
        menu.addEventListener('focusout', function (event) {
            if (menu.open && event.relatedTarget && !menu.contains(event.relatedTarget)) closeMenu(false);
        });
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu(false);
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            });
        });
    }
})();

(function () {
    const source = document.querySelector('.hero-portrait-frame');
    const destination = document.querySelector('.about-portrait');
    const image = destination && destination.querySelector('.portrait-image');
    if (!source || !image) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let geometry;
    let animationFrame = null;
    let needsMeasure = true;
    const clamp = value => Math.min(1, Math.max(0, value));
    const lerp = (from, to, progress) => from + (to - from) * progress;

    function measure() {
        // Both slots stay in the document flow while the single image travels.
        const from = source.getBoundingClientRect();
        const to = destination.getBoundingClientRect();
        const scroll = window.scrollY;
        const start = Math.max(0, from.top + scroll + from.height + 100 - window.innerHeight);
        geometry = {
            from: { x: from.left, y: from.top + scroll, width: from.width, height: from.height },
            to: { x: to.left, y: to.top + scroll, width: to.width, height: to.height },
            start,
            end: Math.max(start + 1, to.top + scroll - 120)
        };
        needsMeasure = false;
    }

    function render() {
        animationFrame = null;
        if (reducedMotion.matches) return;
        if (needsMeasure) measure();
        const { from, to, start, end } = geometry;
        const progress = clamp((window.scrollY - start) / (end - start));
        source.parentElement.style.setProperty('--portrait-caption-opacity', 1 - clamp(progress / 0.15));
        if (progress === 1) {
            image.classList.remove('is-traveling');
            return;
        }
        // Switch the visible side edge-on, keeping one image and readable orientation.
        const angle = (progress <= 0.5 ? progress : progress - 1) * 180;
        image.style.setProperty('--portrait-x', lerp(from.x, to.x, progress) + 'px');
        image.style.setProperty('--portrait-y', (lerp(from.y, to.y, progress) - window.scrollY) + 'px');
        image.style.setProperty('--portrait-width', lerp(from.width, to.width, progress) + 'px');
        image.style.setProperty('--portrait-height', lerp(from.height, to.height, progress) + 'px');
        image.style.setProperty('--portrait-radius', lerp(12, 16, progress) + 'px');
        image.style.setProperty('--portrait-angle', angle + 'deg');
        image.style.setProperty('--portrait-grayscale', 1 - clamp((progress - 0.35) / 0.3));
        image.classList.add('is-traveling');
    }

    function scheduleRender() {
        if (!reducedMotion.matches && animationFrame === null) {
            animationFrame = window.requestAnimationFrame(render);
        }
    }

    function refresh() {
        needsMeasure = true;
        scheduleRender();
    }

    function updateMotionPreference() {
        if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
        document.documentElement.classList.toggle('has-portrait-motion', !reducedMotion.matches);
        if (reducedMotion.matches) {
            image.classList.remove('is-traveling');
            return;
        }
        needsMeasure = true;
        render();
    }

    updateMotionPreference();
    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', refresh);
    window.addEventListener('load', refresh);
    window.addEventListener('pageshow', refresh);
    reducedMotion.addEventListener('change', updateMotionPreference);
    if (document.fonts) document.fonts.ready.then(refresh);
    if (window.ResizeObserver) {
        const observer = new ResizeObserver(refresh);
        observer.observe(source);
        observer.observe(destination);
    }
})();
