import { useState,useEffect} from 'react';

const useRWD=()=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);

    const handleRWD=()=>{
        if(window.innerWidth>1024)
        setIsSidebarOpen(true);
        else
        setIsSidebarOpen(false);
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD(); //加入此行
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return [isSidebarOpen,setIsSidebarOpen];
}

export default useRWD;