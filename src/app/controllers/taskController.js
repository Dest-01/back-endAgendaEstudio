const { Task } = require('../models')

class TaskController {
     async index(_, res){
         try{
             let task = await Task.find()
             return res.json({
                task
             })
         }catch(err){
            console.log(err);
         }
     }
     async store(req, res){
         try{
            let data = req.body
            let task = new Task(data)
            let dataSave = task.save()
            return res.json({
                dataSave
            })
            console.log(data)
         }catch(err){
             console.log(err)
         }
     }
     async update(req, res){
         try{
             await Task.updateOne({
                 id: req.params.id
             }, req.body)
             console.log(req.params.id)
             console.log(req.body)   
             return res.json(
                 req.body
             )
         }catch(err){
            console.log(err)
         }
     }
     async destroy(req, res){
         try{
             let item = await Task.deleteOne({
                 id: req.params.id
             })
             return res.send("Item Eliminado");
         }catch(err){
             console.log(err)
         }
     }
}

module.exports = new TaskController