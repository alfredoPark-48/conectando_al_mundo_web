const fs = require('fs');
const chalk = require('chalk');

// Funcion para agregar nota
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

// Funcion para eliminar una nota
const removeNote = (title) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (duplicateNotes.length !== notes.length) {
    console.log(chalk.green.inverse('Note removed!'));
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }

  saveNotes(duplicateNotes);
};

// Funcion para leer una nota
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

// Funcion para guardar una nota
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

// Funcion para cargar notas
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Funcion para imprimir notas
const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.green.inverse('Your notes: '));
    notes.forEach((note) => console.log(note.title));
  } else {
    console.log(chalk.red.inverse('No notes found!'));
  }
};

// Exportando funciones
module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
