/* Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку. */
import { Navigate } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage
      <Navigate to="/" />
    </div>
  );
};

export default NotFoundPage;

// import { Link } from 'react-router-dom';

// function NotFoundPage() {
//   return (
//     <div>
//       <h1>Page Not Found</h1>
//       <Link to="/">Go to Home</Link>
//     </div>);
// }

// export default NotFoundPage;