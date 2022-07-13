import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    function handleCheck(){
        props.del(props.id);
    }
return(
    <>
    <div className="note-container">
        <div className="container">
        <p className="note-title">{props.title}</p>
        <p className="note-content">{props.des}</p>
        <button onClick={handleCheck}
    ><DeleteIcon /></button>
     </div>
    </div>
    </>
)

}


export default Note;