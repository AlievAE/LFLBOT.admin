import "../../style/AppItem.css"

function AppItem({item}) {
    const UpdateStatus = ()=>{
        item.selected = !item.selected;
    }
    const {id, tg_nickname, team, site_id, selected} = item;
    return (
        <div className='sub_item'>
            <input type="checkbox" onClick={UpdateStatus} className="check_btn">
            </input>
            <div className="sub_info">
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

        </div>
    )
}

export default AppItem;