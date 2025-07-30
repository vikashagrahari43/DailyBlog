import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import Home from "./pages/Home.jsx"
import ProtectedAuth from './Component/ProtectedAuth.jsx'
import Login from './Component/Login.jsx'
import SignUp from './Component/SignUp.jsx'
import AddPost from "./pages/AddPost.jsx"
import AllPost from "./pages/AllPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import { createRoot } from 'react-dom/client'
import Post from "./pages/Post.jsx"

const router = createBrowserRouter([
 {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : < Home />
      },
      {
        path : "/login",
        element : (<ProtectedAuth authentication = {false}>
                      < Login />
                  </ProtectedAuth>),
      },
      {
        path : "/signup",
        element : 
       ( <ProtectedAuth authentication ={false}>
          < SignUp />
        </ProtectedAuth>),
      },
       {
            path: "/all-posts",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <AllPost />
                </ProtectedAuth>
            ),
        },
        {
            path: "/add-post",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <AddPost />
                </ProtectedAuth>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <ProtectedAuth authentication>
                    {" "}
                    <EditPost />
                </ProtectedAuth>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider >
  </StrictMode>,
  
)
