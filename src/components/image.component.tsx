import React from "react";
import SkeletonComponent from "./skeleton.component";

type Image = { linked: string; alt: string };

interface LazyImageProps extends React.ComponentProps<"img"> {
  wrapperClassName?: string;  
  onVisible?: () => void;
  mobileSrc?: string;
}

const Image: React.FC<LazyImageProps> = ({ onVisible, wrapperClassName, mobileSrc , ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const imgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } 
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={wrapperClassName} >
      {isVisible && 
      <picture>
        {mobileSrc && <source media="(max-width: 768px)" srcSet={mobileSrc} />}
        <img {...props} src={props.src} alt={props.alt} className={props.className} />
      </picture>
     }
      {!isVisible && <SkeletonComponent className={props.className} /> }
    </div>
  );
};
export default Image;
