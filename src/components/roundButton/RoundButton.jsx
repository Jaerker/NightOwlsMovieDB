import './round-button.css';

function RoundButton({content = '', className = ''}) {
  return (
    <section className={className} >
        {content}
    </section>
  );
}

export default RoundButton;