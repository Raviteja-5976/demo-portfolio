# Master Portfolio Generation Prompt

Use the instructions, design specifications, and layouts described below to generate a production-ready, highly-interactive, responsive Next.js portfolio website. This prompt, when combined with `design.md` (for color/font definitions) and `information.md` (for content payload), must produce a warning-free, compile-safe Neo-Brutalist website.

---

## 1. Project Architecture & Setup

Initialize a **Next.js App Router** project with the following configuration:
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Do NOT use Tailwind CSS. Rely on a global CSS file, CSS Modules, or clean inline styles).
- **Libraries/Dependencies:**
  - `framer-motion` (for animations, layout transitions, and hover effects)
  - `gsap` (for custom scroll triggers and mouse effects)
  - `lenis` (for smooth scrolling wrapper)
  - `react-icons` (for icons: lucide, fa, etc.)
- **Folder Structure:**
  ```text
  src/
  ├── app/
  │   ├── favicon.ico
  │   ├── globals.css
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components/
  │   ├── SmoothScroll.tsx
  │   ├── Navbar.tsx
  │   ├── Hero.tsx
  │   ├── About.tsx
  │   ├── Skills.tsx
  │   ├── Projects.tsx
  │   ├── Experience.tsx
  │   ├── Education.tsx
  │   ├── Achievements.tsx
  │   └── Contact.tsx
  public/
  └── images/
      ├── avatar.png
      ├── workstation.png
      ├── project_1.png
      ├── project_2.png
      └── project_3.png
  ```

---

## 2. Core Styling System (globals.css)

Your `src/app/globals.css` must configure custom CSS variables, default body layouts, and global utility classes for the Neo-Brutalist design language.

### Color and Font Design Tokens
Define the following custom variables in `:root` (values sourced from `design.md`):
- `--color-canvas`: Canvas background color (e.g. `#FAF6EE`)
- `--color-paper`: Card background color (e.g. `#FDFCFA`)
- `--color-text`: Text and border color (e.g. `#1E1E1E`)
- `--color-border`: Border color (e.g. `#000000`)
- `--color-yellow`: Accent Yellow color (e.g. `#FED049`)
- `--color-yellow-hover`: Hover Accent Yellow color (e.g. `#FFE082`)
- `--color-mint`: Accent Mint color (e.g. `#86EFAC`)
- `--color-mint-hover`: Hover Accent Mint color (e.g. `#A7F3D0`)
- `--color-red`: Accent Red color (e.g. `#FF5A5F`)
- `--color-header`: Layout Header color (e.g. `#EADEC9`)
- `--font-space-grotesk`: Primary heading font (fallback to sans-serif)
- `--font-lora`: Secondary body font (fallback to serif)
- `--font-jetbrains-mono`: Monospace code font (fallback to monospace)

### Base Styles
- **HTML & Body:** Background set to `--color-canvas`, text to `--color-text`, default font to Space Grotesk. Enable `min-height: 100vh`.
- **Typography:**
  - `h1` through `h6`: Font family Space Grotesk, bold (weight 800), text-transform uppercase.
  - `p`, `span`, `li`, `label`: Font family Lora, serif, line-height 1.6.
  - `code`, `pre`: Font family JetBrains Mono.
- **Scrollbar:** Width 12px. Track background `--color-canvas` with a 4px black left-border. Thumb background `--color-text` with a 2px canvas border.

### Global Utility Classes
- **`.neo-card`:**
  - Background color: `var(--color-paper)`
  - Border: `4px solid var(--color-border)`
  - Shadow: Offset only `10px 10px 0 var(--color-border)` (never blur)
  - Transition: Transform and box-shadow on `0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)`
  - Hover effect: `transform: translate(-4px, -4px); box-shadow: 14px 14px 0 var(--color-border);`
- **`.neo-btn`:**
  - Default background: `var(--color-yellow)` (or modifier classes like `.neo-btn-mint` with `--color-mint`, `.neo-btn-red` with `--color-red`)
  - Border: `4px solid var(--color-border)`
  - Shadow: Offset only `6px 6px 0 var(--color-border)`
  - Text: Uppercase, weight 800, Space Grotesk font.
  - Transitions: Lift on hover (`transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--color-border);`), depress on click (`transform: translate(4px, 4px); box-shadow: 2px 2px 0 var(--color-border);`).
- **`.bg-plus-grid`:** Canvas color background overlayed with a dot-pattern `radial-gradient` (black dots, 1.5px size, 30px spacing).
- **`.noise-overlay`:** A fixed `inset: 0` pointer-events disabled overlay with opacity `0.04` and an SVG turbulence noise filter.
- **`.availability-badge`:** Rotation `-2deg`, background `--color-mint`, border 2px solid black, offset shadow `3px 3px 0 black`, containing a green pulsing dot animation.

