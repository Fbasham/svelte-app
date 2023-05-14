export async function load(event) {
  //without event parameter the web API fetch errors??
  let todos = await (await event.fetch("/api/todos")).json();
  return {
    todos,
  };
}
