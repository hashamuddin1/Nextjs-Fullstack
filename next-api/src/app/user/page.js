import Link from "next/link";

async function getAllUsers() {
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const userData = await getAllUsers();
  console.log(userData, "userData");
  return (
    <>
      <h1>User</h1>
      {userData.map((item) => (
        <div>
          <Link href={`user/${item.id}`}> {item.name}</Link>
        </div>
      ))}
    </>
  );
}
