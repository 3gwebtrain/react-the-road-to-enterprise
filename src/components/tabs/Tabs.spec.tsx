import { fireEvent, render, screen } from 'test-utils';
import Tab from './Tab';
import TabPanel from './TabPanel';
import Tabs from './Tabs';

const renderTabs = () =>
  render(
    <Tabs initialActiveTab='account'>
      <div className='flex mb-5'>
        <Tab id='account'>Account</Tab>
        <Tab id='settings'>Settings</Tab>
      </div>
      <div className='flex p-4 border'>
        <TabPanel id='account'>Account Panel</TabPanel>
        <TabPanel id='settings'>Settings Panel</TabPanel>
      </div>
    </Tabs>
  );

describe('Tabs.tsx', () => {
  it('Tabs items have correct text', async () => {
    renderTabs();
    screen.getByText('Account');
    screen.getByText('Account Panel');
  });

  it('Account Tab item is visible at the start', async () => {
    renderTabs();
    const panel = await screen.findByTestId('account');
    expect(panel).toBeVisible();
  });

  it('Settings Tab item is hidden at the start', async () => {
    renderTabs();
    const panel = await screen.findByTestId('settings');
    expect(panel).not.toBeVisible();
  });

  it('on click of Settings Tab it should visible', async () => {
    renderTabs();
    const SettingsButton = screen.getByText('Settings', {
      selector: 'button',
    });
    fireEvent.click(SettingsButton);
    const panel = await screen.findByTestId('settings');
    expect(panel).toBeVisible();
  });
});
