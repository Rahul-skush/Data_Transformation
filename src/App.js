
import {useState} from "react";
import Axios from 'axios'

function App() {

const [name,setName] = useState("");
const [description,setDescription] = useState("");


const addJob=()=>{
  Axios.post('http://localhost:3000/jobs',{
    name:name,
  description:description  }).then(()=>{
    console.log('success');
  });
};

  return (
    <>
    <div> 
    <label>Name</label>
    <input type="text" onChange={(event)=>{
      setName(event.target.value);
      }}/>
    <label>Description</label>
    <input type="text" onChange={(event)=>{
      setDescription(event.target.value);
      }}/>
    <button onClick={addJob}>Add Job</button>
    </div>
   
    </>
  );
}

export default App;
