<template>
  <main>
    <h1>📝 Listas de Tareas</h1>
    <TodoForm />
    <TodoList />
  </main>
</template>

<script setup lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<style scoped>
main {
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 2rem;
}
</style>
