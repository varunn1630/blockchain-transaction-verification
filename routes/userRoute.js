import { registerUser, loginUser, deleteUser} from "../controllers/userController.js";
import express from 'express'

import User from '../models/usersModel.js'
const router = express.Router()



// express router method to create route for registering users
router.route('/register').post(registerUser)

// express router method to create route for logging in users
router.route('/login').post(loginUser)

// express router method to create route for deleting users
router.route('/delete/:id').get(deleteUser)

export default router
