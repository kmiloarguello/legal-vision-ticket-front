import { Task } from "types";

const API = {
  endpoint: "https://api.example.com",
  async getTasks(tasks: Task[]) {
    const response = await fetch(`${this.endpoint}/tasks`);
    const data = await response.json();
    tasks = data;
  },
  async addTask(task: Task) {
    const response = await fetch(`${this.endpoint}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    task = data;
  },
  async toggleTask(task: Task) {
    const response = await fetch(`${this.endpoint}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    task = data;
  },
};

export default API;
