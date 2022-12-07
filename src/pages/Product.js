import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/elements/productCard';
import Button from '../components/ui/button.js';
import style from './Product.module.css';
import React from 'react';
import { product } from '../product.js';
import {useSelector} from 'react-redux';

function Product() {
    const {id} = useParams()
    const {url, title, desc, price, weight} = product.find(item => item.id === id)/*с помощью UseParams вытаскиваем нужный id и уже ищем его с помощьбю find и проваливаемся в карточку нужного id*/ 

    const productsSum = useSelector(state => state.basket.pricesProducts)

    const productsVolume = useSelector(state => state.basket.count)

    const navigate = useNavigate()
    const back = () => navigate(-1)

    return (
        <div className={style.product}>
            <div className={style.container}>
                <header className={style.header}>
                    <button onClick={back} className={style.linkBasket}><img className={style.back} src='https://mksenni.github.io/food-delivery-restaurant/images/Vector.svg' alt=''/></button>
                    <div className={style.headerRight}>
                        <div className={style.bag}>
                        <div className={style.bagLeft}>
                            <p >{productsVolume} товара</p>
                            <p >на сумму {productsSum} ₽</p>
                        </div>
                        <Link to={'/basket'} className={style.link}>
                            <img src="/images/bag.svg" alt="" /></Link>
                        </div>
                        {<Button />}
                    </div>
                </header>
                {
                    <ProductCard 
                        id={id}
                        url={url}
                        title={title}
                        desc={desc}
                        price={price}
                        weight={weight}
                    />
                }
            </div>
        </div>
    )
}

export default Product;