import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window').width;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
