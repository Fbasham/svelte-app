export async function load({ params, parent }) {
  // console.log(await fetch("http://www.google.com"));
  // console.log(await parent());
  return { id: params.id };
}
