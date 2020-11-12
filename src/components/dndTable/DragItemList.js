import React from 'react';
import DragItem from './DragItem';

const DragItemList = ({ data = [], type, nameLabel, className, title }) => {

  return (
    <div className={["dragItem_container", className].join(" ")}>
      <div className="dragItem_title">{title}</div>
      <div className="dragItem_content">
        {
          data && data.map((item, index) => {
            const name = Array.isArray(nameLabel) ? (
              nameLabel.reduce((pre, cur) => {
                pre += item[cur] + "/";
                return pre;
              }, "").replace(/.$/, "")
            ) : item[nameLabel];
            return (
              < DragItem
                key={`dragItem${nameLabel}${index}`}
                name={name}
                type={type}
                item={item}
              />
            )
          })
        }
      </div>

    </div>
  );
};

export default DragItemList;