/**
 * Created by vadim on 03.12.2016.
 */
import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Fish extends React.Component{
    onButtonClick() {
        console.log();
        this.props.addToOrder(this.props.index);
    }

    render() {
        let details = this.props.details;
        let isAvailable = (details.status === 'available' ? true : false);
        let buttonText = ( isAvailable ? 'Add To Order' : 'Sold out');
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{h.formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
            </li>
        )
    }
}

export default Fish;
