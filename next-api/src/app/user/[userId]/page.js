async function getUser(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const userData = await getUser(params.userId);
  console.log(userData, "userData");
  return (
    <>
      <h1>User Detail</h1>
      <div>Id: {userData.id}</div>
      <div>Name: {userData.name}</div>
      <div>Email Address: {userData.email}</div>
    </>
  );
}
