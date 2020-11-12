import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name, type, item }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type, ...item },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div className={["drag_item", `drag_item_${type}`].join(" ")} ref={drag} style={{ opacity }}>
      { name}
    </div>
  );
};

export default DragItem;