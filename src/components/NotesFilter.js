const NotesFilter = ({filterString, notesLength}) => {

    const handleFilter = (e) => {
        filterString(e.target.textContent);

        e.target.classList.add("active");

        const filters = document.querySelectorAll('li > button');
        filters.forEach( filter => {
            if (filter !== e.target) {
                filter.classList.remove("active");
            }
        });            
    }

    return (
        <div>
            <label htmlFor="filter"><h3>Filter Notes</h3></label>
            <ul id="filter" className="filterWrapper">
                <li>
                    {
                        notesLength === 0 ?
                        <button onClick={handleFilter}>All</button> :
                        <button onClick={handleFilter} className="active">All</button>
                    }                    
                </li>
                <li><button onClick={handleFilter}>Active</button></li>
                <li><button onClick={handleFilter}>To-Be-Actioned</button></li>
                <li><button onClick={handleFilter}>Completed</button></li>
            </ul>
        </div>
    )
}

export default NotesFilter