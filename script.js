// 1. Citation Inspirante au clic
document.getElementById("show-quote-btn").addEventListener("click", function() {
    const quotes = [
        "La seule façon de faire du bon travail, c'est d'aimer ce que vous faites. - Steve Jobs",
        "N'attends pas. Le temps ne sera jamais juste. - Napoleon Hill",
        "Ce qui ne nous tue pas nous rend plus fort. - Friedrich Nietzsche",
        "Les champions ne se relèvent pas toujours après une chute. Ils restent debout. - Serena Williams"
    ];

    // Sélectionner une citation aléatoire
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Afficher la citation dans le div #quote
    document.getElementById("quote-container").innerHTML = `<p>"${randomQuote}"</p>`;
});

// 2. Animation au défilement des sections
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll('.card');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect();
        
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            // Ajouter une classe pour animer les sections visibles
            element.classList.add("animate");
        } else {
            // Retirer l'animation quand l'élément est hors de la fenêtre
            element.classList.remove("animate");
        }
    });
});

// 3. Effet au survol des sections
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('hover');
    });
    card.addEventListener('mouseleave', function() {
        card.classList.remove('hover');
    });
});

// 4. Formulaire dynamique de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche le rechargement de la page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Merci pour votre message, ${name}! Nous reviendrons vers vous à ${email}.`);
        // Réinitialiser le formulaire après soumission
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});

