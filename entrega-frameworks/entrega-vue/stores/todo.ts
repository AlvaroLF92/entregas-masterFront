import { defineStore } from "pinia";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [] as Task[],
  }),

  persist: true,

  actions: {
    addTask(title: string) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false,
      });
    },

    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },

    updateTaskTitle(id: number, newTitle: string) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.title = newTitle;
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
    },

    deleteCompletedTasks() {
      this.tasks = this.tasks.filter((t) => !t.completed);
    },

    setAllCompleted(status: boolean) {
      this.tasks.forEach((t) => (t.completed = status));
    },

    setTasks(newTasks: Task[]) {
      this.tasks = [...newTasks];
    },

    reorderList(newOrder: Task[]) {
      this.tasks = newOrder;
    },

    getFilteredTasks(searchText: string): Task[] {
      return this.tasks.filter((t) =>
        t.title.toLowerCase().includes(searchText.toLowerCase())
      );
    },
  },
});
