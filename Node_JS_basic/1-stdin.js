// Affiche un message de bienvenue dans la console.
console.log('Welcome to Holberton School, what is your name?');

// Écoute l'événement 'data' sur l'entrée standard (stdin).
// Cet événement est déclenché lorsque l'utilisateur saisit des données et appuie sur Entrée.
process.stdin.on('data', (name) => {
  // Écrit la réponse contenant le nom saisi par l'utilisateur dans la sortie standard (stdout).
  process.stdout.write(`Your name is: ${name}`);

  // Affiche un message avant de fermer le logiciel.
  console.log('This important software is now closing');

  // Termine le processus avec un code de sortie 0 (fin normale).
  // Cela ferme l'application.
  process.exit();
});
