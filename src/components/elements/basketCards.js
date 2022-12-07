import style from './basketCards.module.css';
import {useDispatch} from 'react-redux';
import { removeProductBasket } from '../../store/reducers/basket.js';
import { Link } from 'react-router-dom';

function BasketCard({id, url, title, price, idx}) {
    const dispatch = useDispatch()

    const handleRemoveProductBasket = (e) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(removeProductBasket(idx)) //диспачим(отправляем) action и в него передаем id
    }
    return(
        <Link to={`/*/${id}`}>
            <div className={style.products}>
                <img className={style.products__img} src={url} alt=''></img>
                <h2 className={style.products__title}>{title}</h2>
                <span className={style.products__price}>{price} ₽</span>
                <button onClick={handleRemoveProductBasket} className={style.products__delete}><img  src='/images/cancel.svg' alt=''></img></button>
            </div>
        </Link>
    )
}

export default BasketCard;