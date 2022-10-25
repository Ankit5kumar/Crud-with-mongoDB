const {User} = require('../model/user')



// Creating the user 
async function CreateUser(req, res) {
    
    try {
        const {name,Email,Role,Ph} = req.body;
        if(!(name && Email && Role && Ph)){
            res.send("all fields are required")
        }  
        const olduser = await User.findOne({Email})
        if(olduser){
           return res.send('User already exists')
        }
        const newUser = await User.create({
            name,
            Email: Email.toLowerCase(),
            Role,
            Ph
        }) 
        // await newUser.save()
        console.log("user created",newUser)
        res.status(200).send('user created')
        
     
    } catch (error) {
        res.status(404).send({msg:'internal server error from CreateUser'})
    }
}

// finding the user 
async function getallUser(req, res) {
    try {
        const Alluser = await User.find({})
        console.log(Alluser)
         res.send(Alluser)
        //  res.status(201).send(Alluser)
    } catch (error) {
        res.status(404).send({msg:"internal server erorr error from Getalluser"})
    }    
}
// find User by ids
async function findById(req, res) {
    
    try {
         const id = req.params.id;
        const user = await User.findById(id)
        res.send(user)
        console.log("Byid",user)
        // res.status(200).send({msg:"document found",user})
    } catch (error) {
        res.status(404).send({msg:'internal server'})
    }
}

// Updating the data
async function updateData(req, res) {
    try {
        const userdata = req.body;
        const id = req.params.id;
        const filter = await User.findById(id)
        const options = {upsert:true}
        const updatedoc = {
            $set:{
                "name":userdata.name,
                "Email":userdata.Email,
                "Role":userdata.Role,
                "Ph":userdata.Ph

            }
        }
        const result = await User.updateOne(filter, updatedoc, options)
        console.log(result)
        res.send(result)
    } catch (error) {
        res.status(404).send({msg:'internal server from updated part'})
    }
}
// deleting the data
async function deleteData(req, res) {
    console.log("reach")
    try {
        const id = req.params.id;
        const user = await User.findOneAndDelete({ _id: id })
        res.send(user)
        console.log("deleted successfully",user)

    } catch (error) {
        res.send({msg:'internal server from deleted'})
    }

}





async function Create(req, res) {
     res.status(200).send('it is working in controller')
}
module.exports = {
    Create,
    CreateUser,
    getallUser,
    findById,
    updateData,
    deleteData
}