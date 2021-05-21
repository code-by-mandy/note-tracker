import {useState} from 'react'

const NoteInput = ( {submitNote}) => {

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        submitNote(e, name, status);
        setName("");
        setStatus("");
        
        const clearInputs = document.querySelectorAll('textarea, select');

        clearInputs.forEach(input => input.value="");
    }

    return(
        <form name="noteInput" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="noteName" name="name">Note Name</label>
                <textarea 
                    id="noteName" 
                    maxLength="20" 
                    name="name"
                    placeholder="Note title"
                    onInput = {(e) => setName(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="noteStatus">Note Status</label>
                <select id="noteStatus" onChange = {(e) => setStatus(e.target.value)} size="3">
                    <option value="" defaultValue disabled>Choose a note status</option>
                    <option value="active">Active</option>
                    <option value="tba">To-Be-Actioned</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NoteInput