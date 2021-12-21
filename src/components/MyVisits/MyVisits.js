import { useEffect,useState } from "react"
import { useAuthContext } from "../../contexts/AuthContext.js"
import * as caveService from '../../services/caveService.js'
import CaveCard from '../CaveList/CaveCard/CaveCard.js'


const MyVisits = () => {
    const { user } = useAuthContext()
    const [caves,setCaves] = useState([])
    useEffect(()=>{
        caveService.getAll()
        .then(result=>{
            setCaves(result.filter(x=>x.author == user._id))
        })
    },[])
    return (
        <>
        {caves.length > 0
        ?<ul className="list">
                {caves.map(x => <CaveCard key={x._id} cave={x} />)}
            </ul>
        :<h3>No visits!</h3>
        } 
        </>
    )
}
export default MyVisits