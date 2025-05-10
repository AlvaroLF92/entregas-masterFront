<template>
  <li class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="toggleTask"
      :aria-checked="task.completed ? 'true' : 'false'"
    />

    <input
      v-if="isEditing"
      v-model="editableTitle"
      @keyup.enter="saveEdit"
      @blur="saveEdit"
      class="edit-input"
    />

    <span
      v-else
      @dblclick="startEditing"
      :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
    >
      {{ task.title }}
    </span>

    <button
      class="delete-button"
      @click="deleteTask"
      aria-label="Eliminar tarea"
    >
      ❌
    </button>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { useTodoStore } from "@/stores/todo";
import type { Task } from "@/stores/todo";

const props = defineProps<{ task: Task }>();
const todoStore = useTodoStore();

const isEditing = ref(false);
const editableTitle = ref(props.task.title);

function toggleTask() {
  todoStore.toggleTask(props.task.id); 
}

function saveEdit() {
  if (editableTitle.value.trim() && editableTitle.value !== props.task.title) {
    todoStore.updateTaskTitle(props.task.id, editableTitle.value.trim()); 
  }
  isEditing.value = false;
}

function deleteTask() {
  todoStore.deleteTask(props.task.id);
}

function startEditing() {
  isEditing.value = true;
  editableTitle.value = props.task.title;
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  > span {
    display: inline-block;
    max-width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    text-align: left;
  }
}

.edit-input {
  flex: 1;
  padding: 0.2rem;
}

.delete-button {
  display: inline;
  visibility: hidden;
  background: none;
  border: none;
  cursor: pointer;
}

.task-item:hover .delete-button {
  visibility: visible;
}
</style>
