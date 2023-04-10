import Anasayfa from "./components/Anasayfa";
import YeniSayfa from "./components/YeniSayfa";

function App() {

  const deneme = "props mantigi";
  const arr = [
    {name : 'array1', id:0},
    {name : 'array2', id:1},
    {name : 'array3', id:2},    
  ]
  console.log(arr,"arr");

  const clickFunc = () =>{
    console.log("butona tıklandı")
  }
  return (
    <div className="App">
    <Anasayfa props = {deneme} />
    <YeniSayfa />
    {arr.map((dizi,i)=> ( //dizide istenen name değerini ekrana bastırmak için map fonksiyonu kullandık.
      <div key= {i}>{dizi.name}</div> //key = {i} yerine dizi içinde verilen id yi key = {dizi.id} şeklinde kullanabilirdik.
    )
    )}
    <button onClick={clickFunc}>Tıkla</button>
    </div>
  );
}

export default App;
