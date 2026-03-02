import Navbar from "./components/Navbar/Navbar"
import LoanForm from "./components/LoanForm/LoanForm";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <LoanForm/>
      </main>
    </>
  )
}

export default App;