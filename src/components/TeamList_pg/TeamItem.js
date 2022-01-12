import "./teamItem.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function TeamItem(props) {
    const { teamId } = props;
    const team = useSelector((state) => 
        state.team.teamList[teamId]);
    const navigate = useNavigate();
    if (!team) {
        return <div></div>;
    }
    return (
            <div onClick={()=>navigate("/team/" + teamId)} className="teamItem">
                <img src={team.logo.substr(16)} alt="logo" className='small_logo'/>
                <p className="team_title">
                    {team.team}
                </p>
            </div>
    )
}

export default TeamItem;