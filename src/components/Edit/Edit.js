const Edit = () => {
    return(
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Cave</legend>
                    <p className="field">
                        <label htmlF
                        or="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" value=""/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="location">Location</label>
                        <span className="input">
                            <input type="text" name="location" id="location" value=""/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description">some description</textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" value="/images/dog.png"/>
                        </span>
                    </p>
                    
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Edit