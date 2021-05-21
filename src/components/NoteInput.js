import {useState} from 'react'

const NoteInput = ( {submitNote}) => {

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    return(
        <form name="noteInput" onSubmit={(e) => submitNote(e, name, status)}>
            <div>
                <label htmlFor="noteName" name="name">Note Name</label>
                <textarea 
                    id="noteName" 
                    maxLength="20" 
                    name="name"
                    placeholder="Note title"
                    onChange = {(e) => setName(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="noteStatus">Note Status</label>
                <select id="noteStatus" onChange = {(e) => setStatus(e.target.value)}>
                    <option disabled defaultValue>Status</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NoteInput