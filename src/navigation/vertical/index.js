import { Mail, Home, Circle, Settings } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    header: 'Setup'
  },
  {
    id: 'SetUp',
    title: 'Classes',
    icon: <Settings size={20} />,
    children: [
      {
        id: 'Adult',
        title: 'Adult',
        icon: <Circle size={12} />,
        navLink: '/setup/classes/adult'
      },
      {
        id: 'Junior',
        title: 'Junior',
        icon: <Circle size={12} />,
        navLink: '/setup/classes/junior'
      }
    ]
  },
  {
    id: 'Church_Operation',
    title: 'Church Operation',
    icon: <Settings size={20} />,
    navLink: '/setup/operation'
  }
]
