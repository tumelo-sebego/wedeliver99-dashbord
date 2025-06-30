import { Avatar } from '@mui/material';

const productImageSx = {
  width: 56,
  height: 40,
  objectFit: 'cover',
  borderRadius: 2,
  border: 'none',
  display: 'block',
};

export default function ProductImage({ src, alt = '', ...props }) {
  return <Avatar src={src} alt={alt} sx={productImageSx} {...props} />;
}