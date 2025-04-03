const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', (req, res) => {
  res.send(`Hello World!`);
});






// Middleware de validation unique
const validationUtilisateur = [
  body('email')
    .isEmail().withMessage('L\'adresse email n\'est pas valide')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Le mot de passe doit contenir au moins 8 caractères')
    .matches(/\d/).withMessage('Le mot de passe doit contenir au moins un chiffre')
    .matches(/[a-zA-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre'),
  body('age')
    .isInt({ gt: 0 }).withMessage('L\'âge doit être un entier positif'),
  body('username')
    .trim()
    .isLength({ min: 3, max: 20 }).withMessage('Le nom d\'utilisateur doit contenir entre 3 et 20 caractères')
];

//
app.post('/signup', validationUtilisateur, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Utilisateur valide');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});


