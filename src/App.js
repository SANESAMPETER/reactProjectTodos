import './App.css';
import MyComponents from './components/MyComponents'; 
import Header from './components/Header'; 
import ChildComponents from './components/ChildComponents'; 
import Home from './pages/Home'; 
import Todos from './components/Todos';
// import MovieCard from './movieComponents/MovieCard'; 




function App() {
  const myName = 'John Doe'; // 
  const myAge = 30; 
const isDisplay = { display: 'none' };  // ✅ JavaScript object
  const myHobbies = ['Reading', 'Traveling', 'Cooking']; //
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'John' }

  ];

  const handleMessage=(inputValue)=>{
alert("Hi from Parent: "+inputValue);
  };
  return (
    <div className="App">
      <div className='react_JSX_Props' style={isDisplay}>

      <b>Name:{myName}</b>
      <p>Age: {myAge}</p>
      <ul>
        {myHobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {users.map(user=>(
        
        <p> {user.name}</p>
      ))}
        <Header style={{display:'none'}} userName={myName} />
                <MyComponents userName={myName} />

  <ChildComponents style={{display:'none'}} sendMessage={handleMessage}/>
      </div>
      <Home style={{display:'none'}}/>
<Todos/>
    </div>
  );
}
// 42.52
export default App;
