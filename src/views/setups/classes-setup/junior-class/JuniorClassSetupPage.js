// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

import Avatar from '@components/avatar'


// ** Add New Modal Component
import AddNewModal from './AddNewModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Edit,  MoreVertical, Archive, Trash } from 'react-feather'

// import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Badge,
  UncontrolledDropdown
} from 'reactstrap'

const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
    1: { title: 'Current', color: 'light-primary' },
    2: { title: 'Professional', color: 'light-success' },
    3: { title: 'Rejected', color: 'light-danger' },
    4: { title: 'Resigned', color: 'light-warning' },
    5: { title: 'Applied', color: 'light-info' }
  }

// ** Table Common Column
 const columns = [
    {
      name: 'Name',
      minWidth: '300px',
      sortable: row => row.full_name,
      cell: row => (
        <div className='d-flex align-items-center'>
          {row.avatar === '' ? (
            <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
          ) : (
            <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
          )}
          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.full_name}</span>
            <small>{row.post}</small>
          </div>
        </div>
      )
    },
    {
      name: 'Tutor',
      sortable: true,
      minWidth: '300px',
      selector: row => row.email,
      cell: () => {
        return (
          <div>Not assigned</div>
        )
      }
    },
    // {
    //   name: 'Date',
    //   sortable: true,
    //   minWidth: '150px',
    //   selector: row => row.start_date
    // },
  
    // {
    //   name: 'Salary',
    //   sortable: true,
    //   minWidth: '150px',
    //   selector: row => row.salary
    // },
    // {
    //   name: 'Age',
    //   sortable: true,
    //   minWidth: '100px',
    //   selector: row => row.age
    // },
    {
      name: 'Status',
      minWidth: '150px',
      sortable: row => row.status.title,
      cell: row => {
        return (
          <Badge color={status[row.status].color} pill>
            {status[row.status].title}
          </Badge>
        )
      }
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: () => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pe-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>Details</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Archive size={15} />
                  <span className='align-middle ms-50'>Archive</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Trash size={15} />
                  <span className='align-middle ms-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Edit size={15} />
          </div>
        )
      }
    }
  ]

  const data = [
    {
      responsive_id: '',
      id: 1,
      avatar: '10.jpg',
      full_name: "Korrie O'Crevy",
      post: 'Nuclear Power Engineer',
      email: 'kocrevy0@thetimes.co.uk',
      city: 'Krasnosilka',
      start_date: '09/23/2016',
      salary: '$23896.35',
      age: '61',
      experience: '1 Year',
      status: 2
    },
    {
      responsive_id: '',
      id: 2,
      avatar: '1.jpg',
      full_name: 'Bailie Coulman',
      post: 'VP Quality Control',
      email: 'bcoulman1@yolasite.com',
      city: 'Hinigaran',
      start_date: '05/20/2018',
      salary: '$13633.69',
      age: '63',
      experience: '3 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 3,
      avatar: '9.jpg',
      full_name: 'Stella Ganderton',
      post: 'Operator',
      email: 'sganderton2@tuttocitta.it',
      city: 'Golcowa',
      start_date: '03/24/2018',
      salary: '$13076.28',
      age: '66',
      experience: '6 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 4,
      avatar: '10.jpg',
      full_name: 'Dorolice Crossman',
      post: 'Cost Accountant',
      email: 'dcrossman3@google.co.jp',
      city: 'Paquera',
      start_date: '12/03/2017',
      salary: '$12336.17',
      age: '22',
      experience: '2 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 5,
      avatar: '',
      full_name: 'Harmonia Nisius',
      post: 'Senior Cost Accountant',
      email: 'hnisius4@gnu.org',
      city: 'Lucan',
      start_date: '08/25/2017',
      salary: '$10909.52',
      age: '33',
      experience: '3 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 6,
      avatar: '',
      full_name: 'Genevra Honeywood',
      post: 'Geologist',
      email: 'ghoneywood5@narod.ru',
      city: 'Maofan',
      start_date: '06/01/2017',
      salary: '$17803.80',
      age: '61',
      experience: '1 Year',
      status: 1
    },
    {
      responsive_id: '',
      id: 7,
      avatar: '',
      full_name: 'Eileen Diehn',
      post: 'Environmental Specialist',
      email: 'ediehn6@163.com',
      city: 'Lampuyang',
      start_date: '10/15/2017',
      salary: '$18991.67',
      age: '59',
      experience: '9 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 8,
      avatar: '9.jpg',
      full_name: 'Richardo Aldren',
      post: 'Senior Sales Associate',
      email: 'raldren7@mtv.com',
      city: 'Skoghall',
      start_date: '11/05/2016',
      salary: '$19230.13',
      age: '55',
      experience: '5 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 9,
      avatar: '2.jpg',
      full_name: 'Allyson Moakler',
      post: 'Safety Technician',
      email: 'amoakler8@shareasale.com',
      city: 'Mogilany',
      start_date: '12/29/2018',
      salary: '$11677.32',
      age: '39',
      experience: '9 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 10,
      avatar: '9.jpg',
      full_name: 'Merline Penhalewick',
      post: 'Junior Executive',
      email: 'mpenhalewick9@php.net',
      city: 'Kanuma',
      start_date: '04/19/2019',
      salary: '$15939.52',
      age: '23',
      experience: '3 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 11,
      avatar: '',
      full_name: 'De Falloon',
      post: 'Sales Representative',
      email: 'dfalloona@ifeng.com',
      city: 'Colima',
      start_date: '06/12/2018',
      salary: '$19252.12',
      age: '30',
      experience: '0 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 12,
      avatar: '',
      full_name: 'Cyrus Gornal',
      post: 'Senior Sales Associate',
      email: 'cgornalb@fda.gov',
      city: 'Boro Utara',
      start_date: '12/09/2017',
      salary: '$16745.47',
      age: '22',
      experience: '2 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 13,
      avatar: '',
      full_name: 'Tallou Balf',
      post: 'Staff Accountant',
      email: 'tbalfc@sina.com.cn',
      city: 'Siliana',
      start_date: '01/21/2016',
      salary: '$15488.53',
      age: '36',
      experience: '6 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 14,
      avatar: '',
      full_name: 'Othilia Extill',
      post: 'Associate Professor',
      email: 'oextilld@theatlantic.com',
      city: 'Brzyska',
      start_date: '02/01/2016',
      salary: '$18442.34',
      age: '43',
      experience: '3 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 15,
      avatar: '',
      full_name: 'Wilmar Bourton',
      post: 'Administrative Assistant',
      email: 'wbourtone@sakura.ne.jp',
      city: 'Bích Động',
      start_date: '04/25/2018',
      salary: '$13304.45',
      age: '19',
      experience: '9 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 16,
      avatar: '4.jpg',
      full_name: 'Robinson Brazenor',
      post: 'General Manager',
      email: 'rbrazenorf@symantec.com',
      city: 'Gendiwu',
      start_date: '12/23/2017',
      salary: '$11953.08',
      age: '66',
      experience: '6 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 17,
      avatar: '',
      full_name: 'Nadia Bettenson',
      post: 'Environmental Tech',
      email: 'nbettensong@joomla.org',
      city: 'Chabařovice',
      start_date: '07/11/2018',
      salary: '$20484.44',
      age: '64',
      experience: '4 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 18,
      avatar: '',
      full_name: 'Titus Hayne',
      post: 'Web Designer',
      email: 'thayneh@kickstarter.com',
      city: 'Yangon',
      start_date: '05/25/2019',
      salary: '$16871.48',
      age: '59',
      experience: '9 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 19,
      avatar: '5.jpg',
      full_name: 'Roxie Huck',
      post: 'Administrative Assistant',
      email: 'rhucki@ed.gov',
      city: 'Polýkastro',
      start_date: '04/04/2019',
      salary: '$19653.56',
      age: '41',
      experience: '1 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 20,
      avatar: '7.jpg',
      full_name: 'Latashia Lewtey',
      post: 'Actuary',
      email: 'llewteyj@sun.com',
      city: 'Hougong',
      start_date: '08/03/2017',
      salary: '$18303.87',
      age: '35',
      experience: '5 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 21,
      avatar: '',
      full_name: 'Natalina Tyne',
      post: 'Software Engineer',
      email: 'ntynek@merriam-webster.com',
      city: 'Yanguan',
      start_date: '03/16/2019',
      salary: '$15256.40',
      age: '30',
      experience: '0 Year',
      status: 2
    },
    {
      responsive_id: '',
      id: 22,
      avatar: '',
      full_name: 'Faun Josefsen',
      post: 'Analog Circuit Design manager',
      email: 'fjosefsenl@samsung.com',
      city: 'Wengyang',
      start_date: '07/08/2017',
      salary: '$11209.16',
      age: '40',
      experience: '0 Year',
      status: 3
    },
    {
      responsive_id: '',
      id: 23,
      avatar: '9.jpg',
      full_name: 'Rosmunda Steed',
      post: 'Assistant Media Planner',
      email: 'rsteedm@xing.com',
      city: 'Manzanares',
      start_date: '12/23/2017',
      salary: '$13778.34',
      age: '21',
      experience: '1 Year',
      status: 5
    },
    {
      responsive_id: '',
      id: 24,
      avatar: '',
      full_name: 'Scott Jiran',
      post: 'Graphic Designer',
      email: 'sjirann@simplemachines.org',
      city: 'Pinglin',
      start_date: '05/26/2016',
      salary: '$23081.71',
      age: '23',
      experience: '3 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 25,
      avatar: '',
      full_name: 'Carmita Medling',
      post: 'Accountant',
      email: 'cmedlingo@hp.com',
      city: 'Bourges',
      start_date: '07/31/2019',
      salary: '$13602.24',
      age: '47',
      experience: '7 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 26,
      avatar: '2.jpg',
      full_name: 'Morgen Benes',
      post: 'Senior Sales Associate',
      email: 'mbenesp@ted.com',
      city: 'Cà Mau',
      start_date: '04/10/2016',
      salary: '$16969.63',
      age: '42',
      experience: '2 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 27,
      avatar: '',
      full_name: 'Onfroi Doughton',
      post: 'Civil Engineer',
      email: 'odoughtonq@aboutads.info',
      city: 'Utrecht (stad)',
      start_date: '09/29/2018',
      salary: '$23796.62',
      age: '28',
      experience: '8 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 28,
      avatar: '',
      full_name: 'Kliment McGinney',
      post: 'Chief Design Engineer',
      email: 'kmcginneyr@paginegialle.it',
      city: 'Xiaocheng',
      start_date: '07/09/2018',
      salary: '$24027.81',
      age: '28',
      experience: '8 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 29,
      avatar: '',
      full_name: 'Devin Bridgland',
      post: 'Tax Accountant',
      email: 'dbridglands@odnoklassniki.ru',
      city: 'Baoli',
      start_date: '07/17/2016',
      salary: '$13508.15',
      age: '48',
      experience: '8 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 30,
      avatar: '6.jpg',
      full_name: 'Gilbert McFade',
      post: 'Biostatistician',
      email: 'gmcfadet@irs.gov',
      city: 'Deje',
      start_date: '08/28/2018',
      salary: '$21632.30',
      age: '20',
      experience: '0 Year',
      status: 2
    },
    {
      responsive_id: '',
      id: 31,
      avatar: '',
      full_name: 'Teressa Bleakman',
      post: 'Senior Editor',
      email: 'tbleakmanu@phpbb.com',
      city: 'Žebrák',
      start_date: '09/03/2016',
      salary: '$24875.41',
      age: '37',
      experience: '7 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 32,
      avatar: '',
      full_name: 'Marcelia Alleburton',
      post: 'Safety Technician',
      email: 'malleburtonv@amazon.com',
      city: 'Basail',
      start_date: '06/02/2016',
      salary: '$23888.98',
      age: '53',
      experience: '3 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 33,
      avatar: '7.jpg',
      full_name: 'Aili De Coursey',
      post: 'Environmental Specialist',
      email: 'adew@etsy.com',
      city: 'Łazy',
      start_date: '09/30/2016',
      salary: '$14082.44',
      age: '27',
      experience: '7 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 34,
      avatar: '6.jpg',
      full_name: 'Charlton Chatres',
      post: 'Analyst Programmer',
      email: 'cchatresx@goo.gl',
      city: 'Reguengos de Monsaraz',
      start_date: '04/07/2016',
      salary: '$21386.52',
      age: '22',
      experience: '2 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 35,
      avatar: '1.jpg',
      full_name: 'Nat Hugonnet',
      post: 'Financial Advisor',
      email: 'nhugonnety@wufoo.com',
      city: 'Pimentel',
      start_date: '09/11/2019',
      salary: '$13835.97',
      age: '46',
      experience: '6 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 36,
      avatar: '',
      full_name: 'Lorine Hearsum',
      post: 'Payment Adjustment Coordinator',
      email: 'lhearsumz@google.co.uk',
      city: 'Shuiying',
      start_date: '03/05/2019',
      salary: '$22093.91',
      age: '47',
      experience: '7 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 37,
      avatar: '8.jpg',
      full_name: 'Sheila-kathryn Haborn',
      post: 'Environmental Specialist',
      email: 'shaborn10@about.com',
      city: 'Lewolang',
      start_date: '11/10/2018',
      salary: '$24624.23',
      age: '51',
      experience: '1 Year',
      status: 3
    },
    {
      responsive_id: '',
      id: 38,
      avatar: '3.jpg',
      full_name: 'Alma Harvatt',
      post: 'Administrative Assistant',
      email: 'aharvatt11@addtoany.com',
      city: 'Ulundi',
      start_date: '11/04/2016',
      salary: '$21782.82',
      age: '41',
      experience: '1 Year',
      status: 1
    },
    {
      responsive_id: '',
      id: 39,
      avatar: '2.jpg',
      full_name: 'Beatrix Longland',
      post: 'VP Quality Control',
      email: 'blongland12@gizmodo.com',
      city: 'Damu',
      start_date: '07/18/2016',
      salary: '$22794.60',
      age: '62',
      experience: '2 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 40,
      avatar: '4.jpg',
      full_name: 'Hammad Condell',
      post: 'Project Manager',
      email: 'hcondell13@tiny.cc',
      city: 'Bulung’ur',
      start_date: '11/04/2018',
      salary: '$10872.83',
      age: '37',
      experience: '7 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 41,
      avatar: '',
      full_name: 'Parker Bice',
      post: 'Technical Writer',
      email: 'pbice14@ameblo.jp',
      city: 'Shanlian',
      start_date: '03/02/2016',
      salary: '$17471.92',
      age: '65',
      experience: '5 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 42,
      avatar: '',
      full_name: 'Lowrance Orsi',
      post: 'Biostatistician',
      email: 'lorsi15@wp.com',
      city: 'Dengteke',
      start_date: '12/10/2018',
      salary: '$24719.51',
      age: '64',
      experience: '4 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 43,
      avatar: '10.jpg',
      full_name: 'Ddene Chaplyn',
      post: 'Environmental Tech',
      email: 'dchaplyn16@nymag.com',
      city: 'Lattes',
      start_date: '01/23/2019',
      salary: '$11958.33',
      age: '38',
      experience: '8 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 44,
      avatar: '',
      full_name: 'Washington Bygraves',
      post: 'Human Resources Manager',
      email: 'wbygraves17@howstuffworks.com',
      city: 'Zlaté Hory',
      start_date: '09/07/2016',
      salary: '$10552.43',
      age: '37',
      experience: '7 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 45,
      avatar: '7.jpg',
      full_name: 'Meghann Bodechon',
      post: 'Operator',
      email: 'mbodechon18@1und1.de',
      city: 'Itō',
      start_date: '07/23/2018',
      salary: '$23024.28',
      age: '61',
      experience: '1 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 46,
      avatar: '1.jpg',
      full_name: 'Moshe De Ambrosis',
      post: 'Recruiting Manager',
      email: 'mde19@purevolume.com',
      city: 'San Diego',
      start_date: '02/10/2018',
      salary: '$10409.90',
      age: '47',
      experience: '7 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 47,
      avatar: '5.jpg',
      full_name: 'Had Chatelot',
      post: 'Cost Accountant',
      email: 'hchatelot1a@usatoday.com',
      city: 'Mercedes',
      start_date: '11/23/2016',
      salary: '$11446.30',
      age: '64',
      experience: '4 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 48,
      avatar: '',
      full_name: 'Georgia McCrum',
      post: 'Registered Nurse',
      email: 'gmccrum1b@icio.us',
      city: 'Nggalak',
      start_date: '04/19/2018',
      salary: '$14002.31',
      age: '63',
      experience: '3 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 49,
      avatar: '8.jpg',
      full_name: 'Krishnah Stilldale',
      post: 'VP Accounting',
      email: 'kstilldale1c@chronoengine.com',
      city: 'Slavs’ke',
      start_date: '03/18/2017',
      salary: '$10704.29',
      age: '56',
      experience: '6 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 50,
      avatar: '4.jpg',
      full_name: 'Mario Umbert',
      post: 'Research Assistant',
      email: 'mumbert1d@digg.com',
      city: 'Chorotis',
      start_date: '05/13/2019',
      salary: '$21813.54',
      age: '43',
      experience: '3 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 51,
      avatar: '',
      full_name: 'Edvard Dixsee',
      post: 'Graphic Designer',
      email: 'edixsee1e@unblog.fr',
      city: 'Rancharia',
      start_date: '04/23/2019',
      salary: '$18053.11',
      age: '46',
      experience: '6 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 52,
      avatar: '9.jpg',
      full_name: 'Tammie Davydoch',
      post: 'VP Quality Control',
      email: 'tdavydoch1f@examiner.com',
      city: 'Mamedkala',
      start_date: '04/19/2016',
      salary: '$17617.08',
      age: '47',
      experience: '7 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 53,
      avatar: '',
      full_name: 'Benito Rodolico',
      post: 'Safety Technician',
      email: 'brodolico1g@sciencedirect.com',
      city: 'Wonosobo',
      start_date: '10/06/2018',
      salary: '$18866.55',
      age: '21',
      experience: '1 Year',
      status: 5
    },
    {
      responsive_id: '',
      id: 54,
      avatar: '',
      full_name: 'Marco Pennings',
      post: 'Compensation Analyst',
      email: 'mpennings1h@bizjournals.com',
      city: 'Umag',
      start_date: '06/15/2017',
      salary: '$13722.18',
      age: '30',
      experience: '0 Year',
      status: 3
    },
    {
      responsive_id: '',
      id: 55,
      avatar: '',
      full_name: "Tommie O'Corr",
      post: 'Quality Engineer',
      email: 'tocorr1i@nyu.edu',
      city: 'Olhos de Água',
      start_date: '09/26/2018',
      salary: '$15228.80',
      age: '51',
      experience: '1 Year',
      status: 1
    },
    {
      responsive_id: '',
      id: 56,
      avatar: '1.jpg',
      full_name: 'Cybill Poyle',
      post: 'Cost Accountant',
      email: 'cpoyle1j@amazon.com',
      city: 'Hamm',
      start_date: '01/03/2016',
      salary: '$13951.96',
      age: '29',
      experience: '9 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 57,
      avatar: '6.jpg',
      full_name: 'Norry Stoller',
      post: 'Human Resources Manager',
      email: 'nstoller1k@noaa.gov',
      city: 'Ruukki',
      start_date: '02/04/2018',
      salary: '$15100.00',
      age: '27',
      experience: '7 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 58,
      avatar: '',
      full_name: 'Wendi Somerlie',
      post: 'Systems Administrator',
      email: 'wsomerlie1l@accuweather.com',
      city: 'Meicheng',
      start_date: '04/22/2016',
      salary: '$20023.52',
      age: '28',
      experience: '9 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 59,
      avatar: '',
      full_name: 'Ferdie Georgeon',
      post: 'Geologist',
      email: 'fgeorgeon1m@nhs.uk',
      city: 'Tanahbeureum',
      start_date: '04/08/2019',
      salary: '$12630.26',
      age: '28',
      experience: '1 Year',
      status: 2
    },
    {
      responsive_id: '',
      id: 60,
      avatar: '',
      full_name: 'Jules Auten',
      post: 'Desktop Support Technician',
      email: 'jauten1n@foxnews.com',
      city: 'Mojo',
      start_date: '08/13/2019',
      salary: '$13870.62',
      age: '48',
      experience: '5 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 61,
      avatar: '3.jpg',
      full_name: 'Nichole Dacres',
      post: 'Mechanical Systems Engineer',
      email: 'ndacres1o@apache.org',
      city: 'Kimanuit',
      start_date: '11/06/2017',
      salary: '$18220.51',
      age: '20',
      experience: '0 Year',
      status: 3
    },
    {
      responsive_id: '',
      id: 62,
      avatar: '1.jpg',
      full_name: 'Holly Edgworth',
      post: 'Junior Executive',
      email: 'hedgworth1p@craigslist.org',
      city: 'Pedreira',
      start_date: '08/05/2017',
      salary: '$13999.88',
      age: '37',
      experience: '0 Year',
      status: 5
    },
    {
      responsive_id: '',
      id: 63,
      avatar: '9.jpg',
      full_name: 'Henriette Croft',
      post: 'Food Chemist',
      email: 'hcroft1q@desdev.cn',
      city: 'Taizhou',
      start_date: '09/12/2019',
      salary: '$11049.79',
      age: '53',
      experience: '1 Year',
      status: 5
    },
    {
      responsive_id: '',
      id: 64,
      avatar: '',
      full_name: 'Annetta Glozman',
      post: 'Staff Accountant',
      email: 'aglozman1r@storify.com',
      city: 'Pendawanbaru',
      start_date: '08/25/2017',
      salary: '$10745.32',
      age: '27',
      experience: '3 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 65,
      avatar: '',
      full_name: 'Cletis Cervantes',
      post: 'Health Coach',
      email: 'ccervantes1s@de.vu',
      city: 'Solnechnyy',
      start_date: '05/24/2018',
      salary: '$24769.08',
      age: '22',
      experience: '7 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 66,
      avatar: '9.jpg',
      full_name: 'Christos Kiley',
      post: 'Geologist',
      email: 'ckiley1t@buzzfeed.com',
      city: 'El Bolsón',
      start_date: '02/27/2019',
      salary: '$16053.15',
      age: '46',
      experience: '2 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 67,
      avatar: '7.jpg',
      full_name: 'Silvain Siebert',
      post: 'VP Sales',
      email: 'ssiebert1u@domainmarket.com',
      city: 'Cadiz',
      start_date: '09/23/2017',
      salary: '$23347.17',
      age: '47',
      experience: '8 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 68,
      avatar: '',
      full_name: 'Sharla Ibberson',
      post: 'Payment Adjustment Coordinator',
      email: 'sibberson1v@virginia.edu',
      city: 'Lamam',
      start_date: '11/01/2016',
      salary: '$15658.40',
      age: '51',
      experience: '8 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 69,
      avatar: '7.jpg',
      full_name: 'Ripley Rentcome',
      post: 'Physical Therapy Assistant',
      email: 'rrentcome1w@youtu.be',
      city: 'Dashkawka',
      start_date: '07/15/2018',
      salary: '$15396.66',
      age: '41',
      experience: '8 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 70,
      avatar: '',
      full_name: 'Chrisse Birrane',
      post: 'Chemical Engineer',
      email: 'cbirrane1x@google.com.br',
      city: 'Las Toscas',
      start_date: '05/22/2016',
      salary: '$15823.40',
      age: '62',
      experience: '0 Year',
      status: 5
    },
    {
      responsive_id: '',
      id: 71,
      avatar: '',
      full_name: 'Georges Tesyro',
      post: 'Human Resources Manager',
      email: 'gtesyro1y@last.fm',
      city: 'Gabao',
      start_date: '01/27/2019',
      salary: '$19051.25',
      age: '37',
      experience: '7 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 72,
      avatar: '',
      full_name: 'Bondon Hazard',
      post: 'Geological Engineer',
      email: 'bhazard1z@over-blog.com',
      city: 'Llano de Piedra',
      start_date: '01/17/2019',
      salary: '$11632.84',
      age: '65',
      experience: '3 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 73,
      avatar: '5.jpg',
      full_name: 'Aliza MacElholm',
      post: 'VP Sales',
      email: 'amacelholm20@printfriendly.com',
      city: 'Sosnovyy Bor',
      start_date: '11/17/2017',
      salary: '$16741.31',
      age: '64',
      experience: '7 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 74,
      avatar: '2.jpg',
      full_name: 'Lucas Witherdon',
      post: 'Senior Quality Engineer',
      email: 'lwitherdon21@storify.com',
      city: 'Staré Křečany',
      start_date: '09/26/2016',
      salary: '$19387.76',
      age: '38',
      experience: '2 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 75,
      avatar: '',
      full_name: 'Pegeen Peasegod',
      post: 'Web Designer',
      email: 'ppeasegod22@slideshare.net',
      city: 'Keda',
      start_date: '05/21/2016',
      salary: '$24014.04',
      age: '59',
      experience: '6 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 76,
      avatar: '',
      full_name: 'Elyn Watkinson',
      post: 'Structural Analysis Engineer',
      email: 'ewatkinson23@blogspot.com',
      city: 'Osan',
      start_date: '09/30/2016',
      salary: '$14493.51',
      age: '55',
      experience: '7 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 77,
      avatar: '10.jpg',
      full_name: 'Babb Skirving',
      post: 'Analyst Programmer',
      email: 'bskirving24@cbsnews.com',
      city: 'Balky',
      start_date: '09/27/2016',
      salary: '$24733.28',
      age: '39',
      experience: '1 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 78,
      avatar: '',
      full_name: 'Shelli Ondracek',
      post: 'Financial Advisor',
      email: 'sondracek25@plala.or.jp',
      city: 'Aoluguya Ewenke Minzu',
      start_date: '03/28/2016',
      salary: '$21922.17',
      age: '23',
      experience: '1 Year',
      status: 3
    },
    {
      responsive_id: '',
      id: 79,
      avatar: '9.jpg',
      full_name: 'Stanislaw Melloy',
      post: 'Sales Associate',
      email: 'smelloy26@fastcompany.com',
      city: 'Funafuti',
      start_date: '04/13/2017',
      salary: '$16944.42',
      age: '30',
      experience: '2 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 80,
      avatar: '',
      full_name: 'Seamus Eisikovitsh',
      post: 'Legal Assistant',
      email: 'seisikovitsh27@usgs.gov',
      city: 'Cangkringan',
      start_date: '05/28/2018',
      salary: '$21963.69',
      age: '22',
      experience: '7 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 81,
      avatar: '2.jpg',
      full_name: 'Tammie Wattins',
      post: 'Web Designer',
      email: 'twattins28@statcounter.com',
      city: 'Xilin',
      start_date: '08/07/2018',
      salary: '$16049.93',
      age: '36',
      experience: '5 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 82,
      avatar: '8.jpg',
      full_name: 'Aila Quailadis',
      post: 'Technical Writer',
      email: 'aquail29@prlog.org',
      city: 'Shuangchahe',
      start_date: '02/11/2018',
      salary: '$24137.29',
      age: '43',
      experience: '4 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 83,
      avatar: '',
      full_name: 'Myrvyn Gilogly',
      post: 'Research Associate',
      email: 'mgilogly2a@elpais.com',
      city: 'Prince Rupert',
      start_date: '05/13/2018',
      salary: '$10089.96',
      age: '19',
      experience: '8 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 84,
      avatar: '5.jpg',
      full_name: 'Hanna Langthorne',
      post: 'Analyst Programmer',
      email: 'hlangthorne2b@stumbleupon.com',
      city: 'Guaynabo',
      start_date: '11/11/2018',
      salary: '$14227.10',
      age: '21',
      experience: '7 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 85,
      avatar: '',
      full_name: 'Ruby Gimblet',
      post: 'Registered Nurse',
      email: 'rgimblet2c@1688.com',
      city: 'Nanyulinxi',
      start_date: '03/28/2016',
      salary: '$19562.59',
      age: '30',
      experience: '1 Year',
      status: 2
    },
    {
      responsive_id: '',
      id: 86,
      avatar: '4.jpg',
      full_name: 'Louis Paszak',
      post: 'Programmer',
      email: 'lpaszak2d@behance.net',
      city: 'Chiscas',
      start_date: '04/25/2016',
      salary: '$17178.86',
      age: '51',
      experience: '7 Years',
      status: 5
    },
    {
      responsive_id: '',
      id: 87,
      avatar: '',
      full_name: 'Glennie Riolfi',
      post: 'Computer Systems Analyst',
      email: 'griolfi2e@drupal.org',
      city: 'Taung',
      start_date: '06/18/2018',
      salary: '$15089.83',
      age: '29',
      experience: '4 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 88,
      avatar: '',
      full_name: 'Jemimah Morgan',
      post: 'Staff Accountant',
      email: 'jmorgan2f@nifty.com',
      city: 'La Esperanza',
      start_date: '01/17/2016',
      salary: '$18330.72',
      age: '27',
      experience: '3 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 89,
      avatar: '10.jpg',
      full_name: 'Talya Brandon',
      post: 'Food Chemist',
      email: 'tbrandon2g@ucoz.com',
      city: 'Zaječar',
      start_date: '10/08/2018',
      salary: '$16284.64',
      age: '28',
      experience: '6 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 90,
      avatar: '6.jpg',
      full_name: 'Renate Shay',
      post: 'Recruiter',
      email: 'rshay2h@tumblr.com',
      city: 'Pueblo Viejo',
      start_date: '03/15/2017',
      salary: '$18523.75',
      age: '28',
      experience: '3 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 91,
      avatar: '',
      full_name: 'Julianne Bartosik',
      post: 'Senior Cost Accountant',
      email: 'jbartosik2i@state.gov',
      city: 'Botlhapatlou',
      start_date: '02/06/2017',
      salary: '$17607.66',
      age: '48',
      experience: '6 Years',
      status: 3
    },
    {
      responsive_id: '',
      id: 92,
      avatar: '3.jpg',
      full_name: 'Yvonne Emberton',
      post: 'Recruiter',
      email: 'yemberton2j@blog.com',
      city: 'Nagcarlan',
      start_date: '02/13/2017',
      salary: '$17550.18',
      age: '20',
      experience: '1 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 93,
      avatar: '8.jpg',
      full_name: 'Danya Faichnie',
      post: 'Social Worker',
      email: 'dfaichnie2k@weather.com',
      city: 'Taling',
      start_date: '07/29/2019',
      salary: '$18469.35',
      age: '37',
      experience: '3 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 94,
      avatar: '',
      full_name: 'Ronica Hasted',
      post: 'Software Consultant',
      email: 'rhasted2l@hexun.com',
      city: 'Gangkou',
      start_date: '07/04/2019',
      salary: '$24866.66',
      age: '53',
      experience: '7 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 95,
      avatar: '2.jpg',
      full_name: 'Edwina Ebsworth',
      post: 'Human Resources Assistant',
      email: 'eebsworth2m@sbwire.com',
      city: 'Puzi',
      start_date: '09/27/2018',
      salary: '$19586.23',
      age: '27',
      experience: '2 Years',
      status: 1
    },
    {
      responsive_id: '',
      id: 96,
      avatar: '',
      full_name: 'Alaric Beslier',
      post: 'Tax Accountant',
      email: 'abeslier2n@zimbio.com',
      city: 'Ocucaje',
      start_date: '04/16/2017',
      salary: '$19366.53',
      age: '22',
      experience: '8 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 97,
      avatar: '',
      full_name: 'Reina Peckett',
      post: 'Quality Control Specialist',
      email: 'rpeckett2o@timesonline.co.uk',
      city: 'Anyang',
      start_date: '05/20/2018',
      salary: '$16619.40',
      age: '46',
      experience: '8 Years',
      status: 4
    },
    {
      responsive_id: '',
      id: 98,
      avatar: '7.jpg',
      full_name: 'Olivette Gudgin',
      post: 'Paralegal',
      email: 'ogudgin2p@gizmodo.com',
      city: 'Fujinomiya',
      start_date: '04/09/2019',
      salary: '$15211.60',
      age: '47',
      experience: '8 Years',
      status: 2
    },
    {
      responsive_id: '',
      id: 99,
      avatar: '10.jpg',
      full_name: 'Evangelina Carnock',
      post: 'Cost Accountant',
      email: 'ecarnock2q@washington.edu',
      city: 'Doushaguan',
      start_date: '01/26/2017',
      salary: '$23704.82',
      age: '51',
      experience: '0 Year',
      status: 4
    },
    {
      responsive_id: '',
      id: 100,
      avatar: '',
      full_name: 'Glyn Giacoppo',
      post: 'Software Test Engineer',
      email: 'ggiacoppo2r@apache.org',
      city: 'Butha-Buthe',
      start_date: '04/15/2017',
      salary: '$24973.48',
      age: '41',
      experience: '7 Years',
      status: 2
    }
  ]

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className='form-check'>
    <Input type='checkbox' ref={ref} {...props} />
  </div>
))

const JuniorClassSetupPage = () => {
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
    />
  )

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  console.log({data})

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Junior Class Setup</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <UncontrolledButtonDropdown hidden={true}>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ms-50'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer size={15} />
                  <span className='align-middle ms-50'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid size={15} />
                  <span className='align-middle ms-50'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File size={15} />
                  <span className='align-middle ms-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy size={15} />
                  <span className='align-middle ms-50'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Button className='ms-2' color='primary' onClick={handleModal}>
              <Plus size={15} />
              <span className='align-middle ms-50'>Add Record</span>
            </Button>
          </div>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='me-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <div className='react-dataTable'>
          <DataTable
             noHeader
            pagination
            selectableRows
            columns={columns}
            paginationPerPage={7}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            data={searchValue.length ? filteredData : data}
            selectableRowsComponent={BootstrapCheckbox}
           
          />
        </div>
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
    </Fragment>
  )
}

export default JuniorClassSetupPage