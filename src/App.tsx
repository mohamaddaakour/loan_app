// we imported the components we created
import Navbar from "./components/Navbar/Navbar"
import LoanForm from "./components/LoanForm/LoanForm";


// the App.tsx and the component in it (App component in our case) is the entry point for
// our application
export default function App() {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <LoanForm/>
      </main>
    </>
  );
}