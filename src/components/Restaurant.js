import {RESTAURANT_IMAGE_URL}  from '../utils/utils'
const Restaurant = (props) => {
    const { name, locality, costForTwo, cuisines, avgRating, cloudinaryImageId } = props;

    return (
        <div id='restaurant-card'>
            <img src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
            alt='restaurant' />
            <h3>{name}</h3>
            <p>{locality}</p>
            <p>{costForTwo}</p>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating} *</p>
        </div>
    )
}

export default Restaurant;