import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as caveService from '../../services/caveService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
const Edit = () => {
    const { caveId } = useParams();
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    //const [cave, setCave] = useState({})
    // useEffect(() => { //
    //     caveService.getOne(caveId)
    //     .then(result=>{
    //         setCave(result)
    //     })
    // }, [caveId])

    const onEdit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const location = form.get('location')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')

        console.log(caveId); // undefined

        caveService.update({
            name,
            location,
            description,
            imageUrl
        }, user.accessToken,caveId) //id
            .then(result => {
                navigate('/')
            })
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="PUT" onSubmit={onEdit}>
                <fieldset>
                    <legend>Edit my Cave</legend>
                    <p className="field">
                        <label htmlF
                            or="name">Name: </label>
                        <span className="input">
                            <input type="text" name="name" id="name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                            or="location">Location: </label>
                        <span className="input">
                            <input type="text" name="location" id="location" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                            or="description">Description: </label>
                        <span className="input">
                            <textarea name="description"
                                id="description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                            or="image">Image: </label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" />
                        </span>
                    </p>

                    <input className="button-submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    )
}
export default Edit