import {useState, useRef} from 'react'

const NoteInput = ( {submitNote} ) => {

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const noteStatus = useRef(null);
    const noteName = useRef(null);

    const handleSubmit = (e) => {
        submitNote(e, name, status);
        setName("");
        setStatus("");
        
        noteStatus.current.value = "";
        noteName.current.value = "";
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
                            ref={noteName}
                        ></textarea>
                    </div>
                    <div  className="inputField">
                        <label htmlFor="noteStatus" name="noteStatus">Note Status</label>
                        <select 
                            id="noteStatus" 
                            name="noteStatus"
                            onChange = {(e) => setStatus(e.target.value)} 
                            size="4" 
                            ref={noteStatus}
                        >
                            <option value="" defaultValue disabled>Choose a note status:</option>
                            <option value="active">Active</option>
                            <option value="tba">To-Be-Actioned</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>                
            </form>
        </div>
        
    )
}

export default NoteInput