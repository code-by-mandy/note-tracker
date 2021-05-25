const NoteRow = ({name, status}) => {

    const capitalize = string => {

        if (string === "tba") {
            return string.toUpperCase();
        } else {
            const firstLetter = string.charAt(0);
            const upperFirst = firstLetter.toUpperCase();
            
            const slicedWord = string.slice(1);
            
            return `${upperFirst}${slicedWord}`
        }        
    }

    const finalName = capitalize(name);
    const finalStatus = capitalize(status);

    return (
        <li className="noteItem">
            <div className="noteRow">   
                <h4>{finalName}</h4> 
                {
                    finalStatus !== "" ? <p>({finalStatus})</p> : null
                }  
            </div>                      
        </li>
    );
}

export default NoteRow