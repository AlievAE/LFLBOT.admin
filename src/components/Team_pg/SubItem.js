import "../../style/subitem.css"
import React from 'react'

import { useDispatch, useSelector } from "react-redux";

function SubItem(props) {
    const { playerId, selectItem } = props;
    const player = useSelector((state) => 
        state.player.playerList[playerId]);
    const {team, tg_nickname, site_id, subscription_date} = player;
    return (
            <div className="sub_info">
            <input type="checkbox" onClick={() => selectItem(playerId)} className="check_btn">
            </input>
                <p className="tg_nick">
                    {tg_nickname}
                </p>
                <p className="start_date">
                    {subscription_date}
                </p>
                <p className="link">
                    {site_id}
                </p>
            </div>
    )
}

export default SubItem;