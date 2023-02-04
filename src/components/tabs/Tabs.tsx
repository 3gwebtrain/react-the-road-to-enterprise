import { contextFactory } from '@/context/helpers/contextFactory';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type ActiveTab = string;
export type SetActiveTab = Dispatch<SetStateAction<ActiveTab>>;

const [useTabsContext, TabsContext] = contextFactory<ActiveTab>();
const [useTabsActionsContext, TabsActionsContext] =
  contextFactory<SetActiveTab>();

export { useTabsContext, useTabsActionsContext };

type TabsProps = {
  children: ReactNode;
  initialActiveTab: string;
};

function Tabs(props: TabsProps) {
  const { children, initialActiveTab } = props;
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <TabsContext.Provider value={activeTab}>
      <TabsActionsContext.Provider value={setActiveTab}>
        {children}
      </TabsActionsContext.Provider>
    </TabsContext.Provider>
  );
}
export default Tabs;
