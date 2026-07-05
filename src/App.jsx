import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BlogListing from "./pages/BlogListing";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
          <Route element={<Layout />}>

          {/*protected page*/}

            <Route path="/bloglisting" element=
            { <ProtectedRoute>
              <BlogListing />
            </ProtectedRoute>
            } 
            />
            
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
