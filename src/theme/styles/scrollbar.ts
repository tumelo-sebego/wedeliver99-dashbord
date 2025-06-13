import { Theme } from '@mui/material';

const scrollbar = (theme: Theme) => ({
  '@supports (-moz-appearance:none)': {
    scrollbarColor: `${theme.palette.primary.main} transparent`,
  },
  '*::-webkit-scrollbar': {
    position: 'absolute',
    visibility: 'hidden',
    WebkitAppearance: 'none',
    width: 5,
    height: 5,
    zIndex: 5,
    backgroundColor: theme.palette.background.default,
  },
  '*::-webkit-scrollbar-track': {
    margin: 9,
    backgroundColor: theme.palette.background.paper,
  },
  '*::-webkit-scrollbar-thumb': {
    visibility: 'hidden',
    borderRadius: 3,
    backgroundColor: theme.palette.primary.main,
  },
  '&:hover, &:focus': {
    '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
      visibility: 'visible',
    },
  },
});

export default scrollbar;
