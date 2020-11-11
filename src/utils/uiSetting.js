export const ui_viewTypes=[{label:4,active:true},{label:8,active:false},{label:16,active:false},{label:24,active:false},{label:48,active:false},{label:64,active:false}]

export const btnActiveSetting = (btns,actives)=>{
    return btns.map((btn)=>{
        return {...btn,active:actives.includes(btn.label)};    
    });
}