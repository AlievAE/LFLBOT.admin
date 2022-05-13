import React from 'react';
import AppItem from './AppItem';
import '../../style/review_btn.css'

function AppList({state, deleteItem}) {
    
    return (
        <div className='sub_list'>
            <button onClick={deleteItem} className="accept_btn"> Принять отмеченные </button>
            <button onClick={deleteItem} className="decline_btn"> Отклонить отмеченные </button>
            {state.map(elem=><AppItem key={elem.id} item={elem} deleteItem={deleteItem}/>)}
        </div>
    )
}

export default AppList;