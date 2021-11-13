import React from 'react'
import AppList from './AppList';


function Application() {
    /*по-хорошему тут запросы в бд*/
    const[state, setState] = React.useState([
        {
            id:0,
            tg_nickname: "@Alen",
            team: "Neon",
            site_id: 1234,
            selected: false
        },
        {
            id:1,
            tg_nickname: "@Oleg",
            team: "noeN",
            site_id: 4321,
            selected: false
        }
    ])    
    const deleteItem = ()=>{
        setState(()=>state.filter(elem=>elem.selected === false));
    }
    let length = state.length;
    return (
        <div className="main_positioning">
            <div>
                <p> Новых заявок: {length} </p> 
                <AppList state={state} deleteItem={deleteItem}/>
            </div>
        </div>
    )
}

export default Application;