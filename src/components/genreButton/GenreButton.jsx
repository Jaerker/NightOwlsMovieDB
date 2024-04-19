import { useState } from "react";

function GenreButton({id, name, onClick}) {

    const [isActive, setIsActive] = useState(false);

  return (
    <button id={id} className={`genre__buttons ${isActive ? 'toggle-button--active' : 'toggle-button--inactive'}`} onClick={(e) => onClick(e, setIsActive)}>{name}</button>
  );
}

export default GenreButton;