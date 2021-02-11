// Bienvenue dans la bataille des clics !

// Commencez par écouter l'événement lorsqu'on va cliquer sur l'élément parent et rajouter au compteur parent le nombre de clics effectués.
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function(){
    let parentC = document.getElementById("parent-count");
    parentC.innerHTML ++;
});
// Faire la même chose pour l'élément enfant.
child.addEventListener("click", function(e){
    let childC = document.getElementById("child-count");
    childC.innerHTML ++;
    e.preventDefault(); 
    e.stopPropagation();
});
// Cependant, il ne faut pas que lorsque l'on clique sur l'enfant, le compteur du parent augmente d'une unité. 
// De plus, l'élément enfant étant un lien, la page est censée se recharger à chaque clic. Il faut éviter ce comportement par défaut.