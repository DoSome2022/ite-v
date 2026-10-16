import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RequireAuth from "@/components/RequireAuth";
import AdminStudentPage from "./AdminStudentPage";

export const metadata = { title: "學生管理｜Admin" };

export default function AdminStudents() {
  return (
    <>
      <Nav />
      <RequireAuth allowedRole="admin">
        <AdminStudentPage />
      </RequireAuth>
      <Footer />
    </>
  );
}
