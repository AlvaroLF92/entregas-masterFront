<template>
  <div class="task-search-input">
    <input v-model="searchText" placeholder="Buscar tareas..." />
  </div>

  <div class="controls">
    <select v-model="filter">
      <option value="all">Todas</option>
      <option value="pending">Pendientes</option>
      <option value="completed">Completadas</option>
    </select>

    <button class="control-button" @click="handleCompleteAll(true)">
      Completar todas
    </button>
    <button class="control-button" @click="handleCompleteAll(false)">
      Desmarcar todas
    </button>
    <button class="control-button-delete" @click="handleDeleteCompletedTasks">
      Borrar completadas
    </button>

    <button
      :class="{
        'control-button-alf': true,
        active: isSorted,
      }"
      @click="toggleAlphabetical"
    >
      {{ isSorted ? "Restaurar orden" : "Ordenar alfabéticamente" }}
    </button>
  </div>

  <ClientOnly>
    <div class="todo-lists">
      <div class="list-column" v-if="filter === 'all' || filter === 'pending'">
        <h2>Pendientes</h2>
        <hr />

        <draggable
          v-if="!isSorted"
          tag="ul"
          :list="pendingTasks"
          item-key="id"
          @end="onReorder('pending')"
        >
          <template #item="{ element: task }">
            <li>
              <TodoItem
                :task="task"
                @update-task="handleUpdate"
                @delete-task="handleDelete"
              />
            </li>
          </template>
        </draggable>

        <ul v-else>
          <li v-for="task in sortedTasksFiltered('pending')" :key="task.id">
            <TodoItem
              :task="task"
              @update-task="handleUpdate"
              @delete-task="handleDelete"
            />
          </li>
        </ul>

        <p v-if="pendingTasks.length === 0" class="task-advice">
          No hay tareas pendientes.
        </p>
      </div>

      <div
        class="list-column"
        v-if="filter === 'all' || filter === 'completed'"
      >
        <h2>Completadas</h2>
        <hr />

        <draggable
          v-if="!isSorted"
          tag="ul"
          :list="completedTasks"
          item-key="id"
          @end="onReorder('completed')"
        >
          <template #item="{ element: task }">
            <li>
              <TodoItem
                :task="task"
                @update-task="handleUpdate"
                @delete-task="handleDelete"
              />
            </li>
          </template>
        </draggable>

        <ul v-else>
          <li v-for="task in sortedTasksFiltered('completed')" :key="task.id">
            <TodoItem
              :task="task"
              @update-task="handleUpdate"
              @delete-task="handleDelete"
            />
          </li>
        </ul>

        <p v-if="completedTasks.length === 0" class="task-advice">
          No hay tareas completadas.
        </p>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import TodoItem from "./TodoItem.vue";
import draggable from "vuedraggable";

const todoStore = useTodoStore();
const { tasks } = storeToRefs(todoStore);

const searchText = ref("");
const filter = ref<"all" | "pending" | "completed">("all");
const isSorted = ref(false);
const manualOrder = ref<number[]>([]);

const filteredTasks = computed(() =>
  tasks.value.filter((t) =>
    t.title.toLowerCase().includes(searchText.value.toLowerCase())
  )
);

const pendingTasks = computed(() =>
  filteredTasks.value.filter((t) => !t.completed)
);

const completedTasks = computed(() =>
  filteredTasks.value.filter((t) => t.completed)
);

function sortedTasksFiltered(type: "pending" | "completed") {
  const list = type === "pending" ? pendingTasks.value : completedTasks.value;
  return [...list].sort((a, b) => a.title.localeCompare(b.title));
}

function toggleAlphabetical() {
  if (isSorted.value) {
    const reordered = manualOrder.value
      .map((id) => tasks.value.find((t) => t.id === id))
      .filter((t): t is Task => !!t);

    if (
      JSON.stringify(reordered.map((t) => t.id)) !==
      JSON.stringify(tasks.value.map((t) => t.id))
    ) {
      todoStore.setTasks(reordered);
    }

    isSorted.value = false;
  } else {
    manualOrder.value = tasks.value.map((t) => t.id);

    const sorted = [...tasks.value].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    todoStore.setTasks(sorted);
    isSorted.value = true;
  }
}

function onReorder(type: "pending" | "completed") {
  const reordered =
    type === "pending"
      ? [...pendingTasks.value, ...completedTasks.value]
      : [...pendingTasks.value, ...completedTasks.value];
  todoStore.setTasks(reordered);
}

function handleDelete(id: number) {
  todoStore.deleteTask(id);
}

function handleUpdate(payload: {
  id: number;
  title?: string;
  completed?: boolean;
}) {
  if (payload.title !== undefined)
    todoStore.updateTaskTitle(payload.id, payload.title);
  if (payload.completed !== undefined) todoStore.toggleTask(payload.id);
}

function handleCompleteAll(status: boolean) {
  todoStore.setAllCompleted(status);
}

function handleDeleteCompletedTasks() {
  todoStore.deleteCompletedTasks();
}
</script>

<style scoped>
.task-search-input {
  display: flex;
  justify-content: center;
}

.task-search-input input {
  flex: 1;
  padding: 0.5rem;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
}

.control-button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.control-button-alf {
  padding: 0.5rem 1rem;
  width: 10rem;
  height: 3rem;
  font-size: 0.9rem;
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: rgb(147, 144, 144);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.control-button-delete {
  padding: 0.5rem 1rem;
  width: 10rem;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.control-button-delete:active {
  background-color: rgb(203, 43, 43);
}

.control-button:active {
  background-color: #dbeafe;
}

button.active {
  background-color: #4caf50;
  color: white;
  width: 10rem;
}

.todo-lists {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.todo-lists .task-advice {
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  color: #666;
}

.list-column {
  background-color: #f0f4f8;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 33vw;
  min-width: 16rem;
}

@media (max-width: 720px) {
  .todo-lists {
    flex-direction: column;
  }

  .list-column {
    width: 90%;
  }
}
</style>
