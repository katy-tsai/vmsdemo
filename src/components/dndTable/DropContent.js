import React from 'react';
import { useDrop } from 'react-dnd';
const DropContent = ({ accept, lastDroppedItem, onDrop, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;

  return (
    <div ref={drop} className={["drop_content", isActive ? 'active' : ''].join(" ")} style={isActive ? { height: `${(children.length + 1) * 35}px` } : {}}>
      {children}
      {JSON.stringify(lastDroppedItem)}
    </div>
  );
};

export default DropContent;