import React from 'react';


function Page({item}) {
    const {id, name, path} = item;
    return (
        <div className="pages">
            <p className="section">{name}</p>
        </div>
    )
}

export default Page;