export default function Card(props){
    return(
        <div class="phone">
        <div class="phone-content">
            <img src={props.img} alt="" width={'100%'} height={200}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
    )
}