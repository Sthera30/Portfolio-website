import "./CSS/skills.css";
import "../../node_modules/fontawesome-free-5.15.2-web/css/all.min.css";
import { useState, useEffect } from "react";

function Skills() {
  const [skill, setSkill] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {

   async function fetchData(){
    try{
      const res = await fetch("skill.json")

      if(!res.ok){
        throw new Error("Could not fetch the data!");
      }
      const data = await res.json();
      setSkill(data)

    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
    
   }

   fetchData();

    async function fetchStackData() {
      try {
        const res = await fetch(`/stack.json`);

        if (!res.ok) {
          throw new Error("Could not fetch the data!");
        }

        const data = await res.json();
        setStack(data.stack);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStackData();
  }, []);

  console.log(stack)

  return (
    <></>
  )
}

export default Skills;

