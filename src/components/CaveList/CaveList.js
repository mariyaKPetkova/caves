import { useEffect,useState } from "react"
import * as caveService from '../../services/caveService.js'
import CaveCard from './CaveCard/CaveCard.js'
const CaveList = () => {
    const [caves,setCaves] = useState([])
    useEffect(()=>{
        caveService.getAll()
        .then(result=>{
            setCaves(result)
        })
    },[])
    return (
        <>
        {caves.length >0
        ?<ul className="list">
                {caves.map(x => <CaveCard key={x._id} cave={x} />)}
            </ul>
        :<p className="no-item">No items in database!</p>
        } 
        </>
    )
}
export default CaveList