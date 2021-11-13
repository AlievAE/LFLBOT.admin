import "../../style/subitem.css"

function SubItem({item}) {
    const UpdateStatus = ()=>{
        item.selected = !item.selected;
    }
    const {id, tg_nickname, start_date, link, selected} = item;
    return (
        <div className='sub_item'>
            <input type="checkbox" onClick={UpdateStatus} className="check_btn">
            </input>
            <div className="sub_info">
                <p className="tg_nick">
                    {tg_nickname}
                </p>
                <p className="start_date">
                    {start_date}
                </p>
                <p className="link">
                    {link}
                </p>
            </div>

        </div>
    )
}

export default SubItem;