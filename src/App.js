import {useState} from 'react'
import NoteInput from './components/NoteInput'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Note Tracker</h1>
        <p>Life is too short for lost notes - keep track of them here!</p>
      </header>
      <main>
        < NoteInput />
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
