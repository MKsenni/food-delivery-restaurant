import { useDispatch } from 'react-redux';
import { exit } from '../../store/reducers/users';
import './button.css';

function Button() {

    const dispatch = useDispatch()
    const handelClick = (e) => {
        e.preventDefault()
        dispatch(exit())
    }

    return (
        <div className="">
            <button onClick={handelClick} className="button">Выйти</button>
        </div>
    )
}

export default Button;