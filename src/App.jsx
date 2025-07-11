import { RouterProvider } from 'react-router';
import routes from './routes.jsx';
import PostProvider from './contexts/PostContext.jsx';

function App() {
  return (
    <PostProvider>
      <RouterProvider router={routes}></RouterProvider>
    </PostProvider>
  );
}

export default App;
