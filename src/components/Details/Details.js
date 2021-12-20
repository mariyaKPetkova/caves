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

        // if(cave.likes.includes(user._id)){
        //     return
        // }
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
            <div className="cave-information">
                <h3>Name: {cave.name}</h3>
                <p className="type">Location: {cave.location}</p>
                <p className="img"><img src={cave.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id == cave.author
                        ? (<>
                        <a className="button" href='/edit'>Edit</a>
                            <a className="button" href="#" onClick={onDelete}>Delete</a>
                        </>)
                        : (<a className="button" href="#" onClick={onLike}>Like</a>)
                        )}



                    <div className="likes">
                        <img className="hearts" src="" />
                        <span id="total-likes">Likes: {cave.likes}</span>
                    </div>

                </div>
            </div>
            <div className="cave-description">
                <h3>Description:</h3>
                <p>{cave.description}</p>
            </div>
        </section>
    )
}
export default Details