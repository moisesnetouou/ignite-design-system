import {
  space,
  radii,
  lineHeights,
  fonts,
  fontWeights,
  fontSizes,
  colors,
} from '@ignite-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    font: fonts,
    lineHeights,
    radii,
    space,
  },
})
