import { useState } from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([
    {name: "wash the car", Priority: "low"}, 
    {name: "feed the dog", Priority: "low" },
    {name: "hoover the roof", Priority: "high"}
  ]);

  const [newTask, setNewItem] = useState("");
  const [newPriority, setPriority] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.Priority == "high" ? "high-priority": "low-priority"}>
        <span>
          {item.name}
        </span>
      </li>
    )
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items]
    copyItems.push({ 
      name: newTask, 
      Priority: newPriority 
    });
    setItems(copyItems);
    setNewItem("");
  }




  return (
    <div className="App">
    <h1>Todo List</h1>
    <form onSubmit={saveNewItem} >
      <label htmlFor="new-item"></label>
      <input 
        id="new-item" 
        type="text"
        value={newTask}
        onChange={handleItemInput} />
      <div onChange={handlePriority}>
      <label>High Priority</label> 
      <input name="priority" type="radio" value="high"  className='radio-button' />
      <label>Low Priority</label>
      <input name="priority" type="radio" value="low" className='radio-button'/>
      </div>
      <input type="submit" value="Save new item"/>
    </form>

    <ul>
      {itemNodes}
    </ul>
    
    
    </div>
  );
}

export default App;
