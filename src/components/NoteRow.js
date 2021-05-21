const NoteRow = ({name, status}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{status}</td>
        </tr>
    );
}

export default NoteRow