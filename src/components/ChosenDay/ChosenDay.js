import {  format } from "date-fns";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChosenDay = () => {
  
    const currentDay = format(Date.now(), 'ddMMMMyyyy');
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate(`/calendar/day/${currentDay}`);
    }, [navigate, currentDay]);

    
    return (
        <><p>Chosen day</p></>
    )
}

export default ChosenDay;