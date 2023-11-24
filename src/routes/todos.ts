
import { Router } from "express";
import { Todo } from "../models/todo";
type requestBody = {text:string};
type requestParams = {todoId:string};
let todos:Todo[] = [] 

const router = Router()

router.get('/',(req,res,next)=>{
    res.status(200).json({todos: todos})
})

router.post('/todo',(req,res,next)=>{
    const body = req.body as requestBody
    const newTodo:Todo = {
        id:new Date().toISOString(),
        text:body.text
    }

    todos.push(newTodo)
    res.status(200).json({added:true})
})
router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams
    const todoIndex = todos.findIndex(todo=>todo.id === params.todoId)
    if (todoIndex>=0){
        todos[todoIndex] = {
            id:todos[todoIndex].id,
            text:req.body.text
        }
        return res.status(201).json({updated:true})
    }
    res.status(200).json({updated:false})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams
        todos = todos.filter(todoItem=>todoItem.id!==params.todoId)
        res.status(200).json({deleted:true})
})


export default router