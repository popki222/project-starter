import React from "react"
import "../App.css";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {title: "", description: "", startPrice: "", picture: "", category: "", condition: "", oauthToken:""}
    )
    
    console.log(formData.comments)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }



    async function handleSubmit(event) {
        event.preventDefault()
        
        console.log(formData);
        // get data from inputs -> title
        // set that to a variable, body

        
        
        try {
            console.log("sending request");
            const response = await fetch('http://localhost:8080/api/ebay-api', {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(formData),

            });
    
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Response from backend:', data);
        }   catch (error) {
            console.error('Error:', error);
        }
        }

    
    
    return (
        <div className="body">
        <div className="hello">
            <h1>Create Your Listing</h1>
        </div>
        <div className="form-container">
        
        <div className="centered-form">
        <form onSubmit={handleSubmit} className="my-form">
            <input
                type="text"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={formData.title}
            />
            <input
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={formData.description}
            />
             <input
                type="text"
                placeholder="Start Price"
                onChange={handleChange}
                name="startPrice"
                value={formData.startPrice}
            />

            
            <input
                type="text"
                placeholder="Picture"
                onChange={handleChange}
                name="picture"
                value={formData.picture}
            />
            <input
                type="text"
                placeholder="oauth token"
                onChange={handleChange}
                name="oauthToken"
                value={formData.oauthToken}
            />
            
            <label htmlFor="category">Category:</label>
            
            <select 
                id="category"
                value={formData.category}
                onChange={handleChange}
                name="category"
            >
                <option value="">-- Choose --</option>
                <option value="11450">Clothing</option>
                <option value="102491">Electronics</option>
                <option value="11700">Home & Garden</option>
                <option value="888">Sporting Goods</option>
                <option value="88433">Other</option>
            </select>
            
            <label htmlFor="condition">Condition:</label>
            
            <select 
                id="condition"
                value={formData.condition}
                onChange={handleChange}
                name="condition"
            >
                <option value="">-- Choose --</option>
                <option value="1000">New</option>
                <option value="2750">Like New</option>
                <option value="3000">Used</option>
                <option value="5000">Good</option>
            </select>
            <br />

            <button>Submit Listing</button>
        </form>
        </div>
        </div>
        </div>
    )
}