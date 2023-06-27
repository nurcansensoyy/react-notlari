import YeniSayfa from "./components/YeniSayfa";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef.js"
import Deneme from "./components/Deneme";
import UseMemo from "./components/useMemo";



function App() {
  const deneme = "props mantigi";
  const arr = [
    {name : 'array1', id:0},
    {name : 'array2', id:1},
    {name : 'array3', id:2},    
  ]
  console.log(arr,"arr");

  return (
    <div className="App">
    <Deneme props={deneme}/>
    <YeniSayfa />
    <UseEffect/>
    <UseState/>
    <UseRef />
    <UseMemo/>
    
  
    {arr.map((dizi,i)=> ( //dizide istenen name değerini ekrana bastırmak için map fonksiyonu kullandık.
      <div key= {i}>{dizi.name}</div> //key = {i} yerine dizi içinde verilen id yi key = {dizi.id} şeklinde kullanabilirdik.
    )
    )}
    </div>
  );
}

export default App;
