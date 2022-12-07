import style from './Registration.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import { registrationUser } from '../store/reducers/users.js';
import { useState } from 'react';

function Registration () {

    // const userRegistration = useSelector(state => state.users.users)

    let users = JSON.parse(localStorage.getItem('user') || '[]')
    
    const dispatch = useDispatch() //dispatch Это функция которая вызывает action
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const validateUser = () => {
        if(setLogin && setPassword) {
            // let users = JSON.parse(localStorage.getItem('user') || '[]');
            users.push({login, password});
            localStorage.setItem('user', JSON.stringify(users));
        }
    }

    const handleRegistrationUser = (event) => {
        event.preventDefault()

        // let user = userRegistration.find(users => users.login === login)
        let user = users.find(user => user.login === login)

        if(!user) {
            if(login === '') {
                document.querySelector(`.${style.emailEmpty}`).style.display = 'block'
            } else {
                document.querySelector(`.${style.emailEmpty}`).style.display = 'none'

                if(login.length < 4 && login.length > 0) {
                    document.querySelector(`.${style.emailValid}`).style.display = 'block'
                } else {
                    document.querySelector(`.${style.emailValid}`).style.display = 'none'

                    if(password === '') {
                        document.querySelector(`.${style.passwordEmpty}`).style.display = 'block'
                    } else {
                        document.querySelector(`.${style.passwordEmpty}`).style.display = 'none'
    
                        if(password.length < 4 && password.length > 0) {
                            document.querySelector(`.${style.passwordLength}`).style.display = 'block'
                        } else {
                            document.querySelector(`.${style.passwordLength}`).style.display = 'none'
                            validateUser();
                            dispatch(registrationUser({login, password}));
                        }
                    };
                }
            };
        } else {
            document.querySelector(`.${style.emailRepeat}`).style.display = 'block'
        }
    }

    return(
        <div className={style.container}>
            <form onSubmit={handleRegistrationUser} className={style.registration}>
                <Link to={'*'} className={style.auth} href="">Авторизоваться</Link>
                <h1 className={style.title}>Регистрация</h1>
                
                <div className={style.inputs}>
                    <div className={style.inputsEmail}>
                        <input name='email' type="text" className={style.emailInput} placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value.trim())} />
                        <span className={style.emailEmpty}>Поле не должно быть пустым</span>
                        <span className={style.emailRepeat}>Такой пользователь уже существует</span>
                        <span className={style.emailValid} id="valid-registr">Логин должен содержать не менее 4-х символов</span>
                    </div>

                    <div className={style.inputsPassword}>
                        <input name='password' type="text" className={style.passwordInput} placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
                        <span className={style.passwordEmpty}>Поле не должно быть пустым</span>
                        <span className={style.passwordLength}>Пароль должен содержать не менее 4-х символов</span>
                    </div>
                    
                    <label htmlFor="registr-check" className={style.inputsLabel}>
                        <input type="checkbox" id="registr-check" className={style.labelCheck} />
                        <span className={style.element} id="box-registr"></span>
                        <p>Я согласен получать обновления на почту</p>
                    </label>
                </div>
                <button className={style.button}>Зарегистрироваться</button>
            </form> 
        </div>        
    )
}

export default Registration;