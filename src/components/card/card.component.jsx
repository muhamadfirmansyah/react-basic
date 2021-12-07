import './card.style.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/1?size=180x180&set=set${props.monster.id}`} />
        <h1>{ props.monster.name }</h1>
        <p>{ props.monster.email }</p>
    </div>
)