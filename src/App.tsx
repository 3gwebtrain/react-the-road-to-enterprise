import './App.scss';
import { Tab, TabPanel, Tabs } from './components/tabs/Index';

function App() {
  return (
    <div className='App'>
      <Tabs initialActiveTab='account'>
        <div className='flex mb-5'>
          <Tab id='account'>Account</Tab>
          <Tab id='settings'>Settings</Tab>
          <Tab id='privacy'>Privacy</Tab>
        </div>
        <div className='flex p-4 border'>
          <TabPanel id='account'>Account Panel</TabPanel>
          <TabPanel id='settings'>Settings Panel</TabPanel>
          <TabPanel id='privacy'>Privacy Panel</TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
