//association du script à un fichier json pour les données

fetch("data.json").then(function (response) {
  response.json().then(function (data) {
    console.log(data[1].analogie);
    // Pour chaque analogie on va créer une fonction qui va créer une div en html (y en aura 7 en tout du coup)
    data.forEach(function (f) {
      // Création de la div = 1 blocAna
      var blocAna = document.createElement("div");

      // Ajout de la classe à la div, classe qui sera inscrite dans le tableau data en fonction de chaque analogie
      blocAna.className = f.class;

      // Création du code html dans le blocAna (donc remets les infos du tableau data : l'analogie, la valeur de l'analogie et la description)
      blocAna.innerHTML =
        blocAna.innerHTML +
        '<img src="' +
        f.image +
        '" id=' +
        f.id +
        " class=" +
        f.class +
        ">" +
        '<div class="container-flex"><h2 class="si-jetais">' +
        "Si j'étais " +
        f.analogie +
        ", je serais..." +
        "<br>" +
        "</h2>" +
        '<h3 class="reponse">' +
        f.valeurAnalogie +
        "</h3>" +
        '<h2 class="description">' +
        f.description +
        "</h2></div>" + 
        "</div>";

      // Ajout des div dans le main

      document.querySelector("div.liste-analogies").append(blocAna);
    });

      //Lien API Phillipe Gambette (envoie du contenue remplis dans les cases par les utilisateurs)

    var envoyer = document.querySelector(".send");
    envoyer.addEventListener("click", function () {
      var urlVisitee =
        "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=alisson.menanteau&courriel=" +
        document.querySelector("input#mail").value +
        "&message=Si j'étais " +
        document.querySelector("input#analogie").value +
        ", je serais" +
        document.querySelector("input#valeurAnalogie").value +
        "car" +
        document.querySelector("textarea#pourquoi").value +
        "Image proposée : " +
        document.querySelector("input#lienimage").value;

      fetch(urlVisitee).then(function (response) {
        response.json().then(function (data) {
          console.log("Réponse reçue : ");
          console.log(data);
        });
      });

      // création de l'analogie des utilisateurs

      var blocAna = document.querySelector('div.liste-analogies');
      blocAna.innerHTML = blocAna.innerHTML + '<div class="test"><img src="' + document.querySelector('input#lienimage').value +'" id="findiv"><div class="container-flex"><h2 class="si-jetais">Si j\'étais ' +document.querySelector("input#analogie").value +', je serais...<br></h2><h3 class="reponse">' +document.querySelector("input#valeurAnalogie").value +"</h3><h2 class= \"description \">" +document.querySelector("textarea#pourquoi").value +"</h2></div></div>"

      

    });
  });
});
// création d'un popup pour les mention légales 

document.querySelector(".mention").addEventListener("click", function (click) {

  // Afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
  
  console.log("click");
  document.querySelector("#volet").classList.remove("volet-invisible");
  document.querySelector("#volet").classList.add("volet-visible");
});

document.querySelector("#volet").addEventListener("click", function () {
  document.getElementById("volet").classList.remove("volet-visible");
  document.getElementById("volet").classList.add("volet-invisible");
});



