import {TableList} from "./styled";

export const DefaultTableList = () => {

    //dados sinteticos
    const list = [
        {
            primeiro:"1primeiro valor",
            segundo: "1segundo valor",
            terceiro:"1terceiro valor"
        },
        
        {
            primeiro:"2primeiro valor",
            segundo: "2segundo valor",  
            terceiro:"2terceiro valor"
        }
    ]

    const alignment = [20,60,20]
    //

    let tableHeader = (
    <tr>
        {Object.keys(list[0]).map((header, index) => {
            return (
                <th style={{width:String(alignment[index])+"%"}}>
                    {header}
                </th>
            )}
        )}
    </tr>
    )

    let tableBody = list.map((element) => {
        return (
            <tr>
                {Object.keys(element).map((element_key, index) => {
                    return (
                        <td style={{width:String(alignment[index])+"%"}}>
                            {element[element_key]}
                        </td>
                    )}
                )}
            </tr>
        )
    })
    

    return(
        <TableList>
            <table>
                {tableHeader}
                {tableBody}
            </table>
            aqui
        </TableList>
    )
}