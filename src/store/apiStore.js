import { create } from "zustand";

const cryptoStore = create((set) => ({
    darkMode: localStorage.getItem('darkMode') === 'true',
    toggleDarkMode: () => set((state) => {
        const mode = !state.darkMode; 
        localStorage.setItem('darkMode', mode); 
        document.documentElement.classList.toggle('dark', mode); 
        return { darkMode: mode }
    }), 
    favs: [], 
    toggleFav: (id) => set((state) => ({
        fav: state.favs.includes(id) ? state.favs.filter(fav => fav !== id) : [...state.favs, id]
    })) 
})); 

export { cryptoStore }; 