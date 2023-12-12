
// models/ebayListing.js
"use strict";
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EbayListing extends Model {}

  EbayListing.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      oauthToken: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      condition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      
      // for some reason app breaks when trying to add description ,  but it is not important to store
    },
    {
      sequelize,
      modelName: 'EbayListing',
    }
  );

  return EbayListing;
};
