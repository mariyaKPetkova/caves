
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as caveService from '../../services/caveService.js'
import {  useAuthContext } from '../../contexts/AuthContext.js'

const Edit = () => {
    const { caveId } = useParams();
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const [cave, setCave] = useState({})
    const [errors,setErrors] = useState({name:false,location:false,description:false,imageUrl:false})
    useEffect(() => { 
        caveService.getOne(caveId)
        .then(result=>{
            setCave(result)
        })
    }, [caveId])

    const onEdit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const location = form.get('location')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')

        caveService.update({
            name,
            location,
            description,
            imageUrl
        }, user.accessToken,caveId) 
            .then(result => {
                navigate('/')
            })
    }
    const onName = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 3){
            setErrors(state =>({...state, name:'Name must be at least 3 characters long'}))
        }else if(curr.length > 20){
            setErrors(state =>({...state, name:'Name must be maximum 20 characters long'}))
        }else{
            setErrors(state =>({...state, name:false}))
        }
    }
    const onLocation = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 3){
            setErrors(state =>({...state, location:'Location must be at least 3 characters long'}))
        }else if(curr.length > 25){
            setErrors(state =>({...state, location:'Location must be maximum 25 characters long'}))
        }else{
            setErrors(state =>({...state, location:false}))
        }
    }
    const onDescription = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 3){
            setErrors(state =>({...state, description:'Description must be at least 3 characters long'}))
        }else if(curr.length > 150){
            setErrors(state =>({...state, description:'Description must be maximum 150 characters long'}))
        }else{
            setErrors(state =>({...state, description:false}))
        }
    }
    const onImageUrl = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 1){
            setErrors(state =>({...state, imageUrl:'Image is required'}))
        }else{
            setErrors(state =>({...state, imageUrl:false}))
        }
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="PUT" onSubmit={onEdit}>
                <fieldset>
                    <legend>Edit my Cave</legend>
                    <p className="field">
                        <label>Name: </label>
                        <p className="field">
                            <input type="text" name="name" id="name" defaultValue={cave.name} onChange={onName}/>
                            </p>
                        <span style={{display: errors.name?'inline':'hidden'}}>{errors.name}</span>
                    </p>
                    <p className="field">
                        <label>Location: </label>
                        <p className="field">
                            <input type="text" name="location" id="location" defaultValue={cave.location} onChange={onLocation} />
                       </p>
                        <span style={{display: errors.location?'inline':'hidden'}}>{errors.location}</span>
                    </p>
                    <p className="field">
                        <label >Description: </label>
                        <p className="field">
                            <textarea name="description"
                                id="description" defaultValue={cave.description} onChange={onDescription}/>
                       </p>
                        <span style={{display: errors.description?'inline':'hidden'}}>{errors.description}</span>
                    </p>
                    <p className="field">
                        <label >Image: </label>
                        <p className="field">
                            <input type="text" name="imageUrl" id="image" defaultValue={cave.imageUrl} onChange={onImageUrl}/>
                       </p>
                        <span style={{display: errors.imageUrl?'inline':'hidden'}}>{errors.imageUrl}</span>
                    </p>

                    <input className="button-submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    )
}
export default Edit