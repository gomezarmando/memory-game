import React from 'react';
import classnames from 'classnames';
import './card.css';

const img = './images/';

/**
 * Card Component
 * @param {Object} props for the component
 * 
 * This is a functional component that renders props
 */
const Card = props => {
	const {onSelect} = props;
	const {flipped = false, id, image} = props.details;

	const getClasses = () => classnames('card', {'flipped' : flipped === true})

	/**
	 * return Method
	 */
	return (
		<div
			className={getClasses()}
			onClick={e => {
				if(!flipped){
					onSelect(id)
				}
			}}>
			{
				flipped === true
				? <img src={`${img}${image}`} alt='' />
				: <img src={`${img}card-back.jpg`} alt='' />
			}
		</div>
	)
}

export default Card;