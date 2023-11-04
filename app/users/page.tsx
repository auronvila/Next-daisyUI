import Link from 'next/link';

interface User {
  id: number,
  name: string,
  email: string,
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 1 } });
  const data = await res.json();

  return (
    <>
      <h1 style={{ fontSize: 30, textAlign: 'center', margin: 17 }}>Users</h1>
      <div style={{ textAlign: 'center' }}>
        <table className="table table-zebra table-border">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item: User) => <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>)}
          </tbody>
        </table>
      </div>
      <div className={'flex flex-col items-center mt-4'}>
        <div className="radial-progress" style={{ '--value': '70', '--size': '12rem', '--thickness': '2rem' }}>70%</div>
          <Link className={'bg-amber-400 p-4 rounded-2xl mt-4'} href={'/'}>Click to go back</Link>
      </div>
    </>
  )
}