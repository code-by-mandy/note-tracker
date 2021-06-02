import {useRef} from 'react'

const NotesFilter = ({filterString, keyUse}) => {

    const handleFilter = (e) => {
        filterString(e.target.value);
    }

    const fieldSet = useRef(null);

    const keyFocus = () => {
        if (keyUse) {
            fieldSet.current.classList.add("focused");
        }      
    }

    const keyLeave = () => {
        fieldSet.current.classList.remove("focused");
    }

    return (
        <form onFocus={keyFocus} onBlur={keyLeave} name="filter">
            <fieldset name="filter" ref={fieldSet}>
                <legend><h3>Filter Notes</h3></legend>
                <div className="filterWrapper">
                    <div className="filterOption">
                        <input 
                            type="radio" 
                            name="filter" 
                            id="all" 
                            value="all" 
                            defaultChecked="true"
                            onClick={handleFilter}
                        ></input>
                        <label htmlFor="all" name="filter">All</label>
                    </div>
                    <div className="filterOption">
                        <input 
                            type="radio" 
                            name="filter" 
                            id="active" 
                            value="active"
                            onClick={handleFilter}
                        ></input>
                        <label htmlFor="active" name="filter">Active</label>
                    </div>
                    <div className="filterOption">
                        <input 
                            type="radio" 
                            name="filter" 
                            id="tba" 
                            value="tba"
                            onClick={handleFilter}
                        ></input>
                        <label htmlFor="tba" name="filter">To-Be-Actioned</label>
                    </div>
                    <div className="filterOption">
                        <input 
                            type="radio" 
                            name="filter" 
                            id="completed" 
                            value="completed"
                            onClick={handleFilter}
                        ></input>
                        <label htmlFor="completed" name="filter">Completed</label>
                    </div>
                </div>
            </fieldset>            
        </form>
    )
}

export default NotesFilter