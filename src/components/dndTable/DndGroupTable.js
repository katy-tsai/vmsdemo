import React from 'react';
import { Table, Thead, Column, Tbody, Trow } from '../table/Table';
import DropContent from './DropContent';
const DndGroupTable = ({ columns, data = [], className, handleDrop }) => {

  return (
    <div className={["dnd_table_div", className].join(" ")}>
      <Table className="dnd_table">
        <Thead>
          {
            columns.map((column, index) => {
              return (
                <Column key={`dnd_col_${index}`}  >{column.Header}</Column>
              )
            })
          }
        </Thead>
        <Tbody>
          {
            data.length > 0 ? (data.map((group, index) => {
              return (
                <Trow key={`dnd_tr_${group.groupId}`}>
                  <Column >{group[columns[0].accessor]}</Column>
                  <Column >
                    <DropContent accept="accounts" onDrop={(item) => handleDrop(index, item, 'accounts')} >
                      {group[columns[1].accessor].map((account, index) => {
                        return (
                          <div key={`dnd_col_${account.userId}${index}`} className="drag_item drag_item_accounts" >
                            {account.userName}/{account.displayName}
                          </div>
                        )
                      })}
                    </DropContent>
                  </Column>
                  <Column >
                    <DropContent accept="channels" onDrop={(item) => handleDrop(index, item, 'channels')}>
                      {group[columns[2].accessor].map((channel, index) => {

                        return (
                          <div key={`dnd_col_${channel.channelId}${index}`} className="drag_item drag_item_channels" >
                            {channel.channelName}
                          </div>
                        )
                      })}
                    </DropContent>

                  </Column>
                </Trow>
              )
            })) : (<div className="no-data-text">no data</div>)
          }
        </Tbody>
      </Table>
    </div>
  );
};

export default DndGroupTable;