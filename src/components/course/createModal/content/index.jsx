import { useState } from "react"
import { CourseCreationStyled } from "./styled"

export const CouseCreationContent = ({modalIsOpen, closeModal}) => {

    const [name,        setName]         = useState("");
    const [description, setDescription]  = useState("");
    const [coordinator, setCoordinator]  = useState("");
    const [institution, setiInstitution] = useState("");

    const handleChange = (event) => {
        switch (event.target.id){
            case "courseName":         setName(event.target.value);         break;
            case "courseDescription":  setDescription(event.target.value);  break;
            case "coordinator":        setCoordinator(event.target.value);  break;
            case "institution":        setiInstitution(event.target.value); break;
        }
    };

    return(
        <CourseCreationStyled>
            <div className="form">
                <label htmlFor="courseName">
                    <p> Nome do curso </p>
                    <input id="courseName" onChange={handleChange} type="text" placeholder="Nome do Curso" />
                </label>

                <label htmlFor="courseDescription">
                    <p> Nome do curso </p>
                    <textarea id="courseDescription" onChange={handleChange} type="text" placeholder="Nome do Curso" />
                </label>

                
            </div>
        </CourseCreationStyled>
    )
}