/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ModalBox from './Concepts/ModalBox';
import Pressbale from './Concepts/Pressable';



//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => ModalBox);
AppRegistry.registerComponent(appName, () => Pressbale);
