<script>
  export let data;
</script>

<h1>Todos</h1>
{#each data.todos as todo (todo.id)}
  <div>
    <h2>{todo.title}</h2>
    <p>completed: {todo.completed}</p>
  </div>
{/each}
