import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';



export default function (SpecificComponent, option, adminRoute = null) {

    

    //option
    //null => 아무나 출입 가능
    //true => 로그인한 유저한 출입 가능
    //false => 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인 하지 않은 상태 
                if(!response.payload.isAuth) {
                    if(option) {
                        navigate('/');  
                    }
                } else{
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/');
                    } else {
                        if(option === false) 
                        navigate('/');
                    }
                }
            })


        }, [])

        return (
            <SpecificComponent />
        )
    }





    return < AuthenticationCheck />;
}