import Tab from './tab';
import InternalTabs from './tabs';

export type { TabProps } from './tab';
export type { TabsProps } from './tabs';

type InternalTabsProps = typeof InternalTabs;

export interface FinalTabsProps extends InternalTabsProps {
  Tab: typeof Tab;
}

const Tabs = InternalTabs as FinalTabsProps;

Tabs.Tab = Tab;

export default Tabs;
