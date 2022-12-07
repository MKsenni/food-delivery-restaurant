import { Link } from 'react-router-dom';
import Card from '../components/elements/card';
import { product } from '../product';
import './Products.css';
import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../components/ui/button';

function Products() {

    const productsSum = useSelector(state => state.basket.pricesProducts)

    const productsVolume = useSelector(state => state.basket.count)

    return (
    <main className="main">
        <div className="container">
        <header className='header'>
            <h1>наша продукция</h1>
            <div className='bag'>
            <div className="bag-left">
                <p className='product'>{productsVolume} товара</p>
                <p className='sum'>на сумму {productsSum} ₽</p>
            </div>
            <Link to={'/basket'} className='link'><img src="https://mksenni.github.io/food-delivery-restaurant/images/bag.svg" alt="" /></Link>
            {<Button />}
            </div>
        </header>

            <div className="menu">
                {
                product.map((item, index) => {
                    const {url, title, desc, price, weight, id, idx} = item;
                    return (//key должен передаваться родительскому объекту
                        <Link key = {index} item={item.id} to={`*/${id}`}>
                            <Card 
                                id = {id}
                                idx = {idx}
                                url = {url}
                                title = {title}
                                desc = {desc}
                                price = {price}
                                weight = {weight}
                            />
                        </Link>
                    )
                })
                }
            </div>
        </div>
    </main>
    );
}

export default Products;
