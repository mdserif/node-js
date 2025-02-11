const express = require("express");
const router = express.Router();
const {handleGetAllUsers,handleGetUserById,updateUserById,handleDeleteUserById,handleCreateUser} = require("../controllers/user.js")


router.route("/").get(handleGetAllUsers).post(handleCreateUser)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(updateUserById)
    .delete(handleDeleteUserById)


module.exports = router;
