import { Mail, Home, Circle, Settings, User, Briefcase } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Activity',
    icon: <Mail size={20} />,
    navLink: '/activity'
  },

  {
    id: 'Operation',
    title: 'Church Operation',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'Record',
        icon: <Circle size={12} />,
        navLink: '/operation'
      },
      {
        id: 'new',
        title: 'New Record',
        icon: <Circle size={12} />,
        navLink: '/operation/add'
      }

    ]
  },
  {
    id: 'member',
    title: 'Member',
    icon: <User size={20} />,
    children: [
      {
        id: 'Adult',
        title: 'Adult',
        icon: <Circle size={12} />,
        navLink: '/member/adult'
      },
      {
        id: 'junior',
        title: 'Junior',
        icon: <Circle size={12} />,
        navLink: '/member/junior'
      },
      {
        id: 'Leader',
        title: 'Leader',
        icon: <Circle size={12} />,
        navLink: '/member/leader'
      },
      {
        id: 'committee',
        title: 'Committee',
        icon: <Circle size={12} />,
        navLink: '/member/committee'
      }
    ]
  },
  {
    id: 'visitor',
    title: 'Visitor',
    icon: <User size={20} />,
    navLink: '/visitor'
  },

  {
    header: 'Transaction'
  },
  {
    id: 'payment',
    title: 'Payment',
    icon: <Briefcase size={20} />,
    navLink: '/payment'
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
    navLink: '/setup/operations'
  },
  {
    id: 'contribution',
    title: 'Contribution',
    icon: <Settings size={20} />,
    navLink: '/setup/contribution'
  },
  {
    id: 'committee',
    title: 'Committee',
    icon: <Settings size={20} />,
    navLink: '/setup/committee'
  }
]
