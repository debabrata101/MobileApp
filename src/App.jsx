import { RouterProvider } from "react-router-dom"
import { router } from "./Router/route"


function App() {
  

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
