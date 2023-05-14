<script>
  import { page } from "$app/stores";
</script>

<h1>Error</h1>
<p>Status: {$page.status}</p>
<p>Message: {$page.error.message}</p>
