import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import baner1 from '../../assets/images/baner.jpg'
import baner2 from '../../assets/images/baner2.jpg'
import baner3 from '../../assets/images/baner3.jpg'
import baner4 from '../../assets/images/baner4.jpg'
import architect2 from '../../assets/images/architect2.jpg'
import './baner.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import 'animate.css';
import { useProjectList } from '../../store/useProjectList';

export default function Baner() {
    const {translate} = useProjectList()
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
      <>
     <div className="animate__animated animate__zoomIn mt-[10px]">
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
    <SwiperSlide>
      <div
        className="text-left flex items-center"
        style={{
          backgroundImage: `url('${baner2}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <p className="ml-[70px] text-amber-200 text-[75px] font-[500] font-mono sm:text-[60px] xs:text-[40px]">
            {translate == "ru"
              ? "Что мы предлагаем:"
              : translate == "tj"
              ? "Мо чӣ пешниҳод мекунем:"
              : "What we offer:"}
          </p>
          <p className="text-[20px] text-amber-100 ml-[70px] mt-[25px] w-[500px] font-mono sm:text-[18px] xs:text-[16px] xs:ml-[20px] xs:w-[300px]">
            {translate == "ru"
              ? "Информация о профессиях — подробные описания профессий, требования, перспективы развития и средняя заработная плата."
              : translate == "tj"
              ? "Маълумот дар бораи касбҳо — тавсифи муфассали касбҳо, талаботҳо, дурнамои рушд ва музди миёнаи меҳнат."
              : "Information about professions — detailed descriptions of professions, requirements, development prospects, and average salaries."}
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className="text-left flex items-center"
        style={{
          backgroundImage: `url('${baner4}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <p className="ml-[70px] text-amber-200 text-[40px] font-[300] font-mono sm:text-[35px] xs:text-[30px] xs:ml-[20px]">
            <span className="text-[42px] text-amber-800 font-[500] sm:text-[36px] xs:text-[28px]">
              {translate == "ru"
                ? "Вакансии"
                : translate == "tj"
                ? "Вакансияҳо"
                : "Vacancies"}
            </span>
            {translate == "ru"
              ? " — свежие объявления о вакансиях от ведущих работодателей, которые помогут вам найти работу, соответствующую вашему профилю."
              : translate == "tj"
              ? " — эълонҳои нави ҷойҳои корӣ аз корфармоёни пешсаф, ки ба шумо дар ёфтани кори мувофиқ ба профили шумо кӯмак мерасонанд."
              : " — fresh job postings from leading employers to help you find a job that matches your profile."}
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className="text-left flex items-center"
        style={{
          backgroundImage: `url('${architect2}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <p className="ml-[70px] text-amber-200 text-[75px] font-[500] font-mono sm:text-[60px] xs:text-[40px]">
            {translate == "ru"
              ? "Почему стоит выбрать нас?"
              : translate == "tj"
              ? "Чаро моро интихоб кардан лозим аст?"
              : "Why choose us?"}
          </p>
          <p className="text-[20px] text-amber-100 ml-[70px] mt-[25px] w-[500px] font-mono sm:text-[18px] xs:text-[16px] xs:ml-[20px] xs:w-[300px]">
            {translate == "ru"
              ? "Актуальность информации — мы регулярно обновляем данные о профессиях и вакансиях, чтобы предоставить самые свежие и точные сведения."
              : translate == "tj"
              ? "Мутобиқати маълумот — мо маълумот дар бораи касбҳо ва ҷойҳои кориро мунтазам навсозӣ мекунем, то маълумоти навтарин ва дақиқро пешниҳод кунем."
              : "Relevance of information — we regularly update data about professions and vacancies to provide the most up-to-date and accurate information."}
          </p>
        </div>
      </div>
    </SwiperSlide>
    <div className="autoplay-progress" slot="container-end">
      <svg viewBox="0 0 48 48" ref={progressCircle}>
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  </Swiper>
</div>

       </>
    );
  
}