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
  const [filter, setFilter] = useState("All");

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

      if (filter !== ("All")) {
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

            {/* Using table here to reflect ask of tech challenge; would use flexbox or grid for responsive design */}
              <table>
                <caption><h2>Notes List</h2></caption>
                <tbody className="notesList">
                  <tr>
                    <td colSpan="2"><NotesFilter filterString = {getFilterInput} notesLength = {notes.length}/></td>
                  </tr>
                  <tr>
                    <th scope="col"><h3>Note Name</h3></th>
                    <th scope="col"><h3>Note Status</h3></th>
                  </tr>

                  { notes.length === 0 ?
                    <tr>
                      <td colSpan="2" className="placeholderRow"><em>Save a note to start!</em></td>
                    </tr> :
                    filteredNotes.map(note => {
                      return (
                        <NoteRow key={notes.indexOf(note)} name={note.name} status={note.status}/>
                      )
                    }) 
                  }
                </tbody>
              </table>                    
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
