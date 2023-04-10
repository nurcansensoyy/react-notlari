const anasayfa = ({props}) => {
    console.log('1',props)
    return (
        <div>
            <div> Burası anasayfadır.</div>
            <div>{props}</div>
        </div>
        
    )
}

export default anasayfa
 //dışarıdaki sayfalarda kullanabilmek için  export ederiz.