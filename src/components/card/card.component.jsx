import './card.style.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?size=180x180&set=set2`} />
        <h1>{ props.monster.name }</h1>
        <p>{ props.monster.email }</p>
    </div>
)