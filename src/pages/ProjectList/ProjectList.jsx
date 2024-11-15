import { useEffect } from "react"
import { useProjectList } from "../../store/useProjectList"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionActions from '@mui/material/AccordionActions';
import Button from '@mui/material/Button'

export default function ProjectList() {
    let {get,data,translate} = useProjectList()

    useEffect(() => {
        get()
    },[])

    return(<>
    <div className="max-w-7xl m-auto">
    {data.map((e) => {
        return <div className="max-w-6xl" key={e.id}>
            <Accordion className="max-w-6xl">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{e.title[translate]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{e.description[translate]}</Typography>
        </AccordionDetails>
        <AccordionActions>
        <Button >More Information</Button>
        </AccordionActions>
      </Accordion>
        </div>
    })}
    </div>
    </>)
}