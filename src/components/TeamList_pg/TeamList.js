import React from 'react'
import TeamItem from './TeamItem';

import { HOST_ADDR } from '../../constants/constants'

import { useDispatch, useSelector } from "react-redux";
import {
    fetchTeams,
    fetchTeamsMore,
    setError
  } from "../../actions/application";

import "./team.css"

import { Spinner } from "../Spinner/Spinner";


function TeamList() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user) || {};
    const teamIds = useSelector((state) => state.team.teamId);
    const team_count = useSelector((state) => state.team.teamCnt);
    React.useEffect(() => {
        if (user && user.id !== null && user.id !== undefined) {
          dispatch(fetchTeams());
        } else {
          dispatch(
            setError("Войдите в аккаунт")
          );
        }
    }, [user]);

    if (!(user && user.id !== null && user.id !== undefined)) {
      return <div className="main_positioning">Для просмотра необходимо авторизоваться</div>;
    }

    if (!teamIds) {
        return <Spinner />;
    }

    const length = teamIds.length;
    return (
        <div className="team_list_full">
              <p style={{'font-size':'24px'}}> Всего отслеживается: {team_count} команд </p> 
              <div className='team_list'>
                  {teamIds.map(elem=><TeamItem teamId={elem} key={elem}/>)}
              </div>
              {length < team_count && (
                <button
                  className="more_btn"
                  onClick={() => dispatch(fetchTeamsMore())}
                >
                  Показать еще
                </button>
              )}
        </div>
    )
}


export default TeamList;