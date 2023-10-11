// index.js

const express=require("express");
const PORT=process.env.PORT || 3001;
const app=express();

app.listen(PORT, ()=>{
    console.log(`Hello World . Server listening on port no ${PORT}`);
});