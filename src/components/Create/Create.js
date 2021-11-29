const Create = () => {
    return(
        <section id="create-page" className="create">
            <form id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Cave</legend>
                    <p className="field">
                        <label htmlF
                        or="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="location">Location</label>
                        <span className="input">
                            <input type="text" name="location" id="location" value="Location"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    
                    <input className="button submit" type="submit" value="Add Cave"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Create