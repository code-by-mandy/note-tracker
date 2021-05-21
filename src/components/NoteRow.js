const NoteRow = ({name, status}) => {
    return (
        <tr>
            <td className="note">{name}</td>
            <td className="note">{status}</td>
        </tr>
    );
}

export default NoteRow