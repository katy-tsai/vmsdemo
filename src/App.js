import React from 'react';
import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginDashboard from './views/dashboard/LoginDashboard';
import EventDashboard from './views/dashboard/EventDashboard';
import DeviceDashboard from './views/dashboard/DeviceDashboard';
import LiveVideo from './views/video/LiveVideo';
import ScheduleVideo from './views/video/ScheduleVideo';
import StatesDevices from './views/devices/StatesDevices';
import GroupDevices from './views/devices/GroupDevices';
import MapDevices from './views/devices/MapDevices';
import EventSetting from './views/event/EventSetting';
import Setup from './views/setup/Setup';


function App() {
  const { loginInfo } = useSelector(state => state.user);
  return ( 
      <Layout loginUser={loginInfo}>
        <Switch>
          <Route path="/" exact component={LoginDashboard} />
          <Route path="/dashboard/login" component={LoginDashboard} />
          <Route path="/dashboard/event" component={EventDashboard} />
          <Route path="/dashboard/device" component={DeviceDashboard} />
          <Route path="/video/live" component={LiveVideo} />
          <Route path="/video/schedule" component={ScheduleVideo} />
          <Route path="/devices/states" component={StatesDevices} />
          <Route path="/devices/group" component={GroupDevices} />
          <Route path="/devices/map" component={MapDevices} />
          <Route path="/event" component={EventSetting} />
          <Route path="/setup" component={Setup} />
        </Switch>
      </Layout>
  );
}

export default App;