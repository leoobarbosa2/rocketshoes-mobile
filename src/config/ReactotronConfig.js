import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.11.10' })
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
