const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

// Etape 1
// Dans un objet on a des clés =  des valeurs
function afficherDossier(dossier) {
  console.log(dossier.nom);
}

afficherDossier(dossierPrincipal);

// Etape 2

function afficherDossierIteratif(dossier) {
  const stack = [dossier];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.nom);

    if (current.contenu) {
      for (let i = current.contenu.length - 1; i >= 0; i--) {
        stack.push(current.contenu[i]);
      }
    }
  }
}

// Appel de la fonction itérative
afficherDossierIteratif(dossierPrincipal);
