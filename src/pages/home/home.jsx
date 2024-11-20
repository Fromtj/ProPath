import Baner from "../../components/baner/baner";
import InfoCard from "../../components/infocard/infocard";
import succes from '../../assets/images/succes.jpg'
import CircleIcon from '@mui/icons-material/Circle';
import { indigo } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useProjectList } from '../../store/useProjectList';

export default function Home() {
    let {translate} = useProjectList()
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(<>
    <Baner />
    <InfoCard />
    <section className="max-w-7xl flex flex-wrap items-center my-[100px] mx-auto justify-between gap-[20px] sm:my-[50px]">
  <div
    data-aos="zoom-in"
    className="w-[46%] sm:w-[100%] sm:order-2"
  >
    <img className="w-[100%] mx-auto" src={succes} alt="Success" />
  </div>
  <div
    data-aos="zoom-in"
    className="w-[48%] sm:w-[100%] sm:order-1"
  >
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Fresh announcements from employers."
        : translate == "ru"
        ? "Свежие объявления от работодателей."
        : "Эълонҳои тозаи корфармоён."}
    </p>
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Convenient search by parameters: salary, field, region."
        : translate == "ru"
        ? "Удобный поиск по параметрам: зарплата, сфера, регион."
        : "Ҷустуҷӯи қулай аз рӯи параметрҳо: маош, соҳа, минтақа."}
    </p>
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Recommendations for resume creation and interview preparation."
        : translate == "ru"
        ? "Рекомендации по составлению резюме и подготовке к собеседованию."
        : "Тавсияҳо оид ба тартиб додани резюме ва омодагӣ ба мусоҳиба."}
    </p>
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Courses and training for skill improvement."
        : translate == "ru"
        ? "Курсы и тренинги для повышения квалификации."
        : "Курсҳо ва омӯзишҳо барои баланд бардоштани ихтисос."}
    </p>
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Opportunity to discuss professional topics in chats and forums."
        : translate == "ru"
        ? "Возможность обсуждать профессиональные темы в чатах и форумах."
        : "Имконияти муҳокимаи мавзӯъҳои касбӣ дар сӯҳбатҳо ва форумҳо."}
    </p>
    <p className="text-[16px] text-amber-500 font-[500] font-sans flex gap-[15px] items-center sm:text-[14px]">
      <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }} />
      {translate == "en"
        ? "Success stories and inspiration from those who found their calling."
        : translate == "ru"
        ? "Истории успеха и вдохновение от тех, кто нашел своё призвание."
        : "Ҳикояҳои муваффақият ва илҳом аз онҳое, ки даъвати худро ёфтанд."}
    </p>
  </div>
</section>
    </>)
}