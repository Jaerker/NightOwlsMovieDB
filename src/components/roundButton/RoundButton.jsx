import './round-button.css';

function RoundButton({className = '', children}) {
  return (
    <section className={className} >
        {children}
    </section>
  );
}

export default RoundButton;