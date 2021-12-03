import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as caveService from '../../services/caveService.js'
const Details = () => {
    const navigate = useNavigate()
    const [cave, setCave] = useState({})
    const { caveId } = useParams()
    useEffect(async () => {
        const result = await caveService.getOne(caveId)
        setCave(result)
    }, [])

    const onDelete = (e) => {
        e.preventDefault()
        caveService.del(caveId)
        .then(()=>{
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
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#" onClick={onDelete}>Delete</a>

                    <a className="button" href="#">Like</a>

                    <div className="likes">
                        <img className="hearts" src="" />
                        <span id="total-likes">Likes: </span>
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