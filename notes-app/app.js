const yargs = require('yargs');
const notes = require('./notes');

// Comando para agregar nota
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Comando para quitar nota
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Comando para imprimir todas las notas
yargs.command({
  command: 'list',
  description: 'List all notes',
  handler: (argv) => {
    notes.listNotes();
  },
});

// Comando para leer una nota
yargs.command({
  command: 'read',
  description: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
