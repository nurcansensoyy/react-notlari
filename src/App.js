import Anasayfa from "./components/Anasayfa";
import YeniSayfa from "./components/YeniSayfa";

function App() {
  const deneme = "props mantigi"
  return (
    <div className="App">
    <Anasayfa props = {deneme} />
    <YeniSayfa />
    </div>
  );
}

export default App;
