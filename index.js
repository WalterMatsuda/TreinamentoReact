import { registerRootComponent } from 'expo';
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
  } from "react-scroll";
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
