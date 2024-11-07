document.addEventListener('DOMContentLoaded', function () {

    // 1. Fonction pour afficher/masquer des sections
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

    // 2. Fonction pour changer de thème (mode sombre / mode clair)
    function toggleTheme() {
        const body = document.body;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.style.backgroundColor = "#f4f4f9";  // Mode clair
            body.style.color = "#333";  // Texte sombre
        } else {
            body.classList.add('dark-mode');
            body.style.backgroundColor = "#333";  // Fond sombre
            body.style.color = "#fff";  // Texte clair
        }
    }

    // 3. Fonction pour animer les sections au défilement
    function animateOnScroll() {
        const sections = document.querySelectorAll('.animate-on-scroll');
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            // Si la section est visible dans la fenêtre du navigateur
            if (position.top < window.innerHeight && position.bottom >= 0) {
                section.classList.add('visible'); // Ajoute la classe visible pour l'animation
            }
        });
    }

    // 4. Effet de survol dynamique
    function addHoverEffect() {
        const hoverElements = document.querySelectorAll('.hover-effect');
        hoverElements.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = "scale(1.1)";  // Agrandissement de l'élément
                item.style.transition = "transform 0.3s ease-in-out";  // Transition douce
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = "scale(1)";  // Retour à la taille initiale
            });
        });
    }

    // 5. Fonction pour changer dynamiquement le contenu d'une section
    function changeContent(sectionId, newText) {
        const section = document.getElementById(sectionId);
        section.innerHTML = newText;
    }

    // Initialisation : Ajout des événements et comportements
    // Ajout d'un événement de défilement pour l'animation
    window.addEventListener('scroll', animateOnScroll);
    
    // Appel initial pour activer les animations dès que la page est chargée
    animateOnScroll();
    
    // Appel de la fonction d'ajout d'effet de survol
    addHoverEffect();

    // Exemple d'ajout de gestion des événements pour des boutons
    document.getElementById('toggleBio').addEventListener('click', function () {
        toggleSection('bioSection');
    });

    document.getElementById('toggleSkills').addEventListener('click', function () {
        toggleSection('skillsSection');
    });

    document.getElementById('toggleExperience').addEventListener('click', function () {
        toggleSection('experienceSection');
    });

    document.getElementById('toggleContact').addEventListener('click', function () {
        toggleSection('contactSection');
    });

    document.getElementById('themeButton').addEventListener('click', function () {
        toggleTheme();
    });

});

