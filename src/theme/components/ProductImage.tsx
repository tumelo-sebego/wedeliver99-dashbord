import Image from 'components/base/Image';

const productImageSx: React.CSSProperties = {
  width: 56,
  height: 56,
  objectFit: 'cover',
  borderRadius: 8,
  border: 'none',
  display: 'block',
};

type ProductImageProps = {
  src: string;
  alt?: string;
  [key: string]: any;
};

export default function ProductImage({ src, alt = '', ...props }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      style={productImageSx}
      {...props}
    />
  );
}