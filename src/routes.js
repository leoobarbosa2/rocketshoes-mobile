import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerBackTitleVisible: 'false',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
