import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useProjectList } from '../../store/useProjectList';
import { indigo } from '@mui/material/colors';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function CardLearn({title,programm,condition,location,payment}) {
    let {translate} = useProjectList()
    console.log(programm,"cards")
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(<>
    <div data-aos="flip-left" className='w-[600px] border-indigo-100 border-[1px] my-[10px] p-[20px]'>
       <h1 className='text-indigo-800 text-[25px] font-600'>{title}</h1> 
       <h2 className='text-amber-900 text-[20px]'>{programm}</h2>
       <p className='text-[14px] text-indigo-950'>{condition}</p>
       <p className='my-[10px] text-[20px] text-indigo-700'><AttachMoneyIcon sx={{color: indigo[500]}}></AttachMoneyIcon>{payment}</p>
       <div className='flex items-end justify-end'>
       <p className='text-right text-amber-700'><PlaceIcon sx={{color: indigo[500]}}></PlaceIcon>{location}</p>
       </div>
    </div>
    </>)
}