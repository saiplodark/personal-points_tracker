const bcrypt = require('bcrypt')

module.exports = {
    login: async(req, res) =>{
        const db = req.app.get('db')
        const {username, password} =  req.body
        const foundUser = await db.users.select_user(username).catch(err => console.log(err))
        if (!foundUser.length){
            res.status(401).send("User does not exist")
        }else{
            const matchPasswords = await bcrypt.compare(password, foundUser[0].hashed_password).catch(err=>console.log(err))
            if(matchPasswords){
                req.session.user = {
                    username:foundUser[0].username,
                    user_id: foundUser[0].user_id
                }
                res.status(200).send(req.session.user)
            }else{
                res.status(401).send("Something is wrong")
            }
        }
    },
    register: async (req,res)=>{
        const db = req.app.get('db')
        const {username, password, email} = req.body
        const foundUser = await db.users.select_user(username).catch(err=>consolee.log(err))
        if(foundUser.length){
            res.status(409).send('User exists, try the different username')
        }else{
            const saltRounds =12
            const salt = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, salt)
            const createUser = await db.users.add_users([username, email, hashedPassword])
            req.session.user={
                user_id:createUser[0].user_id,
                username: createUser[0].username
            }
            res.status(200).send(req.session.user)
        }
        },
        signout:(req,res)=>{
            req.session.destroy()
            res.redirect('http://localhost:1688')
        },
        userSession:(req,res)=>{
            res.status(200).send(req.session.user)
        }
}