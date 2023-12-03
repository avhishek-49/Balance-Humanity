import express from "express";
const app = express();
import dotenv from 'dotenv'
dotenv.config();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//wecome message
app.get("/",(req,res)=>
{
    res.json({message:"Hello, Welcome to Survival application"});
});


import mainRoutes from "./routes/route_paths.js"
app.use('/api/survival/v1', mainRoutes);

let PORT = process.env.PORT || 4900
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})