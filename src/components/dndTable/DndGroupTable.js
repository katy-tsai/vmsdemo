import React from 'react';
import DndTableHeader from './DndTableHeader'
import DropContent from './DropContent';
import { DeleteIcon } from '../icons/Icons';
const DndGroupTable = ({ columns, data = [], className, handleDrop, handleRemove, handleRemoveRow }) => {

  return (
    <DndTableHeader columns={columns} className={className}>
        <tbody>
          {
            data.length > 0 ? (data.map((group, index) => {
              return (
                <tr key={`dnd_tr_${group.groupId}`}>

                  <td width={columns[0].width} >
                    <span className=" col_group_name">
                      {group[columns[0].accessor]}
                      {(group[columns[1].accessor].length <= 1 && group[columns[2].accessor].length <= 1) && <span onClick={() => handleRemoveRow(group)}> <DeleteIcon size="20" /></span>}
                    </span>
                  </td>
                  <td width={columns[1].width}>
                    <DropContent accept="accounts" onDrop={(item) => handleDrop(index, item, 'accounts')} >
                      {group[columns[1].accessor].map((account, index) => {
                        const itemLength = group[columns[1].accessor].length;
                        return (
                          <div key={`dnd_col_${account.userId}${index}`} className="drag_item drag_item_accounts" >
                            {account.userName}/{account.displayName}{itemLength > 1 && <span onClick={() => handleRemove(group.groupId, account.userId, 'accounts')}></span>}
                          </div>
                        )
                      })}
                    </DropContent>
                  </td>
                  <td width={columns[2].width}>
                    <DropContent accept="channels" onDrop={(item) => handleDrop(index, item, 'channels')}>
                      {group[columns[2].accessor].map((channel, index) => {
                        const itemLength = group[columns[2].accessor].length;
                        return (
                          <div key={`dnd_col_${channel.channelId}${index}`} className="drag_item drag_item_channels" >
                            {channel.channelName}{itemLength > 1 && <span onClick={() => handleRemove(group.groupId, channel.channelId, 'channels')}></span>}
                          </div>
                        )
                      })}
                    </DropContent>

                  </td>
                </tr>
              )
            })) : (<tr><td colSpan="3" className="no-data-text">no data</td></tr>)
          }
        </tbody>
        </DndTableHeader>)
};

export default DndGroupTable;