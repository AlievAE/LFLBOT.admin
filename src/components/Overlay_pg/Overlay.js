import React from 'react';
import Page from './Page';
import home_button from './home_button.js';

const pages = [
    {
        id: 1,
        name: 'Игроки',
        path: '/home'
    },
    {
        id: 2,
        name: 'Команды',
        path: '/neon'
    },
    {
        id: 3,
        name: 'Заявки',
        path: '/applications'
    },
]

function Overlay() {
    return (
        <div>
            <div className="button">
                <button className="home_btn"
                    onClick={(el) => {
                        home_button(el);
                    }
                    }> LFLBOT.Admin </button>
            </div>
            <div className='pages_list'>
                {pages.map(elem => <Page key={elem.id} item={elem} />)}
            </div>
        </div>
    )
}

export default Overlay;