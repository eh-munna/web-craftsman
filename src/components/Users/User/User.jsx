export default function User({ user }) {
  const { name, email } = user;
  return (
    <>
      <div className="border border-gray-200 p-4 rounded-md">
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </>
  );
}
