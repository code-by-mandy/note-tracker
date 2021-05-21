// import {useState} from 'react'
import NoteInput from './components/NoteInput'

function App() {

  const submitNote = (e, noteName, noteStatus) => {
    e.preventDefault();
    addNote(noteName, noteStatus);
  }

  const addNote = (name, status) => {
    console.log(name, status);
  }

  return (
    <div className="App">
      <header>
        <h1>Note Tracker</h1>
        <p>Life is too short for lost notes - keep track of them here!</p>
      </header>
      <main>
        < NoteInput 
          submitNote={submitNote}
        />
        {/* Notes component */}
      </main>
      <footer>
        <p>Created by Mandy Poon &#169; 2021</p>
        <p><a href="https://github.com/code-by-mandy/note-tracker">Github repository</a></p>
      </footer>
    </div>
  );
}

export default App;
