import {useEffect, useState} from 'react'

const NotesFilter = ({notesArray, filteredArray}) => {

    const [statusFilter, setStatusFilter] = useState("");

    const setFilter = (e) => {
        setStatusFilter(e.target.textContent.toLowerCase());
    }
    let filteredNotesArray = [];

    useEffect(() => {
        const allNotes = [...notesArray];


        if (statusFilter !== "all") {
            filteredNotesArray = allNotes.filter(note => note.status === statusFilter)
        } else (
            filteredNotesArray = allNotes);
    }, [statusFilter, notesArray])

    filteredArray(filteredNotesArray);


    return (
        <div>
            <ul>
                <li><button onClick={setFilter}>All</button></li>
                <li><button onClick={setFilter}>Active</button></li>
                <li><button onClick={setFilter}>Completed</button></li>
            </ul>
        </div>
    )
}

export default NotesFilter