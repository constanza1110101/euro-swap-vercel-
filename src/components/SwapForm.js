import { useState } from "react";
import { ethers } from "ethers";
import { EURO_ADDRESS, KYBERSWAP_ROUTER } from "../config";

export default function SwapForm() {
  const [amount, setAmount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Instala Metamask para continuar");
    }
  };

  const handleSwap = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Implementar lógica de swap real con Kyber API o contrato directamente
    alert(`Swapeando ${amount} EURO (token no real aún)`);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl mb-2 font-bold">Swap EURO 💶</h2>
      <input
        type="number"
        placeholder="Cantidad de EURO"
        className="w-full p-2 border rounded mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={connectWallet} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
        Conectar Wallet
      </button>
      <button onClick={handleSwap} className="bg-green-600 text-white px-4 py-2 rounded">
        SWAP
      </button>
    </div>
  );
}
