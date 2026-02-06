import { Appearance } from 'react-native';

const scheme = Appearance.getColorScheme();

const lightColors = {
  text: '#000000',
  transparent: 'transparent',
  border: '#DCE8E9',
  // lightTheme: '#E9F6FD',
  inputText: '#293540',
  black: '#000000',

  // Brand & Main
  primary: "#8FD0F6",
  primaryMuted: "#E9F6FD", // was paleBlue
  primaryTransparent: "#8FD0F633", // was pale
  background: "#FFFFFF",

  // Typography
  textMain: "#111111",      // was heading
  textSecondary: "#4F4F4F", // was subHeading
  textContrast: "#024F7C",  // was primaryText
  textAccent: "#006970",    // was accentText (sign up)
  textMuted: "#77869E",     // was deliveryHeadings
  textSubHeading: "#848484",

  // Feedback States (Success/Error/Warning)
  success: "#27794D",
  successBg: "#27794D4D",   // was bgGreen
  error: "#DC1818",
  errorBg: "#DC18184D",     // was bgRed
  errorSurface: "#FDF1F1",  // was statusError (subtle bg)

  // Component Specific (Still semantic)
  surfaceSecondary: "#F0F5F5", // was bgCall
  starActive: "#FDC500",       // was bgRankedStar
  starInactive: "#C4C4C4",     // was bgUnrankedStar

  // Feature Specific (Grouping helps readability)
  booking: {
    title: "#0C341F",
    meta: "#545454", // was bookingTime / T&C
  },
  delivery: {
    label: "#77869E",
    value: "#303E37",
    price: "#1D3557",
    selected: "#36B5FF",
  },
  profile: {
    text: "#024F7CBA",
  },
  overlayText: "#00000080", // was iconButtonText
  placeholderText: "#757B7F",
  docBackground: "#B4E2FC",
  logoBackground: "#4D2161"
  tabInactive: "#C0C5C2",
};

const darkColors = {
  text: '#000000',
  transparent: 'transparent',
  border: '#DCE8E9',
  lightTheme: '#E9F6FD',
  inputText: '#293540',
  black: '#000000',

  // Brand & Main
  primary: "#8FD0F6",
  primaryMuted: "#E9F6FD", // was paleBlue
  primaryTransparent: "#8FD0F633", // was pale
  background: "#FFFFFF",

  // Typography
  textMain: "#111111",      // was heading
  textSecondary: "#4F4F4F", // was subHeading
  textContrast: "#024F7C",  // was primaryText
  textAccent: "#006970",    // was accentText (sign up)
  textMuted: "#77869E",     // was deliveryHeadings
  textSubHeading: "#848484",

  // Feedback States (Success/Error/Warning)
  success: "#27794D",
  successBg: "#27794D4D",   // was bgGreen
  error: "#DC1818",
  errorBg: "#DC18184D",     // was bgRed
  errorSurface: "#FDF1F1",  // was statusError (subtle bg)

  // Component Specific (Still semantic)
  surfaceSecondary: "#F0F5F5", // was bgCall
  starActive: "#FDC500",       // was bgRankedStar
  starInactive: "#C4C4C4",     // was bgUnrankedStar

  // Feature Specific (Grouping helps readability)
  booking: {
    title: "#0C341F",
    meta: "#545454", // was bookingTime / T&C
  },
  delivery: {
    label: "#77869E",
    value: "#303E37",
    price: "#1D3557",
    selected: "#36B5FF",
  },
  profile: {
    text: "#024F7CBA",
  },
  overlayText: "#00000080", // was iconButtonText
  placeholderText: "#757B7F",
  docBackground: "#B4E2FC",
  logoBackground: "#4D2161"
  tabInactive: "#C0C5C2",

};

const color = scheme === 'dark' ? darkColors : lightColors;

export default color;