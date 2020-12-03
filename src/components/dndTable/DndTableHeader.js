import React from 'react';

const DndTableHeader = ({children,className,columns}) => {
  return (
    <div className={["dnd_table_div", className].join(" ")}>
      <table className="dnd_table">
        <thead>
          <tr>
          {
            columns.map((column, index) => {
              return (
                <th key={`dnd_col_${index}`} width={column.width} >{column.Header}</th>
              )
            })
          }
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default DndTableHeader;