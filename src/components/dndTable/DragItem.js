import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name, type, isDropped, item }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type, ...item },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div className="drag_item" ref={drag} style={{ opacity }}>
      {isDropped ? <s>{name}</s> : name}
    </div>
  );
};

export default DragItem;