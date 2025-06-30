import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Avatar: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      width: 56,           // rectangle width
      height: 40,          // rectangle height
      borderRadius: 8,     // rounded corners
      display: 'block',
    },
    img: {
      objectFit: 'cover',
      overflow: 'auto',
    },
  },
};

export default Avatar;
