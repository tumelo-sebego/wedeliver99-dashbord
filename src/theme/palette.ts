import { PaletteOptions } from '@mui/material';
import { caribbeanGreen, orange, downy, watermelon, black, smoke, white, cream, primary, background } from './colors';
import { green, yellow } from '@mui/material/colors';

const palette: PaletteOptions = {
  primary: {
    main: primary[500],
    light: primary[200],
    dark: primary[700],
    contrastText: background[900],
  },
  secondary: {
    main: caribbeanGreen[500],
  },
  info: {
    main: downy[500],
  },
  success: {
    main: green[500],
  },
  error: {
    main: watermelon[500],
  },
  text: {
    primary: primary[500],
    secondary: primary[700],
    disabled: background[300],
  },
  action: {
    focus: background[100],
    disabled: background[400],
    active: primary[200],
  },
  background: {
    default: background[500],
    paper: background[400],
  },
  divider: background[700],
  warning: {
    main: primary[400],
  },
};

export default palette;
