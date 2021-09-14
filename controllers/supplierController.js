import Supply from '../models/supplierModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'


export const saveItem = asyncHandler(async (req, res) => {
    console.log("you are in saveItem api")
    const { SellerID, ItemName, Quantity, Quality, LevelSafety, Region, NDA, Comission } = req.body
    if (!SellerID || !ItemName || !Quantity || !Quality || !LevelSafety || !Region || !NDA) {
        return res.status(442).json({ error: "please add all the fields" })
    }
    const Supplies = new Supply({
        SellerID,
        ItemName,
        Quantity,
        Quality,
        LevelSafety,
        Region,
        NDA,
        Comission
    })
    Supplies.save()
        .then(() => {
            console.log('save successful')
            res.json({
                success: true,
                msg: "This Item has been saved Successfully"
            })
        })
        .catch((error) => { console.error(error) })
})
