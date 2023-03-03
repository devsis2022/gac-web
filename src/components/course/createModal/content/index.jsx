import { useState } from "react"
import TextField    from '@mui/material/TextField';
import Textarea     from '@mui/base/TextareaAutosize';
import Button       from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import debounce     from 'lodash.debounce' 

import { CourseCreationStyled } from "./styled"
import { publicInstance }       from "../../../../service/axios"

export const CouseCreationContent = ({closeModalCreateCourse, loadCourses}) => {

    const [name,        setName]         = useState("");
    const [description, setDescription]  = useState("");

    //TODO
    const [coordinator, setCoordinator]  = useState("6");
    const [institution, setiInstitution] = useState("2");
    const userId = 6;

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

    //TODO
    const searchCoordinator = (char) => {
        console.log(`[LOG] searching coordinator "${char}"`);
    }

    const selectCoordinator = (event) => {
        setCoordinator(coordinatorList[event.target.value]);
    }

    const saveCourse = async () => {
        alert('saving')
        if(!sessionStorage.getItem('token')) { window.location.pathname = ('/login'); return; }
        
        try {
            const tokenFormat = 'Bearer ' + sessionStorage.getItem('token');
            const newCouse = {
                "name":name,
                "coordinatorId":coordinator,
                "description":description,
                "institutionId":institution,
                "userId":userId
            }
            
            //TODO -> not saving
            const response = await publicInstance
                .get(`/institution/${newCouse.institutionId}/courses`
                    , newCouse
                    , { headers: {'authorization':tokenFormat}
            });

        }catch (error) {
            console.log(error)
        }

        loadCourses();
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