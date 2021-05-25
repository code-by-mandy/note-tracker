import {useState} from 'react';

const NotesFilter = ({filterArray}) => {

    const checkBoxesNode = document.querySelectorAll('input[type=checkbox]');
    const checkBoxesArray = Array.from(checkBoxesNode);
    const [updatedFilter, setUpdatedFilter] = useState([]);

    const handleFilter = () => {
        
        const oldBoxes = [...checkBoxesArray];
        const updatedBoxes = oldBoxes.filter(box => box.checked);
        const updatedBoxValues = updatedBoxes.map((box) => {
            return (box.id)
        });

        setUpdatedFilter(updatedBoxValues);

        // checkAll(e);
        

        //if all checked, toggle all, if all unchecked, untoggle all
        filterArray(updatedBoxValues); 
    };

    // const checkAll = (e) => {
    //     if (updatedFilter.includes("all")) {
    //         checkBoxesNode.forEach(checkbox => checkbox.checked = true)
    //     } else if (e.target.value === "all" && e.target.checked === false) {
    //         checkBoxesNode.forEach(checkbox => checkbox.checked = false)
    //     }
    //     console.log(updatedFilter);
    // }

    return (
        <form className="filterSection">
            <fieldset>
                <legend htmlFor="filter"><h3>Filter Notes</h3></legend>
                <div>
                    <input type="checkbox" name="filter" id="all" value="all" defaultChecked="true" onClick= {handleFilter}></input>
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="active" value="active" defaultChecked="true"  onClick= {handleFilter}></input>
                    <label htmlFor="active">Active</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="tba" value="tba" defaultChecked="true" onClick= {handleFilter}></input>
                    <label htmlFor="tba">To-Be-Actioned</label>
                </div>
                <div>
                    <input type="checkbox" name="filter" id="completed" defaultChecked="true"  value="completed" onClick= {handleFilter}></input>
                    <label htmlFor="completed">Completed</label>
                </div>
            </fieldset>
        </form>
    )
}

export default NotesFilter