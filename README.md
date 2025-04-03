# Express Validator

Ce dépôt est un gabarit pour une classe inversée. Les étudiants doivent le
cloner et le remplir avec leur propre code.

## Consignes

- Faire un fork de ce dépôt. Vous pouvez aussi le cloner et créer un nouveau dépôt publique
  sur GitHub ou GitLab que vous rendrez disponible à votre enseignant.
- Lire la documentation de [Express
  Validator](https://express-validator.github.io/docs/) ou trouver des exemples
  sur Internet ou avec votre IA préférée.
- Modifier les fichiers `index.js` et `request.http` pour y ajouter les exemples décrits plus bas.
- Présenter votre travail à la classe en utilisant votre dépôt comme
  référence.

### Exemples

Pour être certain que vous avez bien compris le fonctionnement de la validation
et de la sanitation, vous devez ajouter les exemples suivants dans le fichier `index.js`.
Vous pouvez ajouter des routes supplémentaires et des exemples de requêtes
dans le fichier `request.http`.

- Un exemple de validation d'un champ `email` qui doit être un email valide.
- Un exemple de validation d'un champ `password` qui doit être au moins 8 caractères
  de long et contenir au moins un chiffre et une lettre.
- Un exemple de validation d'un champ `age` qui doit être un entier positif.
- Un exemple de validation d'un champ `username` qui doit être une chaîne de caractères
  entre 3 et 20 caractères, dont les espaces superflus sont supprimés (`trim`).
- Un exemple d'objet JSON qui doit être validé avec des champs `email`, `password`,
  `age` et `username`.
