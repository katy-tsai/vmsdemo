import React,{useEffect} from 'react';
import View from '../../components/layout/View';

const DeviceDashboard = () => {
    
    useEffect(()=>{
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
    let  myWindow = window.open("https://www.google.com/", "",params);
       
        const timer = setInterval(() =>{ 
            myWindow.close();
            clearInterval(timer);
        }, 3000);
    },[]);

    return (
        <View title="儀表板 DashBoard - 裝置統計 Device List">
          
        </View>
    );
};

export default DeviceDashboard;