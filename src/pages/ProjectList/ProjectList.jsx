import { useEffect } from "react"
import { useProjectList } from "../../store/useProjectList"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionActions from '@mui/material/AccordionActions';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { indigo } from "@mui/material/colors";

export default function ProjectList() {
    let {get,data,translate,setByidx} = useProjectList()

    useEffect(() => {
        get()
    },[])
useEffect(() => {
  AOS.init({
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  });
}, []);
    return(<>
    <div className="max-w-7xl my-[70px] mx-auto">
    {data.map((e) => {
        return <div className="max-w-6xl" key={e.id}>
            <Accordion className="max-w-6xl">
        <AccordionSummary
        data-aos="zoom-in-up"
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="text-amber-500 text-[18px]">{e.title[translate]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{e.description[translate]}</Typography>
        </AccordionDetails>
        <AccordionActions>
        <Link to={`/project_list/:${e.id}`}>
            <Button onClick={() => setByidx(e.id)}>More Information</Button>
            </Link>
        </AccordionActions>
      </Accordion>
        </div>
    })}
    </div>
    </>)
}