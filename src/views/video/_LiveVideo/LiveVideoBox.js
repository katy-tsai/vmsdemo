import React ,{useState}from 'react';
import ButtonGroup from '../../../components/buttonGroup/ButtonGroup';
import Searchbar from '../../../components/searchbar/Searchbar';
import {ui_viewTypes,btnActiveSetting} from '../../../utils/uiSetting';
import Videoboxs from '../../../components/videobox/Videoboxs';

const LiveVideoBox = ({playlist,viewType,viewTypeChangeHandler}) => {
    const initBtns = btnActiveSetting(ui_viewTypes,[viewType]);
    const [btns,setBtns] = useState(initBtns);
    const viewTypebtnChange = (btn,label)=>{
        const value = btn[label];
        viewTypeChangeHandler(value);
        const newBtns = btnActiveSetting(btns,[value]);
        setBtns(newBtns);
    }
    return (
        <>
            <div className="live_viewType_row">
                <ButtonGroup rowNum={6} btns={btns} className="view_type_btns" label="label" clickFun={viewTypebtnChange}/>
                <div className="col-2">
                   <Searchbar/>
                </div>
            </div>
            <div className="live_view">
               <Videoboxs viewType={viewType} playlist={playlist}/>
            </div>
             
        </>
    );
};

export default LiveVideoBox;