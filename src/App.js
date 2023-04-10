import Anasayfa from "./components/Anasayfa";
import YeniSayfa from "./components/YeniSayfa";

function App() {
  const deneme = "props mantigi";

  const clickFunc = () =>{
    console.log("butona tıklandı")
  }
  return (
    <div className="App">
    <Anasayfa props = {deneme} />
    <YeniSayfa />

    <button onClick={clickFunc}>Tıkla</button>
    </div>
  );
}

export default App;
