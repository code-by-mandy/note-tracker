const NotesFilter = ({filterString}) => {

    return (
        <div>
            <label htmlFor="filter"><h3>Filter Notes</h3></label>
            <ul id="filter" className="filterWrapper">
                <li><button onClick={(e) => filterString(e.target.textContent)}>All</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent)}>Active</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent)}>To-Be-Actioned</button></li>
                <li><button onClick={(e) => filterString(e.target.textContent)}>Completed</button></li>
            </ul>
        </div>
    )
}

export default NotesFilter