import React, { useState } from 'react';
import List from './components/List/List.jsx';
import listSvg from './assets/img/list.png';
import AddList from './components/AddList/AddList.jsx';
import DB from './assets/db.json';


function App() {
  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
   })
  );

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: (<img src={listSvg} alt="List icon" />),
            name: 'All tasks',
          }
        ]} />
        <List items={lists} isRemovable />
        <AddList colors={DB.colors} />
    </div>
      <div className="todo__tasks">
      </div>
    </div>
  );
}

export default App;
