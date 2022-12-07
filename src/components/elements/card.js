import './card.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addProduct, removeProductBasket } from '../../store/reducers/basket.js';
import { v4 as uuidv4 } from 'uuid';

function Card({id, url, title, desc, price, weight, idx}) {

    const dispatch = useDispatch()

    const basket = useSelector(state => state.basket.basket)
    const count = basket.filter(item => item.id === id).length

    let item = {
        id: id,
        idx: uuidv4(),
        url: url,
        title: title,
        price: price,
    }

    const handleAddProduct = (event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(addProduct(item))
    }

    const handleRemoveProduct = (event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(removeProductBasket(idx))
    }

return (
    <div className="card">
        <img className="card__img" src={url} alt="" />

        <div className="card__information">

            <div className="card__up">
                <h2 className="card__title">{title}</h2>
                <p className="card__desc">{desc}</p>
            </div>

            <div className="card__down">
                <div className="left">
                    <div className="card__down-price">{price} ₽</div>
                    <div className="card__down-weight">{weight}</div>
                </div>
                <div className="count">
                    <button onClick={handleRemoveProduct} className="card__down-minus">-</button>
                    <div className="sumCount">{count}</div>
                    <button onClick={handleAddProduct} className="card__down-plus">+</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Card;