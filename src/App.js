import {useState} from 'react'
import NoteInput from './components/NoteInput'
import NotesFilter from './components/NotesFilter'
// import NotesTable from './components/NotesTable'

function App() {

  const [notes, setNotes] = useState([]);


  const submitNote = (e, noteName, noteStatus) => {
    e.preventDefault();
    addNote(noteName, noteStatus);
  }

  const addNote = (name, status) => {
    const notesArray = [...notes];
    notesArray.push({name, status})
    setNotes(notesArray);
  }
  
  let filteredArray = [];
  console.log(filteredArray);

  return (
    <div className="App">
      <header>
        <h1>Note Tracker</h1>
        <p>Life is too short for lost notes - keep track of them here!</p>
      </header>
      <main>
        <NoteInput 
          submitNote = {submitNote}
        />

        <NotesFilter notesArray={notes} filteredArray = {(array) => filteredArray = array}/>

        <div>
            <table>
            <caption>Notes List</caption>
            <tbody className="notesList">
                {
                notes.map(note => {
                    return (
                    <tr>
                        <td>{note.name}</td>
                        <td>{note.status}</td>
                    </tr> 
                    )
                })
                }
            </tbody>
            </table>
        </div>

      </main>
      <footer>
        <p>Created by Mandy Poon &#169; 2021</p>
        <p><a href="https://github.com/code-by-mandy/note-tracker">Github repository</a></p>
      </footer>
    </div>
  );
}

export default App;
