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
        <div>
            <h2>Save a Note</h2>
            <form name="noteInput" onSubmit={handleSubmit}>
                <div className="inputFieldsWrapper">
                    <div className="inputField">
                        <label htmlFor="noteName" name="noteName">Note Title</label>
                        <textarea 
                            id="noteName" 
                            maxLength="30" 
                            name="name"
                            placeholder="E.g. Groceries at 5pm"
                            onInput = {(e) => setName(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div  className="inputField">
                        <label htmlFor="noteStatus" name="noteStatus">Note Status</label>
                        <select 
                            id="noteStatus" 
                            name="noteStatus"
                            onChange = {(e) => setStatus(e.target.value)} 
                            size="4" 
                        >
                            <option value="" defaultValue disabled>Choose a note status:</option>
                            <option value="Active">Active</option>
                            <option value="To-Be-Actioned">To-Be-Actioned</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default NoteInput