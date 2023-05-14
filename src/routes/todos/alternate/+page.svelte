<script>
  import { onMount } from "svelte";
  let todos = [];
  async function getTodos() {
    todos = await (await fetch("/api/todos")).json();
  }
  onMount(async () => await getTodos());
</script>

<h1>Todos</h1>
<p>this runs client side using onMount hook</p>
{#if todos.length}
  {#each todos as todo (todo.id)}
    <div>
      <h2>{todo.title}</h2>
      <p>completed: {todo.completed}</p>
    </div>
  {/each}
{/if}
