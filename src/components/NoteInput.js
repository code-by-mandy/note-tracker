const NoteInput = () => {
    return(
        <form name="noteInput">
            <div>
                <label htmlFor="noteName" name="name">Note Name</label>
                <textarea id="noteName" maxLength="20" name="name"></textarea>
            </div>
            <div>
                <label htmlFor="noteStatus">Note Status</label>
                <select id="noteStatus">
                    <option disabled>Status</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NoteInput