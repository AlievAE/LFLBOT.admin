import React from 'react';
import SubItem from './SubItem';

function SubList({state, deleteItem}) {
    
    return (
        <div className='sub_list'>
            <button onClick={deleteItem} className="unsub_btn"> Отписать выбранных </button>
            {state.map(elem=><SubItem key={elem.id} item={elem} deleteItem={deleteItem}/>)}
        </div>
    )
}

export default SubList;