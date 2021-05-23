const NoteRow = ({name, status}) => {
    return (
        <div>
            <div className="note">{name}</div>
            <div className="note">{status}</div>
        </div>
    );
}

export default NoteRow