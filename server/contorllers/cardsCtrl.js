module.exports={
    getCards: async(req,res, next)=>{
        // try {
            const db =req.app.get('db')
            const{user_id} = req.session.user
            const {bank} = req.params
            const cards = await db.cards.select_cards(user_id)
            res.status(200).send(cards)            
        // } catch (error) {
            // console.log('error getting cards')
            // res.status(500).send(error)
        // }
    },
    addCards: async(req,res,next)=>{
        // try {
            const db = req.app.get('db')
            const {name,bank, type, annual_fee,points,img} = req.body
            const{user_id} = req.session.user
            const cards = await db.cards.add_cards([name,bank,type,annual_fee,points,img,user_id])
            res.status(200).send(cards)
        // } catch (error) {
        //     console.log('error adding cards')
        //     res.status(500).send(error)
        // }
    },
    deleteCards: async(req,res,next) =>{
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const cards = await db.cards.delete_cards(id)
            res.status(200).send(cards)
        } catch (error) {
            console.log('error removing cards',error)
            res.status(500).send(error)
        }
    },
    updateCards:async(req,res,next)=>{
        try {
            const db = req.app.get('db')
            const{points} = req.query
            const{id} = req.params
            const cards = await db.cards.update_cards([id, points])
            res.status(200).send(cards)  
        } catch (error) {
            console.log('error updating cards')
            res.status(500).send(error)
        }
    }
}
