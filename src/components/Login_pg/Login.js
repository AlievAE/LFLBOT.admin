import React from 'react'

import { useAuth } from "./useAuth";

import "./login.css"


function Login() {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const { onAuth } = useAuth(setError);

    React.useEffect(() => {
        if (error) {
          setError("");
        }
      }, [login, password]);

    const handleClick = async (event) => {
        event.preventDefault();
        if (!login) {
            setError("Введите логин");
            return;
        }
        if (!password) {
            setError("Введите пароль");
            return;
        }
        try {
            await onAuth(login, password);
        } catch (err) {
            //
        }
    };

    return (
        <div>
            <form className="login_box" method="post" id="login_form">
                <h1 className="enter">Админка LFLBOT</h1>
                <div className="form-group">
                    <label className="form-label">Никнейм</label>
                    <input onChange={(event) => { setLogin(event.target.value)}} className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Пароль</label>
                    <input onChange={(event) => { setPassword(event.target.value)}} className="form-control" type="password"/>
                </div>
                <button className="home_btn"
                    onClick={handleClick}
                >
                    Войти
                </button>
            </form>
        </div>
    )
}

export default Login;