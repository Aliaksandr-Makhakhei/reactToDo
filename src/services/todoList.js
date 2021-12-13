import api from '../configs/api';

const add =  async (object) => {
    await api.post('/todos', object);
  }

const deleteTodo = async (itemNumber) => {
    await api.delete(`/todos/${itemNumber}`);
  }

const edit = async (todo) => {
    await api.put(`/todos/${todo.id}`, todo);
}

const load = async () => {
    const response = await api.get('/todos');
    return response.data
}

const exportObject = { add, delete: deleteTodo, edit, load }

export default exportObject