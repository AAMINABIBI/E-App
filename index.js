/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ModalBox from './Concepts/ModalBox';
import Pressbale from './Concepts/Pressable';
import BarStatus from './Concepts/BarStatus';
import CustomModal from './Concepts/CustomModal'


AppRegistry.registerComponent(appName, () => App);
//terComponent(appName, () => Pressbale);
//AppRegistry.registerComponent(appName, () => BarStatus);
//AppRegistry.registerComponent(appName, () => CustomModal);




