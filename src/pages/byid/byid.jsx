import { useProjectList } from "../../store/useProjectList"
import { useEffect } from "react"
import '../../index.css';
import 'animate.css';
import CardLearn from "../../components/cardLearn/cardLearn";
import CardVacancy from "../../components/cardVacancy/cardVacancy";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Byid() {
    let {getbyid,byidx,translate,dataByid} = useProjectList()
    useEffect(() => {
        getbyid(byidx)
    }, [])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return(<>
    <div className="max-w-7xl m-auto">
    <section>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
                {dataByid?.images.map((el) => {
           return <div key={el.id}>
             <SwiperSlide><img className="w-[100%] h-[100%]" src={el.img} alt="" /></SwiperSlide>
                 </div>
        })}
         <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
 
    </section>
    <p className="animate__heartBeat text-indigo-900 font-mono text-center text-[50px] font-[500]">{dataByid?.title[translate]}</p>
               <p className="animate__slideOutRight text-[20px] font-[300] text-left">{dataByid?.description[translate]}</p>
        <section className="mt-[100px]">
        <h1 className="text-[35px] my-[20px] text-indigo-800">{translate == "en" ? "Get education:" : translate =="ru" ? "Получение образования:" : "Касб кардани маълумот:"}</h1>
        <section className="grid grid-cols-2">
        {dataByid?.learning?.length>0 && dataByid?.learning?.map((el) => {
          return (<>
          <CardLearn title={el.title[translate]} programm={el.programm[translate]} condition={el.condition[translate]} location={el.location[translate]} payment={el.payment[translate]} key={el.id} />
          </>)
        })}
       </section>
       <h1 className="text-[35px] my-[20px] text-indigo-800">{translate =="en" ? "Vacancy" : translate == "ru" ? "Ваканции:" : "Вакансия:"}</h1>
     <section className="mb-[100px]">
      {dataByid?.vacancy.map((el) => {
        return <CardVacancy key={el.id} id={el.id} title={el.title[translate]} condition={el.conditions[translate]} location={el.location[translate]} salary={el.salary[translate]} />
      })}
     </section>
        </section>

      <section>
        
      </section>
    </div>
    </>)
}