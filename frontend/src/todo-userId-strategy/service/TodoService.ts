import axios from 'axios';

export class TodoService {
  private static BASE_URL= 'http://localhost:3031/todo';

  getAllTodos() {
    return axios.get(`${TodoService.BASE_URL}/`).then(res => res.data);
  }
}
