import React,{useState} from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function Header1(){
    const[inputValue,setInputValue]=useState(false);
    const [input,setInput]=useState({
        title:"",
        content:""
    })
    
    const [items,setItems]=useState([])

    function handleCheck(event){
       const {name,value}=event.target;
       setInput(prevValue=>{
       return {
        ...prevValue,
        [name]: value}    
       })
       }
       
       
       function addItem(){
        setItems( prevValue=>{
            return [...prevValue,input]
        }
        )
           setInput({
            title:"",
            content:""
           })                                
       }

       function deleteItem(id){
       setItems(prevValue=>{
        return prevValue.filter((item,index)=>{
            return index!==id
        })
       })
        }
        function isInput(){
            setInputValue(true);
        }
       
return(<>

    <div className="h-1">
        <div className="i-1">
       {inputValue&& <input onChange={handleCheck}  name="title" placeholder="title" value={input.title}/>}
       
        <input onClick={isInput} onChange={handleCheck}  name="content" placeholder="description" value={input.content}/>
        <Zoom in={inputValue}>
        <Fab size="small" color="success" onClick={addItem}><AddIcon /></Fab>
        </Zoom>
        </div>
    </div>

      
       { items.map((item,value)=>{
        return <Note key={value} id={value} title={item.title} des={item.content}  del={deleteItem}  />
       })}
     
     
      
     
     </>
)
}

export default Header1;