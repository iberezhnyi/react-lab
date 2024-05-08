import PropTypes from 'prop-types';
import defaultImage from './default-img.jpg';

// console.log(defaultImage);

export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  authorName = 'Unknown',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Price: {price} usd</p>
      <p>Available: {quantity >= 10 ? 'Is available' : 'Ends'}</p>
      <button>Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
