import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './Enter.module.css';
import { enter} from '../store/reducers/users.js';
import { useRef } from 'react';

function Authorization () {

    const navigate = useNavigate()

    let enterUser = JSON.parse(localStorage.getItem('user') || '[]')

    const dispatch = useDispatch();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const inputPassword = useRef()
    const spanPassword = useRef()
    
    const handleEnterUser = (event) => {
        event.preventDefault()
        event.stopPropagation()

        if(login ===  '') {
            document.querySelector(`.${style.emailEmpty}`).style.display = 'block'
        } else {
            document.querySelector(`.${style.emailEmpty}`).style.display = 'none'
        };

        if (inputPassword.current.value === '') {
            spanPassword.current.style.display = 'block'
        } else {
            spanPassword.current.style.display = 'none'
            let user = enterUser.find(users => users.login === login)
            if(user) {
                if(user.password === password) {
                    dispatch(enter())
                }
            } else {
                alert('такого пользователя не существует')
                navigate('/registration')
            }
        }
        // console.log(spanPassword.current.style.display);// то же самое что document.querySelector(`.${style.passwordEmptyEnter}`).style.display
        // console.log(inputPassword.current.value) // то же самое что document.querySelector(`.${style.passwordInput}`).value
        // dispatch(enter({login, password}))
    }

    return(
        <div className={style.container}>
            <form onSubmit={handleEnterUser} className={style.registration}>
                <Link to={'/registration'} className={style.auth} href="">Зарегистрироваться</Link>
                <h1 className={style.title}>вход</h1>
                <div className={style.inputs}>
                    <div className={style.inputsEmail}>
                        <input type="text" className={style.emailInput} placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value.trim())} />
                        <span className={style.emailEmpty}>Поле не должно быть пустым</span>
                    </div>

                    <div className={style.inputsPassword}>
                        <input ref={inputPassword} type="text" className={style.passwordInput} placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span ref={spanPassword} className={style.passwordEmptyEnter}>Поле не должно быть пустым</span>
                    </div>
                    
                    <label htmlFor="registr-check" className={style.inputsLabel}>
                        <input type="checkbox" id="registr-check" className={style.labelCheck} />
                        <span className={style.element} id="box-registr"></span>
                        <p>Я согласен получать обновления на почту</p>
                    </label>
                </div>
                <div className={style.validationEnter}><span>Логин или пароль неверен</span> </div>
                <button className={style.button}>Войти</button>
            </form> 
        </div>
    )
}

export default Authorization;