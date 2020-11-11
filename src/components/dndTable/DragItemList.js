import React from 'react';
import DragItem from './DragItem';

const DragItemList = ({ data = [], type, nameLabel, className, title }) => {
  return (
    <div className={["dragItem_container", className].join(" ")}>
      <div className="dragItem_title">{title}</div>
      <div className="dragItem_content">
        {
          data && data.map(item => {
            return (
              < DragItem
                name={item[nameLabel]}
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