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
        <section id="my-caves-page" className="my-caves">
        <h2>My Visits</h2>
        {caves.length > 0
        ?<ul className="list">
                {caves.map(x => <CaveCard key={x._id} cave={x} />)}
            </ul>
        :<h3>No visits!</h3>
        } 
        </section>
        </>
    )
}
export default MyVisits