import { useProjectList } from "../../store/useProjectList"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import Box from '@mui/material/Box';

export default function Header() {
    const {translate,setTranslate}=useProjectList()
    return(<section className="w-[100%]" style={{backgroundColor: "rgb(220,220,220,0.2)"}}>
    <header className="max-w-7xl flex items-center justify-between m-auto py-[15px]">
        <div>
            <img className="w-[160px]" src={logo} alt="" />
        </div>
        <div className="3xl:flex 3xl:gap-[15px] items-center text-amber-500">
        <Link className="text-[18px]" to={"/"}>{translate == "en" ? "Home" : translate == "ru" ? "Главная" : "Асоси"}</Link>
    <Link className="text-[18px]" to={"/project_list"}>{translate == "en" ? "Proffessional list" : translate == "ru" ? "Проффессии" : "Касбхо"}</Link>
    <Link className="text-[18px]" to={"/about"}>{translate == "en" ? "About" : translate == "ru" ? "О нас" : "Дар бораи мо"}</Link>
        </div>
        <div>
       <Box width={"100px"}>
       <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Translate</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={translate}
          label="Age"
          onChange={(e) => setTranslate(e.target.value)}
        >
          <MenuItem value={"tj"}>tj</MenuItem>
          <MenuItem value={"ru"}>ru</MenuItem>
          <MenuItem value={"en"}>en</MenuItem>
        </Select>
        </FormControl>
       </Box>
        </div>
    </header>
    </section>)
}