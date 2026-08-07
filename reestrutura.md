# Plano de Atualização — laravinicius.github.io

## 1. Diagnóstico do site atual

O portfólio hoje mostra só projetos de estudo (NLW Copa, NLW eSports, telas de login, "Hora do Dia", Cordel Moderno, mascote Android) e listas de cursos (HTML/CSS/JS com Curso em Vídeo). Isso não reflete mais o seu nível atual — hoje você atua como analista de TI full-stack, cuidando de infraestrutura, redes e sistemas internos em produção. O site precisa sair de "portfólio de estudante" para "portfólio de analista de TI / desenvolvedor full-stack + infra".

## 2. Novos projetos para destacar

Organize em categorias, já que seus projetos hoje são bem mais variados que antes:

**Sistemas web internos (PHP/Laravel/React)**
- `microgate_caixa` — sistema de caixa/financeiro (Laravel + React)
- `microgate_restrito` — agendamento de técnicos e controle de KM, com WebView Android
- Sistema de caixa diário para loja (PHP/MySQL)

**Infraestrutura e automação**
- `topologia` — ferramenta de mapeamento de infraestrutura em Node.js + Express, com SSE e multi-tenant
- Stack de atendimento via WhatsApp (Evolution API + Chatwoot + Typebot)
- Simulações de phishing internas com GoPhish + Cloudflare Tunnel
- VPN site-to-site com pfSense (IPsec) entre matriz e filial
- Homelab próprio: Proxmox, Docker, MariaDB, Nginx Proxy Manager, MikroTik/WireGuard

**Desktop**
- `PharmaFlow` — sistema de gestão para farmácia, migrando de Electron para Tauri v2 (Rust)

**Acadêmicos**
- `SalaReserva` — sistema de reserva de salas em C# WinForms com TCP e SQLite
- `CornHub` — sistema de reserva de cinema em PHP/MVC

> Dica: nem todo projeto precisa de link público (muitos são internos da Microgate) — para esses, descreva o problema resolvido e as tecnologias, sem expor código proprietário.

## 3. Novas habilidades a adicionar

- Backend: PHP, Laravel, Node.js/Express, C#
- Frontend: React, JavaScript, HTML5/CSS3
- Desktop: Rust, Tauri
- Infra: Docker, Proxmox, Nginx Proxy Manager, pfSense, MikroTik, WireGuard, Active Directory/PowerShell
- Banco de dados: MySQL/MariaDB, SQLite
- Segurança: GoPhish, conscientização de segurança
- DevOps/AI tooling: Claude Code, opencode, comparação entre ferramentas de codificação com IA

## 4. Estrutura sugerida para o site

1. **Header/Hero** — foto, nome, título atualizado (ex: "Analista de TI / Desenvolvedor Full-stack")
2. **Sobre mim** — breve resumo da atuação atual na Microgate
3. **Projetos profissionais** — cards com nome, stack, descrição curta, link (quando público)
4. **Infraestrutura & Homelab** — seção separada mostrando stack self-hosted (isso é diferencial forte para vaga de infra)
5. **Projetos acadêmicos** — os projetos da faculdade
6. **Skills** — grid ou badges por categoria (backend, frontend, infra, ferramentas)
7. **Projetos de estudo antigos (NLW, cursos)** — pode manter em uma seção secundária/collapse, não como destaque principal
8. **Contato/redes sociais** — manter GitHub, LinkedIn, Instagram, Twitter

## 5. Prompt pronto para colar no opencode

```
Quero atualizar meu portfólio pessoal (repositório laravinicius/laravinicius.github.io, site estático em HTML/CSS/JS hospedado no GitHub Pages).

Contexto: hoje o site só mostra projetos de estudo antigos (NLW Copa, NLW eSports, telas de login, etc). Preciso reestruturar para refletir minha atuação atual como analista de TI / desenvolvedor full-stack.

Faça o seguinte:

1. Reorganize o conteúdo em seções: Sobre mim, Projetos profissionais, Infraestrutura & Homelab, Projetos acadêmicos, Skills, Projetos de estudo (secundário), Contato.

2. Adicione os seguintes projetos profissionais (crie cards com nome, stack usada e descrição curta; sem link público quando eu não indicar um):
   - microgate_caixa: sistema de caixa/financeiro (Laravel + React)
   - microgate_restrito: agendamento de técnicos e controle de KM, com WebView Android (PHP)
   - topologia: ferramenta de mapeamento de infraestrutura (Node.js + Express, SSE, multi-tenant)
   - PharmaFlow: sistema de gestão para farmácia, migrando de Electron para Tauri v2 (Rust)
   - Stack de atendimento via WhatsApp: Evolution API + Chatwoot + Typebot
   - Simulações de phishing internas: GoPhish + Cloudflare Tunnel

3. Adicione uma seção "Infraestrutura & Homelab" destacando: Proxmox, Docker, MariaDB, Nginx Proxy Manager, MikroTik, WireGuard, pfSense (VPN IPsec site-to-site), Active Directory/PowerShell.

4. Adicione os projetos acadêmicos: SalaReserva (C# WinForms, TCP, SQLite) e CornHub (PHP/MVC, reserva de cinema).

5. Atualize a seção de skills para incluir: PHP, Laravel, Node.js, React, C#, Rust/Tauri, Docker, Proxmox, Nginx Proxy Manager, pfSense, MikroTik, MySQL/MariaDB, SQLite, GoPhish, Active Directory/PowerShell.

6. Mova os projetos antigos de estudo (NLW Copa, NLW eSports, telas de login, Hora do Dia, Redes Sociais, Cordel Moderno, Mascote Android) e a lista de cursos para uma seção secundária, menos em destaque, sem apagar.

7. Mantenha o layout responsivo e o estilo visual atual do site (ou sugira uma leve modernização se fizer sentido), preservando os links de redes sociais no rodapé.

8. Não invente projetos, links ou descrições que eu não tenha fornecido — onde faltar informação, deixe um placeholder claro para eu preencher.
```

---

Ajuste os nomes/links/descrições onde eu simplifiquei ou você quiser detalhar mais antes de mandar pro opencode.