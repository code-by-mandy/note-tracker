const NotesFilter = ({filterString}) => {

    return (
        <div>
            <ul>
                <li><button onClick={(e) => filterString(e.target.textContent.toLowerCase())}>All</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent.toLowerCase())}>Active</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent.toLowerCase())}>To-Be-Actioned</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent.toLowerCase())}>Completed</button></li>
            </ul>
        </div>
    )
}

export default NotesFilter