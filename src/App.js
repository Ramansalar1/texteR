
// export default App;
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar' ;
import Textform from './components/TextForm' ;
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState("null");

  const showalert=(message,type)=>{
    setalert({
     msg:message,
     type:type
    })
    setTimeout(() => {
      setalert("null");
    }, 1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showalert("dark mode has been enabled","success");
      document.title='texteR-dark mode';
      setInterval(()=>{
        document.title='texteR-install now';
      },1000);
      setInterval(()=>{
        document.title='texteR-intresting know';
      },2000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
      document.title='texteR-light mode';
    }
  }
  return (
   
   <>
  <Navbar title="TexteR" mode={mode} toggle={togglemode}/>
  <Alert alert={alert}/>

  <div className='container my-3'>
  <Textform mode={mode} showalert={showalert}/>
  {/* <About / > */}
  </div>

</>
    
  );
}

export default App;
