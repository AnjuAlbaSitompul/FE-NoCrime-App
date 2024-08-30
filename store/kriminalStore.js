import { create } from "zustand";
import { kecamatan } from "../constants/kecamatan";

const kriminalStore = create((set) => ({
    kriminal: [],
    setKriminal : (getKriminal) => {
        set((state) => ({ kriminal: [...state.kriminal, getKriminal ] }))
    }
}))

export {
    kriminalStore
}