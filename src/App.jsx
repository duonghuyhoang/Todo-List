import { useMemo, useState } from "react";
import { useEffect,useRef } from "react";
import './App.scss'

function App() {
  const [job,setJob] = useState('')
  const [jobs,setJobs] = useState([])
  const inputRef = useRef()
  const handleChange = (e) => {
        setJob(e.target.value);
  }
  const handleSummit = () =>{
      {job && setJobs(prev => [...prev, { id: Math.random(), name: job }])}
        setJob('')
        inputRef.current.focus()
  }
  const handleDelete = (id) =>{
        setJobs(prev => prev.filter(job => job.id !== id))
  }

  return (
   
    <div className="App">
            <h1>Todo-list</h1>
            <input ref={inputRef} 
                   value={job} 
                   onChange={handleChange}/>
            <button onClick={handleSummit}>+</button>
            <ol onClick={(e) => {
              if (e.target.tagName === 'LI') {
                e.target.contentEditable = true;
                e.target.focus();
              }
            }}>
                {jobs.map((job,index) => 
                    <li key={index}>{job.name} <span onClick={() => handleDelete(job.id)}>&times;</span></li>
                )}
            </ol>
            
    </div>  
    
  );
}


export default App;