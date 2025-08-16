import { useState, useEffect } from 'react'; 

export const useDebounce = (val, delay) => {
    const [debounceVal, setDebounceVal] = useState(''); 

    useEffect(() => {
       const storeVal = setTimeout(() => {
        setDebounceVal(val);
       }, delay);

        return () => clearTimeout(storeVal)
    }, [val, delay]); 

    return debounceVal;
};