import {
  Dimensions,
  StatusBar,
  Platform,
  PixelRatio
} from 'react-native';

// UI设计的宽度
export const DESIGN_WIDTH = 750;

// UI设计的高度
export const DESIGN_HEIGHT = 1334;

// 屏幕宽度
export const width = Dimensions.get('window').width;

// 屏幕高度
export const height = Dimensions.get('window').height;

// 宽度占比
export const scaleWidth = DESIGN_WIDTH / width;

// 高度占比
export const scaleHeight = DESIGN_HEIGHT / height;

// 字体比例 (字体随手机默认字体大小比例)
export const fontScale = PixelRatio.getFontScale();

/**
 * 判断是否为iPhoneX
 */
export function isIphoneX() {
  
}

/**
 * 适配文本字体(用于样式表)
 */
export function fixFontSize(size) {
  let scale = Math.min(scaleWidth, scaleHeight);
  let fontSize = Math.round(size * scale / fontScale);
  return fontSize;
}
