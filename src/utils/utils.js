import {
  StyleSheet
} from 'react-native';

export const debugFrame = (color="#FF0000", style="dotted") => {
  return StyleSheet.create({
    border: {
      borderColor:color,
      borderWidth:2,
      borderStyle:"dotted"
    },
  })
}