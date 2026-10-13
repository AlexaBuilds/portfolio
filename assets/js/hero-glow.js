document.addEventListener('DOMContentLoaded', () => {
    const glow = document.getElementById('hero-glow');
    const heroSection = document.getElementById('hero');
    const contactSection = document.getElementById('contact');
    const root = document.documentElement;

    // 1. Efecto Glow seguidor del cursor
    if (glow && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        });

        // 2. Al mover el ratón en la Hero Section, muta la variable CSS a Naranja #fd601d
        heroSection.addEventListener('mouseenter', () => {
            root.style.setProperty('--current-accent', '#fd601d');
            root.style.setProperty('--current-accent-light', 'rgba(253, 96, 29, 0.1)');
        });

        // Al salir del Hero, vuelve suavemente al Azul #29bbe3
        heroSection.addEventListener('mouseleave', () => {
            root.style.setProperty('--current-accent', '#29bbe3');
            root.style.setProperty('--current-accent-light', 'rgba(41, 187, 227, 0.08)');
        });
    }

    // 3. Efecto en la sección de Contacto ("¿Hablamos de tu próximo proyecto?")
    if (contactSection) {
        contactSection.addEventListener('mouseenter', () => {
            root.style.setProperty('--current-accent', '#fd601d');
        });

        contactSection.addEventListener('mouseleave', () => {
            root.style.setProperty('--current-accent', '#29bbe3');
        });
    }
});