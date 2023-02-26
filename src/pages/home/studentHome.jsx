import { Profile } from '../../components/profile'
import {DefaultTableList} from '../../components/tableList'
import { Tracker } from '../../components/activityTracker/Tracker'
import { StudentModal } from '../../components/modal/StudentModal'
import { useState } from 'react'
import { Accepted } from '../../components/alerts/accepted'
import { Waiting } from '../../components/alerts/waiting'
import { Primary } from '../../components/buttons/Primary'



export const StudentHome = () => {
  const [activity, setActivity] = useState({})
  const [activitiesType, setActivitiesType] = useState([
    {}
  ])

  const options = [
    'Atividade 1','Atividade 2','Atividade 3'
  ]

  let list = [
    {
        primeiro:"2primeiro valor",
        segundo: "2segundo valor",  
        terceiro:<Accepted>Aceito</Accepted>,
        quarto: <Primary></Primary>
    }
]

  return (
    <div>
      <Profile />
      <StudentModal activity={activity} setActivity={setActivity} list={list} options={options}/>
      <Tracker items={options}/>
      <DefaultTableList list={list}/>
    </div>
  )
}
