import { useState } from "react"
import TextField    from '@mui/material/TextField';
import Textarea     from '@mui/base/TextareaAutosize';
import Button       from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import debounce     from 'lodash.debounce' 

import { CourseCreationStyled } from "./styled"

export const CouseCreationContent = ({closeModalCreateCourse}) => {

    const [name,        setName]         = useState("");
    const [description, setDescription]  = useState("");
    const [coordinator, setCoordinator]  = useState("");
    // const [institution, setiInstitution] = useState("");

    const [coordinatorList,setCoordinatorList] = useState([
        {id:1,
        label:"gestor 1"}
    ])

    const handleChange = (event) => {
        switch (event.target.id){
            case "name":         setName(event.target.value);         break;
            case "description":  setDescription(event.target.value);  break;
        }
    };

    const coordinatorFilter = debounce((event) => {
        searchCoordinator(event.target.value);
    }, 500)

    const searchCoordinator = (char) => {
        console.log(`[LOG] searching coordinator "${char}"`);
    }

    const selectCoordinator = (event) => {
        setCoordinator(coordinatorList[event.target.value]);
    }

    const saveCourse = async () => {
        alert('saving course')
        closeModalCreateCourse();
    }

    return(
        <CourseCreationStyled>
            <h4>Criação de curso</h4>
            <div className="form">
                
                <TextField  id="name"          onChange={handleChange}     label="Nome"        variant="outlined" />

                <Autocomplete  id="coordinator"     disablePortal                   sx={{ width: 300 }}
                    onInput={coordinatorFilter}     onChange={selectCoordinator}    options={coordinatorList}
                    renderInput={(params) => <TextField {...params} label="Cordenador" />}
                />

                <textarea   id="description"   onChange={handleChange}     placeholder="Descrição"   variant="outlined" />

                {/* <Autocomplete  id="coordinator"     disablePortal                   sx={{ width: 300 }}
                    onInput={searchInstitution}     onChange={selectCoordinator}    options={coordinatorList}
                    renderInput={(params) => <TextField {...params} label="Cordenador" />}
                /> */}

                <Button onClick={saveCourse} variant="contained">Criar</Button>
            </div>
        </CourseCreationStyled>
    )
}