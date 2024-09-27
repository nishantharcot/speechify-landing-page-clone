import React from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import TabInfo from './TabInfo';

export default function TabsWithIcon() {
  const data = [
    {
      label: 'Chrome Extension',
      value: 'chrome',
      icon: <GoogleIcon />,
      desc: <TabInfo />
    },
    {
      label: 'iOS',
      value: 'profile',
      icon: <AppleIcon />,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Android',
      value: 'android',
      icon: <AndroidIcon />,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Web App',
      value: 'web-app',
      icon: <LanguageIcon />,
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Mac App',
      value: 'mac-app',
      icon: <DesktopMacIcon />,
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="chrome" className="bg-black text-white overflow-scroll">
      <TabsHeader indicatorProps={{
          className:
            "bg-transparent border-b-2 border-salte-400 shadow-none rounded-none",
        }}>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {icon}
              {label}
            </div>
          </Tab>
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
