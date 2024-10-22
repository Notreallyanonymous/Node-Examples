import express from 'express'
import tasksController from '../controllers/tasks.js';

const router = express.Router()
router.route('/').get(tasksController.getAllTasks).post(tasksController.createTask)
router.route('/:id').get(tasksController.getTask).patch(tasksController.updateTask).delete(tasksController.deleteTask)





export default router
