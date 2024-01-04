import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: string;
  lazy?: boolean;
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down';
  style?: React.CSSProperties;
  clasName?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void;
  // SyntheticEvent React的合成事件
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const Image: React.FC<ImageProps> = (props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const observerRef = useIntersectionObserver(imgRef, { freezeOnceVisible: true });

  return (
    <img
      className={props.clasName}
      ref={imgRef}
      src={observerRef?.isIntersecting || !props.lazy ? props.src : props.loading}
      alt={props.alt}
      draggable={false}
      width={props.width}
      height={props.height}
      style={{ ...props.style, objectFit: props.fit }}
      onClick={props.onClick}
      onLoad={props.onLoad}
      onError={props.onError}
    />
  );
};

Image.defaultProps = {
  alt: '',
  width: '100%',
  height: '100%',
  lazy: false,
  fit: 'fill',
  loading: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII=',
};

Image.displayName = 'Image';

export default Image;
