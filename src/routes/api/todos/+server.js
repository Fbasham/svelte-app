export async function GET() {
  let todos = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  return new Response(JSON.stringify(todos));
}
