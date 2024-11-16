import { create } from "zustand";
import axios from "axios";
import { api } from "../config/config";

export const useProjectList = create((set,get) => ({
    data: [],
    get: async () => {
        try {
            let {data} = await axios.get(api + "/projectList")
            set({data: data})
        } catch (error) {
            console.error(error);
        }
    },
    translate: localStorage.getItem('translate') || "ru",
    setTranslate: (value) => {
        localStorage.setItem("translate", value)
        set({translate: localStorage.getItem('translate')})
    
    },
    dataByid:null,
    getbyid: async (id) => {
        console.log(id)
        try {
            let {data} = await axios.get(api + "/projectList/" + id)
            set({dataByid: data})
        } catch (error) {
            console.error(error);
        }
    },
    byidx: null,
    setByidx:(value) => set({byidx: value}),
}))