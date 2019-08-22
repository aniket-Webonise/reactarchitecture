import {StyleSheet} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');

export const WalkthroughStyles = StyleSheet.create({
  image: {
    width,
    height,
  },
});
