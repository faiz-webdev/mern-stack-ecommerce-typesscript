import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"



const Dashboard = lazy(() => import("./pages/Dashboard"))
const Products = lazy(() => import("./pages/Products"))
const Customer = lazy(() => import("./pages/Customer"))
const Transactions = lazy(() => import("./pages/Transactions"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transactions />} />

          {/* Charts */}

          {/* Apps */}

        </Routes>
      </Suspense>
    </Router>
  )
}

export default App