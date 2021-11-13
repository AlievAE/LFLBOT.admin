import React from 'react'
import login_button from './login_button.js';

function Login() {
    const defaultLogin = '';
    const [login, setLogin] = React.useState(defaultLogin);
    return (
        <div>
            <form className="login_box" method="post" id="login_form">
                <h1 className="enter">Войти</h1>
                <div className="form-group">
                    <label className="form-label">Телеграм или почта</label>
                    <input onBlur={(event) => { setLogin(event.target.value)}} className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Пароль</label>
                    <input className="form-control" type="password"/>
                </div>
                <div className="reset_password">
                    <a href="https://vk.com/id157436281" className="reset_text"> сброс пароля </a>
                </div>
                <div className="enter_link">
                    <button type='submit' className="enter_text"
                        onClick={(el) => {
                                login_button(el, login);
                            }
                        }
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;