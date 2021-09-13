//import { registerUser, loginUser, deleteUser, verifyUser} from "../controllers/userController.js";
import express from 'express'

import Supply from '../models/supplierModel.js'
const supplyRouter = express.Router()



// express router method to create route for registering users
//supplyRouter.route('/register').post(registerUser)

// express router method to create route for logging in users
//supplyRouter.route('/login').post(loginUser)

// express router method to create route for deleting users
//supplyRouter.route('/delete/:id').delete(deleteUser)


export default supplyRouter
