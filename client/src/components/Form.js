import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {title: "", lastName: "", email: "", comments: ""}
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

        const staticBody = `<?xml version="1.0" encoding="utf-8"?>\n<AddItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">\n  <RequesterCredentials>\n    <eBayAuthToken>v^1.1#i^1#r^0#f^0#I^3#p^3#t^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</eBayAuthToken>\n  </RequesterCredentials>\n	<ErrorLanguage>en_US</ErrorLanguage>\n	<WarningLevel>High</WarningLevel>\n  <Item>\n      <Title>${formData.title}</Title>\n      <Description>\n        This is the first book in the Harry Potter series. In excellent condition!\n      </Description>\n      <PrimaryCategory>\n        <CategoryID>29223</CategoryID>\n      </PrimaryCategory>\n      <StartPrice>1.0</StartPrice>\n      <CategoryMappingAllowed>true</CategoryMappingAllowed>\n      <Country>US</Country>\n      <Currency>USD</Currency>\n      <DispatchTimeMax>3</DispatchTimeMax>\n      <ListingDuration>Days_7</ListingDuration>\n      <ListingType>Chinese</ListingType>\n      <PictureDetails>\n        <PictureURL>https://mysamplepicture.com/14.jpg</PictureURL>\n      </PictureDetails>\n      <PostalCode>10307</PostalCode>\n      <Quantity>1</Quantity>\n      <ItemSpecifics>     \n         <NameValueList> \n            <Name>Title</Name>\n            <Value>Harry Potter and the Philosophers Stone</Value> \n         </NameValueList> \n         <NameValueList> \n            <Name>Publisher</Name> \n            <Value>Smashwords</Value> \n         </NameValueList> \n         <NameValueList> \n            <Name>Author</Name> \n            <Value>JK Rowling</Value> \n         </NameValueList> \n         <NameValueList> \n            <Name>Language</Name> \n            <Value>English</Value> \n         </NameValueList>\n      </ItemSpecifics>\n      <ReturnPolicy>\n        <ReturnsAcceptedOption>ReturnsAccepted</ReturnsAcceptedOption>\n        <RefundOption>MoneyBack</RefundOption>\n        <ReturnsWithinOption>Days_30</ReturnsWithinOption>\n        <ShippingCostPaidByOption>Buyer</ShippingCostPaidByOption>\n      </ReturnPolicy>\n      <ShippingDetails>\n        <ShippingType>Flat</ShippingType>\n        <ShippingServiceOptions>\n          <ShippingServicePriority>1</ShippingServicePriority>\n          <ShippingService>USPSMedia</ShippingService>\n          <ShippingServiceCost>2.50</ShippingServiceCost>\n        </ShippingServiceOptions>\n      </ShippingDetails>\n      <Site>US</Site>\n  </Item>\n</AddItemRequest>`
        console.log(staticBody);
        
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={formData.title}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <button>Submit api</button>
        </form>
    )
}
