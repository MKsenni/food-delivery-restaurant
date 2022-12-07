import React from 'react';
import style from './productCard.module.css'
import {useDispatch} from 'react-redux';
import { addProduct } from '../../store/reducers/basket.js';
import { v4 as uuidv4 } from 'uuid';

function ProductCard({url, title, desc, price, weight, id}) {

    const dispatch = useDispatch()

    let item = {
        id: id,
        idx: uuidv4(),
        url: url,
        title: title,
        desc: desc,
        price: price,
        weight: weight,
    }

    const addFromProduct = () => {
        dispatch(addProduct(item))
    }

    return(
        <div className={style.productCard}>
            <img className={style.image} src={url} alt=''></img>
            <div className={style.information}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.descr}>{desc}</div>
                <div className={style.bottom}>
                    <div className={style.left}>
                        <div className={style.price}>{price} ₽</div>
                        <div className={style.weight}>{weight}</div>
                    </div>
                    
                    <button onClick={addFromProduct} className={style.button}>В корзину</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;