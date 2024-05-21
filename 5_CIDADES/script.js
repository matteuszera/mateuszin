document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => console.log(img));
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => console.log(img));

    
    const paragraphText = "Miami Beach é uma cidade-ilha do sul da Flórida ligada por pontes a Miami continental.";
    
    
    const newParagraph = document.createElement('h3');
    newParagraph.textContent = paragraphText;

    
    document.body.appendChild(newParagraph);
});
