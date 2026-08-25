(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'laravinicius-theme';

    function getInitialTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        }
    }

    applyTheme(getInitialTheme());

    if (toggle) {
        toggle.addEventListener('click', function () {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }

    // ===== terminal typing =====

    const typedEl = document.getElementById('typed-role');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!typedEl || prefersReducedMotion) {
        return;
    }

    const SEQUENCES = [
        'Analista de TI / Desenvolvedor Full-stack',
        'PHP · Laravel · React',
        'Node.js · Express · SSE',
        'C# · WinForms · TCP',
        'Rust · Tauri v2',
        'Docker · Proxmox · Nginx',
        'pfSense · MikroTik · WireGuard'
    ];

    const TYPE_MS = 45;
    const DELETE_MS = 22;
    const HOLD_MS = 2400;
    const FIRST_HOLD_MS = 3200;

    let seqIndex = 0;
    let charIndex = SEQUENCES[0].length;

    function tick() {
        const current = SEQUENCES[seqIndex];
        const holdMs = seqIndex === 0 ? FIRST_HOLD_MS : HOLD_MS;

        if (charIndex < current.length) {
            charIndex++;
            typedEl.textContent = current.slice(0, charIndex);
            setTimeout(tick, TYPE_MS);
        } else {
            setTimeout(erase, holdMs);
        }
    }

    function erase() {
        const current = SEQUENCES[seqIndex];

        if (charIndex > 0) {
            charIndex--;
            typedEl.textContent = current.slice(0, charIndex);
            setTimeout(erase, DELETE_MS);
        } else {
            seqIndex = (seqIndex + 1) % SEQUENCES.length;
            setTimeout(tick, TYPE_MS);
        }
    }

    typedEl.textContent = '';
    setTimeout(tick, 600);
})();
