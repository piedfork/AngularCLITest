export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'hello',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'about',
        data: {
          menu: {
            title: 'About',
            icon: 'ion-map',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
