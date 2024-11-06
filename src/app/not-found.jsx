import Link from 'next/link';

function NotFount() {
  return (
    <div>
      <h2>Oops... Not Found Page</h2>
      <p>Sorry,the page you are looking for does not exist.</p>
      <Link href="/">Return Home Page</Link>
    </div>
  );
}

export default NotFount;
