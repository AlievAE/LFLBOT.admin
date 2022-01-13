import React from 'react'
import SubItem from './SubItem';
import './team_pg.css'
import { Spinner } from "../Spinner/Spinner";


import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HOST_ADDR } from '../../constants/constants'
import { Navigate, useNavigate } from "react-router-dom";

import {
    fetchTeams,
    fetchPlayers,
    setError,
    erasePlayers,
    deleteSingle
} from "../../actions/application";
import { ApiClientService } from '../../services/ApiClientService'; 


function Team() {
    const params = useParams();
    const { teamId } = params;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user) || {};

    const teamList = useSelector((state) => state.team.teamList);
    const playerIds = useSelector((state) => state.player.playerId);
    const playerList = useSelector((state) => state.player.playerList);
    React.useEffect(() => {
        if (user && user.id !== null && user.id !== undefined) {
            // dispatch(fetchTeams());
            dispatch(fetchPlayers());
        } else {
          dispatch(
            setError("Войдите в аккаунт")
          );
        }
    }, [user]);
    const team = teamList[teamId] || "";
    const teamPlayers = playerIds.filter(playerId => playerList[playerId].team === team.team);
    const length = teamPlayers.length;

    const[selected, setSelected] = React.useState([]);    
    const selectItem = (id)=>{
        if (selected.includes(id)) {
            setSelected(()=>selected.filter(elem=>elem !== id));
        } else {
            setSelected(()=>selected.concat(id));
        }
    }

    const unsubSelected = ()=> {
        selected.map((elem)=>dispatch(deleteSingle(elem, 'players')));
        dispatch(erasePlayers(team, selected));
        setSelected([]);
    }

    if (!(user && user.id !== null && user.id !== undefined)) {
        return <div className="main_positioning">Для просмотра необходимо авторизоваться</div>;
    }

    if (!team || team === "") {
        return <Spinner />;
    }

    function UnsubButton() {
        if (length === 0) {
            return <></>
        } else {
            return <button onClick={unsubSelected} className="unsub_btn"> Отписать выбранных </button>;
        }
    }
    const handleClick = async (event) => {
        dispatch(deleteSingle(teamId, 'teams'));
        dispatch(fetchTeams());
        navigate('/teams');
    };

    return (
        
        <div className="global_position">
            <div className="team_full_info">
                <img src={team.logo.substr(16)} alt="logo" className='logo'/>
                <div className='team_part_info'>
                    <div className='team_del_info'>
                        <p className='t_title'> {team.team} </p>
                        <button className="del_team_btn"
                            onClick={handleClick}
                        > Удалить команду
                        </button>
                    </div>
                    <p className='t_length'> Подписаны на обновления: всего {length} </p>  
                    <UnsubButton/>
                </div>
            </div>
            <div className="team_sub_list">
                <div className='sub_list'>
                    {teamPlayers.map(elem=><SubItem key={elem} playerId={elem} selectItem={selectItem}/>)}
                </div>
            </div>
        </div>
    )
}

export default Team;