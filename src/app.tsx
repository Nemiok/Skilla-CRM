// fonts
import './assets/fonts/SF-Pro-Display-Medium.woff2'
import './assets/fonts/SF-Pro-Display-Regular.woff2'
import './assets/fonts/SF-Pro-Display-Semibold.woff2'

// styles 
import './assets/styles/reset.css'
import './assets/styles/normalize.css'
import './assets/styles/font-declaration.css'
import './assets/styles/color-variables.css'
import './assets/styles/custom.css'

// other
import { RouterProvider } from 'react-router-dom'
import router from './router'


export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
