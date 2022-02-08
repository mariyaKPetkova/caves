import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as caveService from '../../services/caveService.js'
import { useAuthContext } from '../../contexts/AuthContext.js'
const Details = () => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [cave, setCave] = useState({})
    const { caveId } = useParams()
    // useEffect(async () => { //
    //     const result = await caveService.getOne(caveId)
    //     setCave(result)
    // }, [])
    useEffect(() => { //
        caveService.getOne(caveId)
        .then(result=>{
            result.coutLikes = result.likes.length
            setCave(result)
        })
    }, [caveId])

    const onDelete = (e) => {
        e.preventDefault()
        caveService.del(caveId,user.accessToken)
            .then(() => {
                navigate('/')
            })
    }
    
    const onLike = (e) => {
        e.preventDefault()

        if(cave.likes.includes(user._id)){
            return
        }
        const likes = [...cave.likes,user._id]
        const upLikes = {...cave,likes}
        caveService.like(caveId,upLikes,user.accessToken)
        .then(data => {
            console.log(data);
            setCave(state =>({
                ...state,
                upLikes
            }))
            navigate('/')
        })
    }
    
    return (
        <section id="details-page" className="details">
            <div id="imgg">
            <img id="details-img" src={cave.imageUrl} />
            </div>
            <div id="info-cave">
            <h3>{cave.name}</h3>
                <p>{cave.description}</p>
                <br></br>
                <p><i class="fas fa-map-marker-alt"></i> {cave.location}</p>
                <p id="likes"><i class="far fa-thumbs-up"></i> {cave.coutLikes}</p>
                <div id="act">
                    {user._id && (user._id == cave.author
                        ? (<>
                        <a className="button" href={`/edit/${caveId}`}>Edit</a>
                            <a className="button" href="#" onClick={onDelete}>Delete</a>
                        </>)
                        :(<a className="button" href="#" onClick={onLike}>Like</a>)
                        
                        )}
                </div>
                </div>               
        </section>
    )
}
export default Details