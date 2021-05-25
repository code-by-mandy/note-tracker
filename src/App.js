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
      const notesArray = [...notes];
      let filteredNotesArray = [];

      if (filter !== ("all")) {
        filteredNotesArray = notesArray.filter(note => note.status === filter)
      } else (
          filteredNotesArray = notesArray
      );
      setFilteredNotes(filteredNotesArray);
    }, [notes, filter])

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Note Tracker</h1>
          <p>Life is too short for lost notes - keep track of them here!</p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <section>
            <NoteInput submitNote = {submitNote}/>  
          </section>      
                
          <section>
            <h2>Note List</h2>
              <div className="notesWrapper">
                <NotesFilter filterString = {getFilterInput}/>
                <div className="notesList">
                  <h3>Your Notes</h3>
                  {
                        notes.length === 0 ?
                        <div className="noteRow">
                          <p className="placeholderRow"><em>Save a note to start!</em></p>
                        </div> :
                        <ul>
                          {
                            filteredNotes.map(note => {
                              return (
                                <NoteRow key={notes.indexOf(note)} name={note.name} status={note.status}/>
                              )
                            }) 
                          }                          
                        </ul>                        
                      }
                </div>     
              </div>                             
          </section>
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>Mandy Poon &#169; 2021 | <a href="https://github.com/code-by-mandy/note-tracker">Github repository</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
