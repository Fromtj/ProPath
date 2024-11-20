import InfoIcon from '@mui/icons-material/Info';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { indigo } from '@mui/material/colors';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useProjectList } from '../../store/useProjectList';

export default function InfoCard() {
    let {translate} = useProjectList()
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(<>
<section className="flex justify-between items-start max-w-6xl mx-auto my-[80px]">
    <div data-aos="flip-up" className="border-[2px] border-indigo-200 p-[25px] text-center w-[350px] rounded-[5px] h-[200px]">
        <span><LightbulbOutlinedIcon sx={{color: indigo[800], fontSize: "50px"}}></LightbulbOutlinedIcon></span>
        <p className="text-[14px] text-indigo-800 font-[500] mt-[25px]">
            {translate == "en" 
                ? "Relevance of information — we regularly update data on professions and vacancies to provide the freshest and most accurate information." 
                : translate == "ru" 
                ? "Актуальность информации — мы регулярно обновляем данные о профессиях и вакансиях, чтобы предоставить самые свежие и точные сведения." 
                : "Муҳимияти маълумот — мо маълумотро дар бораи касбҳо ва ҷойҳои корӣ мунтазам навсозӣ мекунем, то маълумоти дақиқ ва навтаринро пешниҳод кунем."}
        </p>
    </div>
    <div data-aos="flip-up" className="border-[2px] border-indigo-200 p-[25px] text-center w-[350px] rounded-[5px] h-[200px]">
        <span><BarChartOutlinedIcon sx={{color: indigo[800],fontSize: "50px"}}></BarChartOutlinedIcon></span>
        <p className="text-[14px] text-indigo-800 font-[500] mt-[25px]">
            {translate == "en" 
                ? "Here you will find all the necessary tools for career planning and achieving success." 
                : translate == "ru" 
                ? "Здесь вы найдете все необходимые инструменты для планирования карьеры и достижения успеха." 
                : "Дар ин ҷо шумо тамоми абзорҳои заруриро барои банақшагирии касб ва ба даст овардани муваффақият хоҳед ёфт."}
        </p>
    </div>
    <div data-aos="flip-up" className="border-[2px] border-indigo-200 p-[25px] text-center w-[350px] rounded-[5px] h-[200px]">
        <span><PermIdentityOutlinedIcon sx={{color: indigo[800], fontSize: "50px"}}></PermIdentityOutlinedIcon></span>
        <p className="text-[14px] text-indigo-800 font-[500] mt-[25px]">
            {translate == "en" 
                ? "Support at every stage — from choosing a profession to finding a job and improving qualifications." 
                : translate == "ru" 
                ? "Поддержка на каждом этапе — от выбора профессии до поиска работы и повышения квалификации." 
                : "Дастгирӣ дар ҳар як марҳила — аз интихоби касб то ҷустуҷӯи кор ва такмили ихтисос."}
        </p>
    </div>
</section>

    </>)
}