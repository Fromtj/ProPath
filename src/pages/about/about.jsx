import { indigo } from "@mui/material/colors";
import CircleIcon from '@mui/icons-material/Circle';
import about from '../../assets/images/about.jpg'

export default function About() {
    return(<>
<div>

    <div className="text-center">   
<p className="text-[35px] text-amber-600 max-w-6xl mx-auto my-[50px]"> Мы предоставляем актуальную информацию о профессиях, вакансиях и курсах, которые помогут вам развить карьеры и освоить новые навыки. На нашей платформе вы найдете все, что нужно для успешного карьерного роста.</p>
<img className="w-[700px] my-[70px] m-auto" src={about} alt="" />
    </div>
    <div className="max-w-7xl mx-auto my-[50px]">
    <p className="text-[25px] text-indigo-700">Что мы предлагаем:</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"> <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/> Информация о профессиях — подробные описания профессий, требования, перспективы развития и средняя заработная плата.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"><CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Вакансии — свежие объявления о вакансиях от ведущих работодателей, которые помогут вам найти работу, соответствующую вашему профилю.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"><CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Обучение и курсы — программы для обучения востребованным профессиям, с возможностью получения сертификатов и дипломов, которые повысят вашу конкурентоспособность.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"><CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Карьерные советы — полезные рекомендации по составлению резюме, подготовке к собеседованиям и построению карьеры.</p>
    </div>
<div className="max-w-7xl mx-auto my-[50px]">
<p className="text-[25px] text-indigo-700">Почему стоит выбрать нас?</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"> <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Актуальность информации — мы регулярно обновляем данные о профессиях и вакансиях, чтобы предоставить самые свежие и точные сведения.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"> <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Широкий выбор курсов — курсы и тренинги по различным профессиям от ведущих образовательных платформ.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"> <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Поддержка на каждом этапе — от выбора профессии до поиска работы и повышения квалификации.</p>
<p className="flex items-center gap-[10px] text-amber-500 text-[18px]"> <CircleIcon sx={{ color: indigo[700], fontSize: "7px" }}/>Здесь вы найдете все необходимые инструменты для планирования карьеры и достижения успеха.</p>
</div>
</div>
    </>)
}