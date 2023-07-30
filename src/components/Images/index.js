import { forwardRef,useState } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallback:customFacllback, ...props }, ref) => {

    const [fallback,setFallback] = useState(customFacllback);
    const handleError = () => {
        setFallback(images.no_image)
    }
    return <img ref={ref} className={className} src={fallback || src} alt={alt} {...props} onError={handleError}></img>;
});

export default Image;
