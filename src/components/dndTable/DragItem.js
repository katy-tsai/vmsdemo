import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name, type, item }) => {
  const [{ opacity, isActive }, drag] = useDrag({
    item: { name, type, ...item },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      isActive: monitor.isDragging()
    }),
  });

  return (
    <div className={["drag_item", `drag_item_${type}`, isActive ? 'active' : ''].join(" ")} ref={drag} style={{ opacity }}>
      { name}
    </div>
  );
};

export default DragItem;