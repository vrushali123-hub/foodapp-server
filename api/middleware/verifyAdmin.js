// const verifyAdmin = async(req,res,next)=>{

// const email = req.decoded.email;

// const query = {email:email};

// const user = await userCollection.findOne(query);

// if(user.role !== "admin"){

// return res.status(403).send({message:"Forbidden access"})

// }

// next();

// }

// module.exports = verifyAdmin;


const User = require("../model/User");

const verifyAdmin = async (req,res,next)=>{

try{

const email = req.decoded.email;

const user = await User.findOne({email:email});

if(!user || user.role !== "admin"){

return res.status(403).send({message:"Forbidden access"});

}

next();

}
catch(error){

res.status(500).send({message:error.message});

}

}

module.exports = verifyAdmin;













