import React from 'react';

const ButtonGroup = ({className,btns,clickFun,rowNum,label}) => {

    return (
        <div className={[`button-group-${rowNum}`,className].join(" ")}>
            {
               btns.map((btn,index)=>{
                const {active} = btn;
               return <div className={active?'active':''} key={`button_group${btn[label]}${index}`} onClick={()=>clickFun(btn,label)}>{btn[label]}</div>
              }) 
            }
        </div>
    );
};

export default ButtonGroup;