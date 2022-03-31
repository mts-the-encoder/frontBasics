const categories = [
  {
    id: 1,
    isActive: true,
    label: 'Dashboard',
    icon: 'house-chimney',
    children: [],
  },
  {
    id: 2,
    isActive: false,
    label: 'Menu Layout',
    icon: 'box-open',
    children: [
      {
        label: 'Buttons',
      },
      {
        label: 'desings',
      },
      {
        label: 'info',
      },
    ],
  },
  {
    id: 3,
    isActive: false,
    label: 'Inbox',
    icon: 'inbox',
    children: [],
  },
  {
    id: 4,
    isActive: false,
    label: 'File Manager',
    icon: 'file-arrow-down',
    children: [],
  },
  {
    id: 5,
    isActive: false,
    label: 'Point of Save',
    icon: 'download',
    children: [],
  },
  {
    id: 6,
    isActive: false,
    label: 'Chat',
    icon: 'comment-dots',
    children: [],
  },
  {
    id: 7,
    isActive: false,
    label: 'Post',
    icon: 'file-lines',
    children: [],
  },
  {
    id: 8,
    isActive: false,
    label: 'Crud',
    icon: 'pen-to-square',
    children: [
      {
        label: 'Create',
      },
      {
        label: 'Read',
      },
      {
        label: 'Update',
      },
      {
        label: 'Delete',
      },
      {
        id: 8,
        label: 'Post',
        icon: 'file-lines',
        children: [],
      },
    ],
  },
  {
    id: 9,
    isActive: false,
    label: 'User',
    icon: 'user',
    children: [
      {
        label: 'Name',
      },
      {
        label: 'Date of birth',
      },
      {
        label: 'Adress',
      },
    ],
  },
  {
    id: 10,
    isActive: false,
    label: 'Profile',
    icon: 'id-badge',
    children: [
      {
        label: 'Settings',
      },
      {
        label: 'Privacity',
      },
      {
        label: 'About',
      },
    ],
  },
  {
    id: 11,
    isActive: false,
    label: 'Pages',
    icon: 'paste',
    children: [
      {
        label: 'Homes',
      },
      {
        label: 'Login',
      },
      {
        label: 'Register',
      },
    ],
  },

];
export default categories;
