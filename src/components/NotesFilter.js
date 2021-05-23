import {useEffect, useState} from 'react'

const NotesFilter = ({filterArray, notesLength}) => {

    const [checkedBoxes, setCheckedBoxes] = useState([]);

    useEffect(() => {
        const checkBoxesNode = document.querySelectorAll('input[type=checkbox]');
        const checkBoxesArray = Array.from(checkBoxesNode);
        setCheckedBoxes(checkBoxesArray);
    }, []);  
        
    const handleFilter = () => {
        const oldBoxes = [...checkedBoxes];
        const updatedBoxes = oldBoxes.filter(box => box.checked);
        filterArray(updatedBoxes);     
    };

    return (
        <form className="filterSection">
            <fieldset>
                <legend htmlFor="filter"><h3>Filter Notes</h3></legend>
                <div>
                    <input type="checkbox" name="filter" id="all" value="all" onClick= {handleFilter}></input>
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="active" value="active" onClick= {handleFilter}></input>
                    <label htmlFor="active">Active</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="tba" value="tba" onClick= {handleFilter}></input>
                    <label htmlFor="tba">To-Be-Actioned</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="completed" value="completed" onClick= {handleFilter}></input>
                    <label htmlFor="completed">Completed</label>
                </div>
            </fieldset>
        </form>
    )
}

export default NotesFilter