function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
 let demoDiv = document.getElementById("demo");

  let qty =document.getElementById("qty").value ;
   let titreTexte = document.getElementById("titre").value;
   let contenuTexte = document.getElementById("contenu").value;
  for(let i=0 ;i<qty;i++) 
    {
        demoDiv.innerHTML +=`<h2>${titreTexte+(i+1)}</h2>
          <p> ${contenuTexte +(i+1)}</p>`
              }
    
   
   
    
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
 let couleurSaisie = document.getElementById("couleur").value;
    let qty = document.getElementById("qty").value
    let titreTexte = document.getElementById("titre").value;
    let contenuTexte = document.getElementById("contenu").value;
    
    let demoDiv = document.getElementById("demo");
    
    // 2. Vider la zone
    demoDiv.innerHTML = "";
    
    // 3. Re-générer tout le contenu en y injectant directement la couleur dans la balise <p>
    for (let i = 0; i < qty; i++) {
        demoDiv.innerHTML += `<h3>${titreTexte}</h3>`;
        demoDiv.innerHTML += `<p style="color: ${couleurSaisie}">${contenuTexte}</p>`;
    }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}