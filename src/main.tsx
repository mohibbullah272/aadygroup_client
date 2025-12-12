import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router'
import AuthProvider from './auth/AuthProvider'
import { Bounce, ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
<RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
  <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick={true}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Bounce}
  />
    </AuthProvider>
 
  </StrictMode>,
)