---

## 3. Layout & Setup Wrapper

### Root Layout (src/app/layout.tsx)
- Load primary, secondary, and monospace fonts via Google Fonts. Map their variable parameters (`--font-space-grotesk-fallback` etc.) to the HTML container.
- Embed the `.noise-overlay` directly into the HTML root body shell.
- Configure SEO metadata dynamically (Title: `"{Name} | {Professional Title}"`, description, keywords).

### Smooth Scroll (src/components/SmoothScroll.tsx)
- Wrap application children in a Client Component initializing `Lenis` vertical scrolling with dynamic animation duration (1.2s) and exponential deceleration easing (`(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`).

### Page Grid Shell (src/app/page.tsx)
- Stitch all sections inside the smooth scroll provider. Flow: `Navbar`, followed by `<main>` container housing `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Achievements`, `Contact` in sequential order.

---

## 4. Component-Level Visual and Layout Specs

### A. Navbar
- **Visuals:** Floating pill centered fixed at the bottom (`bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 999;`). Background Paper, border 4px black, shadow 8px 8px 0 black. Rounded corners `9999px`.
- **Logic:** Map tabs (Home, About, Skills, Projects, Experience, Stats, Contact) to anchor links. Use standard intersection observers or scroll listeners to compute the active section. The active tab button changes to background Yellow, gets a 2px black border, and font weight 800. Auto-hide labels on mobile screens (display icons only).

### B. Hero
- **Grid Layout:** 2-column layout (`1.2fr 0.8fr`) stacking to 1 column on `< 868px`. Min-height 100vh, plus-grid background.
- **Floating Badge:**
  - Floating Badge: Red sticker containing motion or status context (e.g. `"✨ 60FPS MOTION"`), white text, rotated `8deg`, 2px border, 2px shadow.
  - **Responsiveness:** Hide the floating badge on mobile screens (viewport `< 868px`) using a target class `.hero-sticker { display: none !important; }` to keep the layout clean and prevent overlap on text.
- **Left Column:**
  - Render the availability badge at the top (populated from `Availability` in `information.md`).
  - H1 headline in Space Grotesk: Uppercase zine headline (e.g., `"CREATIVE \n ENGINEERING \n FOR THE WEB."` or parsed from `Headline`). Wrap the main tech noun in a skewed rotated Yellow box with a 4px black border.
  - Subtitle: Lora font description introducing `{Name}` and their tagline.
  - CTAs: "Hire Me" (scrolls to Contact) and "Resume" (Mint modifier pill).
  - Social icons row: GitHub, LinkedIn, Twitter, Dev.to represented as round circular neo-buttons.
- **Right Column:**
  - Neo-card containing `avatar.png` cartoon avatar. Avatar sits in a header-colored (`#EADEC9`) 4px solid border frame. Underneath, display name `{Name}` in Space Grotesk and location coordinates from `information.md` in JetBrains Mono.

### C. About
- **Grid Layout:** 2-column layout (`0.9fr 1.1fr`) stacking to 1 column on `< 868px`.
- **Sticky Label:** Red badge at the top: `"SECTION 01 // WHO_IS_{FIRST_NAME}"`, rotated `-1deg`, shadow 4px 4px 0 black.
- **Left Column:**
  - Polaroid style frame: Neo-card rotated `-2deg` containing `workstation.png` desk or workshop illustration inside a border frame. Bottom text: `# MY_WORKSTATION.JPG // {Year}` in JetBrains Mono.
  - Hobbies widget: Card with header background listing interests and hobbies populated from `information.md` styled with emojis.
- **Right Column:**
  - H2: A bold manifesto title (e.g. `"RESCUING THE WEB FROM BORING TEMPLATES."` or derived from `Mission`).
  - Narrative paragraphs summarizing career goals and focus areas.
  - Two side-by-side Bento cards (Mission [mint] & Vision [yellow]).
  - Journey Timeline: Vertical timeline stack. Each card spans grid columns (`100px 1fr` on desktop, 1 column on mobile). Displays year in a canvas-colored badge, role name, company, and description.

### D. Skills
- **Sticky Label:** Yellow badge: `"SECTION 02 // TECHNICAL_SKILLS"`, rotated `1.5deg`, shadow 4px 4px 0 black.
- **Categories Tab Filter:** Tag buttons listing standard categories from `information.md` (e.g., `ALL`, `FRONTEND`, `BACKEND & DB`, `DEVOPS & CLOUD`, `AI & CREATIVE TOOLS`, `SOFT SKILLS`). Active tab has black background with white text, and translates `3px, 3px` to depress its shadow.
- **Skills Grid:** Render list of skill chips wrapped in Framer Motion `AnimatePresence`. Each chip is a neo-card tag with white background, 3px border, 4px shadow, JetBrains Mono font. Hover tilts/lifts chip `translate(-3px, -3px)` and changes its background to a category-specific color.

