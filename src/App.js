import Header from "./components/Header";
import SwapForm from "./components/SwapForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <SwapForm />
      </main>
    </div>
  );
}

export default App;
