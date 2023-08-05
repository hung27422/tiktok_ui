import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallback: customFacllback, ...props }, ref) => {
    const [fallback, setFallback] = useState(customFacllback);
    const handleError = () => {
        setFallback(images.no_image);
    };
    return <img ref={ref} className={className} src={fallback || src} alt={alt} {...props} onError={handleError}></img>;
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
