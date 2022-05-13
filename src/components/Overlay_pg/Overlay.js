import React from 'react';
import { useNavigate } from 'react-router-dom';
import Page from './Page';
import home_button from './home_button.js';
import './overlay.css'
import { useDispatch, useSelector } from "react-redux";


const pages = [
    {
        id: 0,
        name: 'Команды',
        path: '/teams'
    },
    {
        id: 1,
        name: 'Заявки',
        path: '/applications'
    },
]

function Overlay() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user) || {};
    if (!user) {
        return <h1>Войдите в аккаунт</h1>
    }
    return (
        <div>
            <button className="log_btn"
                onClick={(el) => {
                    home_button(el, navigate);
                }
                }
            > LFLBOT.Admin </button>
            <div className='overlay_pages'>
                {pages.map(elem => <Page key={elem.id} item={elem} />)}
            </div>
        </div>
    )
}

export default Overlay;