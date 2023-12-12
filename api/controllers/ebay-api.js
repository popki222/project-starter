const express = require("express");
const router = express.Router();
const EbayListing = require('../models').EbayListing

const axios = require('axios');

router.post("/", async (req, res) => {
  try {

    

    // Store the data into your database using the EbayItem model
    

    console.log("=== BODY START ===");
    console.log(req.body);
    console.log("=== BODY END ===");
    
    var title = req.body.title
    var startPrice = req.body.startPrice
    var oauthToken = req.body.oauthToken
    var category = req.body.category
    var picture = req.body.picture
    var description = req.body.description
    var condition = req.body.condition

    const newItem = await EbayListing.create({
      title,
      startPrice,
      oauthToken,
      category,
      picture,
      description,
      condition
    });

    const staticBody = `<?xml version="1.0" encoding="utf-8"?>\n<AddItemRequest xmlns="urn:ebay:apis:eBLBaseComponents"><RequesterCredentials>\n    <eBayAuthToken>${oauthToken}</eBayAuthToken>\n  </RequesterCredentials>\n	<ErrorLanguage>en_US</ErrorLanguage>\n	<WarningLevel>High</WarningLevel>\n  <Item>\n      <Title>${title}</Title>\n      <Description>${description}</Description>\n      <PrimaryCategory>\n        <CategoryID>${category}</CategoryID>\n      </PrimaryCategory>\n      <StartPrice>${startPrice}</StartPrice>\n      <CategoryMappingAllowed>true</CategoryMappingAllowed>\n      <Country>US</Country>\n      <Currency>USD</Currency>\n      <DispatchTimeMax>3</DispatchTimeMax>\n      <ListingDuration>Days_7</ListingDuration>\n      <ListingType>Chinese</ListingType>\n      <PictureDetails>\n        <PictureURL>${picture}</PictureURL>\n      </PictureDetails>\n      <PostalCode>10307</PostalCode>\n      <Quantity>1</Quantity>\n      <ItemSpecifics></ItemSpecifics>\n      <ReturnPolicy>\n <ConditionID>${condition}</ConditionID>\n     <ReturnsAcceptedOption>ReturnsAccepted</ReturnsAcceptedOption>\n        <RefundOption>MoneyBack</RefundOption>\n        <ReturnsWithinOption>Days_30</ReturnsWithinOption>\n        <ShippingCostPaidByOption>Buyer</ShippingCostPaidByOption>\n      </ReturnPolicy>\n      <ShippingDetails>\n        <ShippingType>Flat</ShippingType>\n        <ShippingServiceOptions>\n          <ShippingServicePriority>1</ShippingServicePriority>\n          <ShippingService>USPSMedia</ShippingService>\n          <ShippingServiceCost>2.50</ShippingServiceCost>\n        </ShippingServiceOptions>\n      </ShippingDetails>\n      <Site>US</Site>\n  </Item>\n</AddItemRequest>`;
    console.log(staticBody)

    const response = await axios.post('https://api.ebay.com/ws/api.dll', staticBody, {
      headers: {
        'Authorization': oauthToken,
        'Content-Type': 'application/xml',
        'User-Agent': 'Your-User-Agent-Here',
        'X-EBAY-API-CALL-NAME': 'AddItem',
        'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-IAF-TOKEN': oauthToken,
        'X-EBAY-API-SITEID': '0',
      },
    });

    const xmlData = response.data;
    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
