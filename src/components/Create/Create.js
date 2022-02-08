import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as caveService from '../../services/caveService.js'
import { useAuthContext } from '../../contexts/AuthContext.js'

const Create = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const [errors, setErrors] = useState({ name: false, location: false, description: false, imageUrl: false })
    const onCreate = (e) => {
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
        }, user.accessToken)
            .then(result => {
                navigate('/')
            })
    }
    const onName = (e) => {
        const curr = e.currentTarget.value
        if (curr.length < 3) {
            setErrors(state => ({ ...state, name: 'Name must be at least 3 characters long' }))
        } else if (curr.length > 20) {
            setErrors(state => ({ ...state, name: 'Name must be maximum 20 characters long' }))
        } else {
            setErrors(state => ({ ...state, name: false }))
        }
    }
    const onLocation = (e) => {
        const curr = e.currentTarget.value
        if (curr.length < 3) {
            setErrors(state => ({ ...state, location: 'Location must be at least 3 characters long' }))
        } else if (curr.length > 25) {
            setErrors(state => ({ ...state, location: 'Location must be maximum 25 characters long' }))
        } else {
            setErrors(state => ({ ...state, location: false }))
        }
    }
    const onDescription = (e) => {
        const curr = e.currentTarget.value
        if (curr.length < 3) {
            setErrors(state => ({ ...state, description: 'Description must be at least 3 characters long' }))
        } else if (curr.length > 150) {
            setErrors(state => ({ ...state, description: 'Description must be maximum 150 characters long' }))
        } else {
            setErrors(state => ({ ...state, description: false }))
        }
    }
    const onImageUrl = (e) => {
        const curr = e.currentTarget.value
        if (curr.length < 1) {
            setErrors(state => ({ ...state, imageUrl: 'Image is required' }))
        } else {
            setErrors(state => ({ ...state, imageUrl: false }))
        }
    }
    return (
        <section id="create-page" className="create">
            <form id="create-form" className='form' onSubmit={onCreate} method="Post">
                <fieldset>
                    <legend>Add new Cave</legend>

                    <label>Name: </label>
                    <input type="text" name="name" id="name" onChange={onName} />
                    <span style={{ display: errors.name ? 'inline' : 'hidden' }}>{errors.name}</span>


                    <label >Location: </label>
                    <input type="text" name="location" id="location" onChange={onLocation} />
                    <span style={{ display: errors.location ? 'inline' : 'hidden' }}>{errors.location}</span>


                    <label >Description: </label>
                    <textarea name="description" id="description" onChange={onDescription} />
                    <span style={{ display: errors.description ? 'inline' : 'hidden' }}>{errors.description}</span>


                    <label>Image: </label>
                    <input type="text" name="imageUrl" id="image" onChange={onImageUrl} />
                    <span style={{ display: errors.imageUrl ? 'inline' : 'hidden' }}>{errors.imageUrl}</span>


                    <input className="button-submit" type="submit" value="Add Cave" />

                </fieldset>
            </form>
        </section>
    )
}
export default Create