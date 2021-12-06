import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as caveService from '../../services/caveService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
const Create = () => {
     const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const onCreate = (e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const location = form.get('location')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')
        
        caveService.create({
            name,
            location,
            description,
            imageUrl
        },user.accessToken)
        .then(result=>{
            navigate('/')
        })
    }
    return(
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCreate} method="Post">
                <fieldset>
                    <legend>Add new Cave</legend>
                    <p className="field">
                        <label htmlF
                        or="name">Name: </label>
                        <span className="input">
                            <input type="text" name="name" id="name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="location">Location: </label>
                        <span className="input">
                            <input type="text" name="location" id="location"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="description">Description: </label>
                        <span className="input">
                            <textarea name="description" id="description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="image">Image: </label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image"/>
                        </span>
                    </p>
                    
                    <input className="button-submit" type="submit" value="Add Cave"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Create