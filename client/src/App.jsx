import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookTable from "./pages/BookTable";
import AdminDashboard from "./pages/AdminDashboard";
import MyReservations from "./pages/MyReservations";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookTable />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </BrowserRouter>
  );
}
