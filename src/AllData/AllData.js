import React ,{createContext,useState,useEffect} from 'react'
export const apiValue = createContext();

function AllData({ children }) {
    const[text,setText]=useState([]);
    useEffect(()=>{
      fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((result) => {
        setText(result.recipes); // 👈 المهم
      })
    },[])
  return (
    <apiValue.Provider value={text} >
        {children};
    </apiValue.Provider>
  )
}

export default AllData