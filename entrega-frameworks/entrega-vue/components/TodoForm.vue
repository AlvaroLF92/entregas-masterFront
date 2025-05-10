<template>
  <form @submit.prevent="handleAddTask">
    <input
      v-model="newTaskTitle"
      type="text"
      placeholder="Nueva tarea"
      required
      id="search-task"
      name="search-task"
    />
    <button class="add-button" type="submit">Agregar</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const newTaskTitle = ref("");
const todoStore = useTodoStore();

function handleAddTask() {
  if (!newTaskTitle.value.trim()) return;
  todoStore.addTask(newTaskTitle.value.trim());
  newTaskTitle.value = "";  
}
</script>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
}

.add-button {
  border-radius: 0.5rem;
  background-color: white;
}
</style>
