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
  const height = children.length > 0 ? (children.length + 1) * 70 : 70;
console.log(height)
  return (
    <div ref={drop} className={["drop_content", isActive ? 'active' : ''].join(" ")} style={isActive ? { height: `${height}px` } : {}}>
      {children}
      {JSON.stringify(lastDroppedItem)}
    </div>
  );
};

export default DropContent;