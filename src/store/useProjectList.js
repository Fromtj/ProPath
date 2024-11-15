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
    translate: localStorage.getItem('translate'),
    setTranslate: (value) => {
        localStorage.setItem("translate", value)
        set({translate: localStorage.getItem('translate')})
    
    },
    data2: [],
    get2: async () => {
        try {
            let {data} = await axios.get(api + "/data")
            set({data2: data})
        } catch (error) {
            console.error(error);
        }
    },
}))