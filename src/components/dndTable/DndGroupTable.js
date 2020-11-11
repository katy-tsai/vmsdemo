import React from 'react';
import { Table, Thead, Column, Tbody, Trow } from '../table/Table';
const DndGroupTable = ({ columns, data, className }) => {
  return (
    <div className={["dnd_table_div", className].join(" ")}>
      <Table className="dnd_table">
        <Thead>
          {
            columns.map((column, index) => {
              return (
                <Column key={`dnd_col_${index}`}>{column.Header}</Column>
              )
            })
          }
        </Thead>
        <Tbody>
          {
            data.map(group => {
              return (
                <Trow key={`dnd_tr_${group.groupId}`}>
                  <Column>{group[columns[0].accessor]}</Column>
                  <Column>
                    {group[columns[1].accessor].map((account, index) => {
                      const height = 100 / group[columns[1].accessor].length;
                      return (
                        <div key={`dnd_col_${account.userId}${index}`} className="col_li" style={{ flex: `0 0 ${height}%` }}>
                          {account.userName}/{account.displayName}
                        </div>
                      )
                    })}
                  </Column>
                  <Column>
                    {group[columns[2].accessor].map((channel, index) => {
                      const height = 100 / group[columns[2].accessor].length;
                      return (
                        <div key={`dnd_col_${channel.channelId}${index}`} className="col_li" style={{ flex: `0 0 ${height}%` }}>
                          {channel.channelName}
                        </div>
                      )
                    })}
                  </Column>
                </Trow>
              )
            })
          }
        </Tbody>
      </Table>
    </div>
  );
};

export default DndGroupTable;