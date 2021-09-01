import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import path from 'path'

const PORT = process.env.PORT || 5000

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()

//Creating API for user
app.use('/api/users', userRoutes)

app.use(cors())

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
