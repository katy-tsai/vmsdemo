import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const DndContainer = ({ children }) => {
  return (
    <div className="dnd_div">
      <DndProvider backend={HTML5Backend}>
        {children}
      </DndProvider>
    </div>
  );
};

export default DndContainer;