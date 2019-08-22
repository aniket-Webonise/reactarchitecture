import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WalkThrough from './../features/walkthroughscreens/Walkthrough';

const WalkConst = createAppContainer(
  createSwitchNavigator({
    Intro: WalkThrough,
  }),
);

export default {
  WalkConst,
};
