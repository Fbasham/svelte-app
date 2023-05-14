<script>
  let count = 0;
  let values = [];
  $: values = [...values, count];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Count: {count}</p>
<p>All Click Values: {JSON.stringify(values)}</p>
<button on:click={() => count++}>increment count</button>
<button on:click={() => count--}>decrement count</button>
