import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './App.css';
import {v4 as uuidv4} from "uuid"
// import Task from "./components/Task";


const App = () => {
  // let message = "Hello world!"; a diferença do state para uma variavel normal(var, let, const)
  // é que ele retorna sempre o valor atual da variavel no componete que a estiver exibindo
  //const [message,setMessage] = useState("Hello world!")
  const [tasks,setTasks] = useState([
    {
      id:'1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id:'2',
      title: 'Ler livros',
      completed: true,

    },
    {
      id:'3',
      title: 'Matar Bolsonaros',
      completed: false,

    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) =>{
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  }

  const handleTaskAddtion = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed:false,
      },
  ];
  setTasks(newTasks); 

 
 
  };

  return (
    <div>
      <div className="container">
        <AddTask handleTaskAddtion={handleTaskAddtion} />
        <Tasks tasks={tasks} bandleTaskClick={handleTaskClick}/>
      </div>
    </div>

  );
  
};
export default App;

//o  fluxo é : o app criou a função, passou para o tasks que recebeu e passsou para o task
// para importar o componete task recem criado para o espaço determinado pra ele na pagina, no caso pra rendereizar dentro da nossa div principal usamos o comando <Tasks />
//fragments = <></>
//para que funcione o envento onclick e necessario mudar o componente para

// npm install uuid serve para criar ids aleatorios


// import React from "react"
// const App = () => {
//   const message = 'Hello World!!!!!'
//   return(
//     <h1>{message}</h1>
//   )
// }
// export default App;
















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



//return <div className="container">{message}</div>
  
  
  //let messageTeste = 'Hello World!!!!!'//let e uma forma de declarar variaveis validas apenas dentro do escopo
  // const [message, setMessage ] = useState("hello world!");


  // return (
  //   <> 
  //     <div className="container">{message}</div>
  //     <button onClick = {() => setMessage{"Helloooooooo!"}}>Mudar menssage</button>
      
  //   </>
  // );