import { Link, useRouteError } from 'react-router';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen text-2xl gap-3">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="my-6">
          <i className="text-red-600">{error.statusText || error.message}</i>
        </p>
        <Link className="border border-gray-200 p-1 my-6" to={'/'}>
          Go back to the home page
        </Link>
      </div>
    </>
  );
}
export default ErrorPage;
