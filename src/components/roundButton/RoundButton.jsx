import './round-button.css';

function RoundButton({content = '', onClick = () => {}, className = ''}) {
  return (
    <section className={className} onClick={onClick}>
        {content}
    </section>
  );
}

export default RoundButton;