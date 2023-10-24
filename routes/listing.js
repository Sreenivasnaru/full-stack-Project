const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");
const {isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");

router.route("/").get( wrapAsync(listingController.index)).post(isLoggedIn, validateListing,wrapAsync(listingController.createListing));

router.route("/:id").get(wrapAsync(listingController.showListing)).put(isLoggedIn,isOwner,  validateListing,wrapAsync(listingController.updateListing)).delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
