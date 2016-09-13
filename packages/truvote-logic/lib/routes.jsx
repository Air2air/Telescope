import Telescope from 'meteor/nova:lib';

import MyCustomPage from './components/MyCustomPage.jsx';

Telescope.routes.add({name:"myCustomRoute", path:"/my-custom-route", component:MyCustomPage});
