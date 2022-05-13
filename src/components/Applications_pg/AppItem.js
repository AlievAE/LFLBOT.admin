import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./application.css"

function AppItem(props) {
    const { applicationId, selectItem } = props;
    const application = useSelector((state) => 
        state.application.applicationList[applicationId]);
    const {tg_nickname, team, site_id} = application;
    return (
        <div className="sub_part_info">
            <input type="checkbox" onClick={() => selectItem(applicationId)} className="check_btn">
            </input>
            <p className="tg_nick">
                {tg_nickname}
            </p>
            <p className="start_date">
                {team}
            </p>
            <p className="link">
                {site_id}
            </p>
        </div>
    )
}

export default AppItem;