import { ElementProps, GridImagesType } from '../../types';
import { Image } from 'react-grid-gallery';

const GridImageElement = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const { images } = element as GridImagesType;

  const formattedImages = images.map((image, index) => ({
    src: image.src,
    thumbnail: image.src,
    thumbnailWidth: image.width,
    thumbnailHeight: image.height,
    caption: `Image ${index + 1}`,
  })) as unknown as Image[];

  return (
    <div {...attributes} className='mx-auto ml-14'>
      <style jsx>{`
        .image-container {
          display: flex;
          flex-wrap: wrap;
          gap: 5px; /* Adjust the gap between images */
        }

        .image-container img {
          flex-grow: 1; /* Allow images to grow and occupy the remaining space */
          width: calc(
            33.33% - 10px
          ); /* Adjust the percentage and gap accordingly */
          height: auto;
          object-fit: cover; /* Ensure the image covers the entire space */
        }
      `}</style>

      <div className='image-container'>
        {formattedImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            onClick={() => console.log('clicked: ', index)}
            onSelect={() => console.log('select: ', index)}
          />
        ))}
      </div>

      <p className='text-center text-gray-400 text-sm font-light'>
        <i>{children}</i>
      </p>
    </div>
  );
};

export default GridImageElement;
