import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //initialALGO es para inicial el estado del componente. El estado inicial SOLO se inicia una vez, no se reinicializa cuando la prop cambia
  //1ra posicion Valor del estado , 2da forma de actualizarlo
  const handleClick = () => {
    setIsFollowing(!isFollowing); //si era true que pase a false y sino al reves
  };

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar prueba"
          src={`https://unavatar.io/${userName}`}
        />
 
        {/*Para comentar aca */}

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
