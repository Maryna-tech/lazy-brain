import './App.css';
import { useEffect, useState } from 'react';
import image from'./brain.jpg';
import imageTwo from'./5933554.jpg';
import imageThree from'./5933553.jpg';

function App() {
  
  const [activity, setActivity] = useState("");
  useEffect(() => {
    fetchActivity();
}, [])

  const fetchActivity = async () => {
  const response = await fetch("https://bored.api.lewagon.com/api/activity");
  const data = await response.json();
  
  console.log(data.activity);
  setActivity(data.activity)
}

return (

<div className="App">
    <header>
      <div className='app1'>
      <img className='logo' src={image} alt='brain' width="55px" height="55px"/>
      <h1>Lazy Brain</h1>
      </div>
    </header>
    
    <main>
      <h2>Are you Bored yet?</h2>
      <p>Here are some Productive Things to do when you’re bored. Hit the button for an unexpected activity.</p>
      
      <div className='app2'>
        <button onClick={fetchActivity}>New Activity </button>
        <p className='activity'>{activity}</p>
      </div>
      <div className='app'>
        <p>What are you waiting for? 🔔 You are made for better. RIGHT HERE. RIGHT NOW.</p>
        <p>Boredom is not a problem, it's an opportunity. Take Your  TIME...</p>
        <img src={imageTwo} alt='brain-power' width="160px" height="200px"/>
        <img src={imageThree} alt='brain-power' width="320px" height="200px"/>
        <img src={image} alt='brain' width="200px" height="200px"/>
      </div>
    </main>
    
    <footer>
      <p> Copyright © 2024 by Maryna Garaieva. All rights reserved.</p>
    </footer>
</div>

);
}

export default App;