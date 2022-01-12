import React from 'react';
import { useNavigate } from 'react-router-dom';
import './overlay_pg.css'


function Page({item}) {
    const navigate = useNavigate();
    const {name, path} = item;
    return (
        <div onClick = {()=>navigate(path)} className="overlay_pg">
            <p className="section">{name}</p>
        </div>
    )
}

export default Page;