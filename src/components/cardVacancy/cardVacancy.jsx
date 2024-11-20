import PlaceIcon from '@mui/icons-material/Place';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { indigo } from '@mui/material/colors';

export default function CardVacancy({id,title,condition,location,salary}) {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(<>
    <div data-aos="flip-left" style={{justifyContent: id%2!=0 ? "start" : "end"}} className='w-[1200px] flex m-auto'>
    <div className='w-[500px] border-[1px] border-indigo-100 p-[20px]'>
   
        <p>{title}</p>
        <p>{condition}</p>
        <p><AttachMoneyIcon sx={{color: indigo[500]}}></AttachMoneyIcon>{salary}</p>
        <p><PlaceIcon sx={{color: indigo[500]}}></PlaceIcon>{location}</p>
    </div>
    </div>
    </>)
}