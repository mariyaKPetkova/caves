import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as caveService from '../../services/caveService.js'
const Details = () => {
    const [cave, setCave] = useState({})
    const { caveId } = useParams()
    useEffect(async () => {
        const result = await caveService.getOne(caveId)
        
        setCave(result)
    },[])

    return (
        <section id="details-page" className="details">
            <div className="cave-information">
                <h3>Name: {cave.name}</h3>
                <p className="type">Location: {cave.location}</p>
                <p className="img"><img src={cave.imageUrl} /></p>
                <div className="actions">
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
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