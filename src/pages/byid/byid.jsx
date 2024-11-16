import { useProjectList } from "../../store/useProjectList"
import { useEffect } from "react"

export default function Byid() {
    let {getbyid,byidx,translate,dataByid} = useProjectList()
    useEffect(() => {
        getbyid(byidx)
    }, [])
    console.log(dataByid);
    return(<>
 
    <p>{dataByid?.title[translate]}</p>
    <p>{dataByid?.description[translate]}</p>
    <div>
        {dataByid?.images.map((el) => {
           return <div key={el.id}>
                <img className="w-[100px] h-[70px]" src={el.img} alt="" />
            </div>
        })}
    </div>
    </>)
}