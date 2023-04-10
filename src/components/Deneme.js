const Deneme = ({props}) => {
    console.log('1',props)
    return (
        <div>
            <div> Burası anasayfadır.</div>
            <div>{props}</div>
        </div>
        
    )
}

export default Deneme;
 //dışarıdaki sayfalarda kullanabilmek için  export ederiz.