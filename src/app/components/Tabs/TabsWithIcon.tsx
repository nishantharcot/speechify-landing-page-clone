import React from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import TabInfo from './TabInfo';
import tabInfoData from '../../data/tabInfoData';

export default function TabsWithIcon() {
  const data = [
    {
      label: 'Chrome Extension',
      value: 'chrome',
      icon: <GoogleIcon />,
      desc: <TabInfo {...tabInfoData[0]} />,
    },
    {
      label: 'iOS',
      value: 'profile',
      icon: <AppleIcon />,
      desc: <TabInfo {...tabInfoData[1]} />,
    },
    {
      label: 'Android',
      value: 'android',
      icon: <AndroidIcon />,
      desc: <TabInfo {...tabInfoData[2]} />,
    },
    {
      label: 'Web App',
      value: 'web-app',
      icon: <LanguageIcon />,
      desc: <TabInfo {...tabInfoData[3]} />,
    },
    {
      label: 'Mac App',
      value: 'mac-app',
      icon: <DesktopMacIcon />,
      desc: <TabInfo {...tabInfoData[4]} />,
    },
  ];
  return (
    <Tabs value="chrome" className="overflow-scroll bg-black text-white">
      <TabsHeader className="flex flex-wrap gap-2 rounded-none border-[#808080] bg-transparent">
        {data.map(({ label, value, icon }, index) => (
          <div key={index}>
            <div className="hidden md:block">
              <Tab
                className="pt-2"
                activeClassName="border-t-2 border-white"
                key={value}
                value={value}
              >
                <div className="flex items-center gap-2 hover:text-[#808080]">
                  {icon}
                  {label}
                </div>
              </Tab>
            </div>
            <div className="md:hidden">
              <Tab activeClassName="rounded-lg border-2 border-[#808080]" key={value} value={value}>
                <button className="rounded-lg bg-[#171717] p-2">
                  <div className="flex items-center gap-2">
                    {icon}
                    {label}
                  </div>
                </button>
              </Tab>
            </div>
          </div>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
