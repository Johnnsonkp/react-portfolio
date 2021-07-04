import React, {useState} from 'react'
import './blogG.css'

export default function BlogGeneratorForm(props) {
    const {addBlog} = props
    const initialFormState = {
        name: "",
        description: "",
    }
    const [formData, setFormData] = useState(initialFormState)

    function changeHandler(event) {
        console.log()
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function submitHandler(event){
        event.preventDefault()
        addBlog(formData)
        setFormData({
            name: "",
            post: "",
        })
    }
    function displayForm(){
        setTimeout( () => {
            document.getElementById('form').classList.toggle('hiddenForm')
        },)
        console.log("yes")
    }
    return (
        <>
            <button onClick={displayForm}>Add Blog</button>
            <form id="form" className="contact-form hiddenForm" onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={changeHandler}/>

                <label htmlFor="post">Post:</label>
                <input type="text" name="post" id="post" value={formData.post} onChange={changeHandler}/>

                <input type="submit" id="submit-btn" value="Submit"/>
            </form>
        </>
    )
}

// export default BlogGeneratorForm;