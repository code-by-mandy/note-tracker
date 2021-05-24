const NotesFilter = ({filterString, notesLength}) => {

    const handleFilter = (e) => {
        filterString(e.target.textContent);
        e.target.classList.add("active");
        e.target.setAttribute("aria-pressed", true);

        const filters = document.querySelectorAll('li > button');
        filters.forEach( filter => {
            if (filter !== e.target) {
                filter.classList.remove("active");
                filter.setAttribute("aria-pressed", false);
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
                        <button onClick={handleFilter} aria-pressed="false">All</button> :
                        <button onClick={handleFilter} className="active" aria-pressed="true">All</button>
                    }                    
                </li>
                <li><button onClick={handleFilter} aria-pressed="false">Active</button></li>
                <li><button onClick={handleFilter} aria-pressed="false">To-Be-Actioned</button></li>
                <li><button onClick={handleFilter} aria-pressed="false">Completed</button></li>
            </ul>
        </div>
    )
}

export default NotesFilter