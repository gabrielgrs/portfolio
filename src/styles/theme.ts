const getAccentColor = () => {
  const accentColors = [
    '#595cff',
    '#ee0979',
    '#F3904F',
    '#A770EF',
    '#00c3ff',
    '#64f38c',
  ]
  return accentColors[Math.floor(Math.random() * accentColors.length)]
}

const colors = {
  primary: '#140e26',
  secondary: getAccentColor(),
  white: '#fafafa',
}

const fonts = {
  primary: 'Open Sans',
  secondary: 'Space Mono',
}

const breakPoints = {
  mobile: `@media screen and (max-width: 700px)`,
  desktop: `@media screen and (min-width: 701px)`,
}

const theme = {
  colors,
  fonts,
  breakPoints,
}

export default theme
