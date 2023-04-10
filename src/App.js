import { useState } from "react";
import Anasayfa from "./components/Anasayfa";
import YeniSayfa from "./components/YeniSayfa";

function App() {
  const [count, setCount]= useState(0); // burada count 0 ile başlıyor diyoruz. setCount da count u güncelleyeceğimiz fonksiyondur. 
  // count a string veya obje de verebiliriz
  const deneme = "props mantigi";
  const arr = [
    {name : 'array1', id:0},
    {name : 'array2', id:1},
    {name : 'array3', id:2},    
  ]
  console.log(arr,"arr");

  const clickFunc = () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
    <Anasayfa props = {deneme} />
    <YeniSayfa />
    {count}
    {arr.map((dizi,i)=> ( //dizide istenen name değerini ekrana bastırmak için map fonksiyonu kullandık.
      <div key= {i}>{dizi.name}</div> //key = {i} yerine dizi içinde verilen id yi key = {dizi.id} şeklinde kullanabilirdik.
    )
    )}
    <button onClick={clickFunc}>Tıkla</button>
    </div>
  );
}

export default App;
