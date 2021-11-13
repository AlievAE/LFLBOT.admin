import React from 'react'
import SubList from './SubList';
import logo from './neon.webp';
import '../../style/team.css'


function Team(param) {
    /*по-хорошему тут запросы в бд*/
    const {team} = param;
    const[state, setState] = React.useState([
        {
            id:0,
            tg_nickname: "@hahhhhhhллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллhhhhhhhhhhhhhhhhhhhhah",
            start_date: "12.11.2021",
            link: "looooooooooooooooooooooooooooooooooooooooooooooooong",
            selected: false
        },
        {
            id:1,
            tg_nickname: "@hihih",
            start_date: "12.11.2001",
            link: "link2",
            selected: false
        },
        {
            id:2,
            tg_nickname: "@kto?",
            start_date: "12.11.2111",
            link: "link3",
            selected: false
        },
    ])    
    const deleteItem = ()=>{
        setState(()=>state.filter(elem=>elem.selected === false));
    }
    let length = state.length;
    return (
        <div className="main_positioning">
            <div className="team_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="team_info">
                <p id="team_name">{team}</p>
                <p id="start_date"> отслеживается с 13.11.2021 </p>
                <button id="out_button"> Перестать отслеживать</button>
            </div>
            <div className="subscriber_list">
            <p id="subscribers_total"> Подписаны на обновления: всего {length} </p> 
                <SubList state={state} deleteItem={deleteItem}/>
            </div>
        </div>
    )
}

export default Team;