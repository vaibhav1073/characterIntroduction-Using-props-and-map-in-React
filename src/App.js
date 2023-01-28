import './App.css';
import Header from './Header/Header';

function App() {
  const details=[
    {
      title:"Summary",
      description:"lauda ka Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit odit aspernatur, dolor doloribus, deserunt quod excepturi hic rerum repellat, corrupti qui atque?"
    },
    {
      title:"Education",
      description:"Education ka Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit odit aspernatur, dolor doloribus, deserunt quod excepturi hic rerum repellat, corrupti qui atque?"
    },
    {
      title:"Achievements",
      description:"lauda ka Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit odit aspernatur, dolor doloribus, deserunt quod excepturi hic rerum repellat, corrupti qui atque?"
    }

  ]
  return (
    <div className="App">
      <div className="component">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="John Doe" className='imgJohn' />
    <h1>John Doe</h1>    
      </div>  
      {
        details.map(item=> <Header title={item.title} description={item.description}/>)
      }
    
    
    
     
    </div>
  );
}

export default App;
