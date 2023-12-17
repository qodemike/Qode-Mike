import { useEffect } from "react";
import ToolsAndTechnologiesList from "../components/ToolsAndTechnologiesList"


const TechnologiesPage = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])
  return (
    <ToolsAndTechnologiesList/>
  )
}

export default TechnologiesPage;