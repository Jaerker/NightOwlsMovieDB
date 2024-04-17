import './card-container.css';

function CardContainer({children}) {
  return (
    <article className='card-container'>
        {children}
    </article>
  );
}

export default CardContainer;