### E. Projects
- **Sticky Label:** Mint badge: `"SECTION 03 // FEATURED_PROJECTS"`, rotated `-1deg`.
- **Projects Grid:** Auto-fit responsive columns layout using `gridTemplateColumns: repeat(auto-fit, minmax(min(100%, 350px), 1fr))`. This prevents the 350px card elements from overflowing the grid container and cutting off on small mobile devices.
- **Project Cards:**
  - Framer motion card container with hover lift (`translate(-8px, -8px)`), shadow shift (`16px 16px 0 black`), and custom tilt rotations.
  - Top Image Frame: Height 240px with border bottom. Contains cover image (`project_1.png` etc.) using `fill`, `objectFit: "cover"`, and proper Next.js performance `sizes` attribute.
  - Status Sticker: Absolute positioned top-right (e.g. Mint "ACTIVE", Yellow "COMPLETE", Red "IN PROGRESS") with a 2px black border.
  - Card Body: Title, description, unordered list of key features, technology badges, and action button triggers (GitHub link and Mint-colored Live Demo link).

### F. Experience & Certifications
- **Sticky Label:** Red badge: `"SECTION 04 // WORK_EXPERIENCE"`, rotated `1deg`.
- **Grid Layout:** 2-column layout (`1.3fr 0.7fr`) stacking to 1 column on `< 868px`.
- **Left Column (Experience):** Vertical roadmap list of cards. Header containing Role, Company in JetBrains Mono, and Duration badge. Underneath, a descriptions paragraph and tech tag lists.
- **Right Column (Certifications):** Postage-stamp styled cards. Border: `4px dashed black`, background Header, offset shadow `8px 8px 0 black`, rotated slightly. Includes "POSTAGE OFFICIAL" stamp label at the top center. Displays certification icon, title, issuer, credential ID, and issue date.

### G. Education
- **Sticky Label:** Yellow badge: `"SECTION 05 // ACADEMIC_STUDIES"`, rotated `-1.5deg`.
- **Notebook Paper Card:**
  - Base Card: Pure white background, `4px solid black` border, `12px 12px 0 black` shadow.
  - Page Margins: Large left padding (`padding: 2rem 2rem 2rem 4.5rem`) with a double-red vertical line at `left: 3.5rem`.
  - Blue Lined Paper Graphic: Background repeating linear gradient (`repeating-linear-gradient(transparent, transparent 27px, #e2e8f0 27px, #e2e8f0 28px)`) with line-height set to `28px` to match lines.
  - Binder Rings: Left edge has 4 binder circles styled as canvas-filled rings with black borders.
  - Contents: College name, Degree, major, duration, CGPA, coursework, and extracurricular activities.
  - **Responsiveness:** On viewports `< 600px`, scale down left padding to `2.75rem`, shift the margin red line to `left: 2rem`, place the binder rings at `left: 0.5rem` (scaled to `12px` diameter), and adjust the header title font size to `1.25rem` to avoid text cutoff.

### H. Achievements
- **Sticky Label:** Red badge: `"SECTION 06 // STATS_ACCOLADES"`, rotated `-1deg`.
- **Bento Grid:** 2 columns responsive layout.
- **Stats Cards:** 4 neo-cards with varying span configurations:
  - Card 1: Spans 2 rows, background Mint.
  - Card 2: Spans 1 row, background Yellow.
  - Card 3: Spans 1 row, background Red, white text.
  - Card 4: Spans 2 columns, background Header.
- **Counters:** Big bold counter values (e.g. `12+`, `1.2k+`) with a 1px black stroke wrapper, and a short summary description.

### J. Contact & Footer
- **Sticky Label:** Yellow badge: `"SECTION 07 // GET_IN_TOUCH"`, rotated `1deg`. Plus-grid background.
- **Contact Form:** Neo-card container. Inputs (Name, Email), Enquiry category selection tags (Creative, Full-Stack, Consulting, Other), textarea message box, and Mint-colored transmit submit button. Input boxes get Yellow borders and 4px shadows on active focus state.
- **Success Modal:** Framer Motion modal overlay displaying success icon, title "TRANSMISSION SHIPPED!", and a "DISMISS" close button.
- **Footer:** Bottom layout, designed copyright label (`"{Name} © {Year}"`), and raw uppercase text links for Github, Linkedin, and Twitter.

---

## 5. Next.js Optimization Requirements
- Ensure all Next.js `<Image>` components that use `fill` have a `sizes` attribute matching their layout dimensions (e.g. `sizes="(max-width: 768px) 100vw, 400px"`) to prevent compiler warnings.
- Code should be strictly checked for TS compliance, React keys, and HTML syntax validation before deployment.
