import { ReactNode } from 'react';
import { useTabsActionsContext, useTabsContext } from './Tabs';
import './tabs.scss';

type TabProps = {
  children: ReactNode;
  id: string;
};

function Tab(props: TabProps) {
  const { children, id } = props;
  const activeTab = useTabsContext();
  const setActiveTab = useTabsActionsContext();
  const isActive = id === activeTab;
  return (
    <button
      className={`tab ${isActive ? 'activeTab' : 'inActiveTab'}`}
      id={`tab-${id}`}
      role='tab'
      aria-selected={isActive}
      aria-controls={`tab-panel-${id}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

export default Tab;
