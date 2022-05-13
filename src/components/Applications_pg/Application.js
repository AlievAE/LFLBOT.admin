import React from 'react'
import AppItem from './AppItem';

import { HOST_ADDR } from '../../constants/constants'

import { useDispatch, useSelector } from "react-redux";
import {
    fetchApplications,
    fetchApplicationsMore,
    setError,
    eraseApplications,
    acceptApplication,
    deleteSingle
  } from "../../actions/application";

import { Spinner } from "../Spinner/Spinner";


import '../../style/review_btn.css'

function Application() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user) || {};
    const applicationIds = useSelector((state) => state.application.applicationId);
    const applicationList = useSelector((state) => state.application.applicationList);
    const application_cnt = useSelector((state) => state.application.applicationCnt);
    React.useEffect(() => {
        if (user && user.id !== null && user.id !== undefined) {
          dispatch(fetchApplications());
        } else {
          dispatch(
            setError("Войдите в аккаунт")
          );
        }
    }, [user]);
    
    const[selected, setSelected] = React.useState([]);    
    const selectItem = (id)=>{
        if (selected.includes(id)) {
            setSelected(()=>selected.filter(elem=>elem !== id));
        } else {
            setSelected(()=>selected.concat(id));
        }
    }

    const addSingle = (singleId) => {
        function pad2(n) {
            return (n < 10 ? '0' : '') + n;
        }
        
        const date = new Date();
        const month = pad2(date.getMonth()+1);//months (0-11)
        const day = pad2(date.getDate());//day (1-31)
        const year= date.getFullYear();
        
        const data = {...applicationList[singleId], 
            'subscription_date': year+"-"+month+"-"+day};
        delete data['id'];
        dispatch(acceptApplication(data));
    }


    const declineSelected = ()=> {
        selected.map((elem)=>dispatch(deleteSingle(elem, 'applications')));
        dispatch(eraseApplications(selected));
        setSelected([]);
    }

    const acceptSelected = () => {
        selected.map(addSingle);
        selected.map((elem)=>dispatch(deleteSingle(elem, 'applications')));
        dispatch(eraseApplications(selected));
        setSelected([]);
    }

    if (!(user && user.id !== null && user.id !== undefined)) {
        return <div className="main_positioning">Для просмотра необходимо авторизоваться</div>;
    }

    if (!applicationIds) {
        return <Spinner />;
    }

    function OverList() {
        if (application_cnt === 0) {
            return <p>Все заявки рассмотрены, хорошая работа!</p>
        } else {
            return <div>
                <p style={{fontSize:'2.6vw'}}> Новых заявок: {application_cnt} </p> 
                <button onClick={acceptSelected} className="accept_btn"> Принять отмеченные </button>
                <button onClick={declineSelected} className="decline_btn"> Отклонить отмеченные </button>
            </div>
        }
    }

    
    const length = applicationIds.length;
    return (
        <div className="main_positioning">
            <div>
                <div className='sub_list'>
                    <OverList/>
                    {applicationIds.map(elem=><AppItem applicationId={elem} key={elem} selectItem={selectItem}/>)}
                    {length < application_cnt && (
                        <button
                        className="app_btn"
                        onClick={() => dispatch(fetchApplicationsMore())}
                        >
                        Показать еще
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Application;