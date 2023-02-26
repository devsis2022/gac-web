import {TableList} from "./styled";
import { Accepted } from "../alerts/accepted";

export const DefaultTableList = ({list}) => {

    //dados sinteticos
    const alignment = [25,25,25,25]
    //

    let tableHeader = (
    <thead>
        <tr>
            <th>Atividade</th>
            <th>Horas</th>
            <th>Status</th>
            <th>Editar</th>
        </tr>
    </thead>
    )

    let tableBody = list.map((element) => {
        return (
            <tbody>
                <tr>
                    {Object.keys(element).map((element_key, index) => {
                        return (
                            <td style={{width:String(alignment[index])+"%"}}>
                                {element[element_key]}
                            </td>
                        )}
                    )}
                </tr>
            </tbody>
        )
    })
    

    return(
        <TableList>
            <table>
                {tableHeader}
                {tableBody}
            </table>
        </TableList>
    )
}