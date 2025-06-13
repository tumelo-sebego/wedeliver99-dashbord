import { Theme } from '@mui/material';

const simplebar = (theme: Theme) => ({
  '& .simplebar-track': {
    '&.simplebar-vertical': {
      '& .simplebar-scrollbar': {
        '&:before': {
          cursor: 'grab',
          border: 1,
          borderStyle: 'solid',
          borderColor: theme.palette.primary.main,
          maxHeight: '100vh',
          background: `${theme.palette.background.paper}`,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        '&.simplebar-visible': {
          '&:before': {
            opacity: 1,
            padding: 0,
          },
        },
      },
    },
  },
  '& .simplebar-wrapper': {
    '& .simplebar-content': {
      overflow: 'hidden',
    },
  },
});
export default simplebar;
