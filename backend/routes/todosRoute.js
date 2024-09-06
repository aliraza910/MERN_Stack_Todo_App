import express from 'express';
import { Todo } from '../models/TodoModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, description',
      });
    }
    const newTodo = {
      title: request.body.title,
      description: request.body.description
    };

    const todo = await Todo.create(newTodo);

    return response.status(201).send(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const todos = await Todo.find({});

    return response.status(200).json({
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const todo = await Todo.findById(id);

    return response.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, description',
      });
    }

    const { id } = request.params;

    const result = await Todo.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    return response.status(200).send({ message: 'Todo updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Todo.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    return response.status(200).send({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
