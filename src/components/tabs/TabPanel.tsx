import { ReactNode } from 'react';
import { useTabsContext } from './Tabs';

type TabPanelProps = {
  children: ReactNode;
  id: string;
};

function TabPanel(props: TabPanelProps) {
  const { id, children } = props;
  const activeTab = useTabsContext();
  return (
    <div
      id={`tab-panel-${id}`}
      role='tabpanel'
      aria-labelledby={`tab-${id}`}
      hidden={id !== activeTab}
    >
      {children}
    </div>
  );
}

export default TabPanel;
