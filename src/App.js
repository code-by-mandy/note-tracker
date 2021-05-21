import {useEffect, useState} from 'react'
import NoteInput from './components/NoteInput'
import NotesFilter from './components/NotesFilter'
import NoteRow from './components/NoteRow'

function App() {

  //state for storing notes array
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  //get individual note input
  const submitNote = (e, noteName, noteStatus) => {
    e.preventDefault();
    getNotes(noteName, noteStatus);
  }  

  //state for storing filter string
  const [filter, setFilter] = useState("all");

  //get filter when chosen
  const getFilterInput = (chosenFilter) => {
    setFilter(chosenFilter);
  }

  //add note input to array and update notes array with any filters
  const getNotes = (name, status) => {
    const notesArray = [...notes];
    notesArray.push({name, status})    
    setNotes(notesArray);
  }

  //update filterArray per filter change
  useEffect(() => {
    let filteredNotesArray = [];
    const notesArray = [...notes];
    if (filter !== ("all")) {
        filteredNotesArray = notesArray.filter(note => note.status === filter)
    } else (
        filteredNotesArray = notesArray);
    setFilteredNotes(filteredNotesArray);
  }, [notes, filter])

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

        <NotesFilter filterString = {getFilterInput}/>

        <div>
            <table>
            <caption>Notes List</caption>
            <tbody className="notesList">
                {
                  filteredNotes.map(note => {
                    return (
                      <NoteRow key={notes.indexOf(note)} name={note.name} status={note.status}/>
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
