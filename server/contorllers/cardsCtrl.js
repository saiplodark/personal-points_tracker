module.export={
    getCards: async(req,res, next)=>{
        try {
            const db =req.app.get('db')
            const{user_id} = req.session.user
            const cards = await db.cards.get_card(user_id)
            res.status(200).send(tickets)            
        } catch (error) {
            console.log('error getting cards')
            res.status(500).send(error)
        }
    },
    addCards: async(req,res,next)=>{
        try {
            const db = req.app.get('db')
            const {name, type, annual_fee} = req.body
            const{user_id} = req.session.user
            const cards = await db.cards.add_card({name,type,annual_fee,points,img,user_id})
            res.status(200).send(cards)
        } catch (error) {
            console.log('error adding cards')
            res.status(500).send(error)
        }
    },
    removeCards: async(req,res,next) =>{
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const{user_id} = req.session.user
            const cards = await db.cards.remove_card
            res.status(200).send(cards)
        } catch (error) {
            console.log('error removing cards')
            res.status(500).send(error)
        }
    },
    editCards:async(req,res,next)=>{
        try {
            const db = req.app.get('db')
            const{points} = req.query
            const{id} = req.params
            const{card_id} = req.session.user
            const cards = await db.cards.update_card({points, annual_fee, id, user_id})
            res.status(200).send(cards)  
        } catch (error) {
            console.log('error updating cards')
            res.status(500).send(error)
        }
    }
}
