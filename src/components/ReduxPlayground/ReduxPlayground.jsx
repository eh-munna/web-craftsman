import Counter from './Counter';

export default function ReduxPlayground() {
  return (
    <>
      <h1 className="text-3xl font-bold my-4 text-center">
        Playing with Redux Toys
      </h1>

      <div className="flex flex-col gap-6">
        <Counter />
      </div>
    </>
  );
}
