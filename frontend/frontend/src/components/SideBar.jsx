import React from "react";

const SideBar = () => {
  return (
      <aside className="flex flex-row h-100px">
        <div  style={{ backgroundColor: 'black', width: '200px', color: 'white',height:'97vh' }}>
          <ul>
            <li className="p-4">option link 1</li>
            <li className="p-4">option link 2</li>
            <li className="p-4">option link 3</li>
          </ul>
        </div> 
    </aside>
  );
};

export default SideBar;