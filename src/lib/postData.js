export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await res.json();

  return posts;
}

export async function getPost(params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params}`,
  );
  const post = await res.json();
  return post;
}

export async function getUser(params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params}`,
  );
  const user = await res.json();

  return user;
}
