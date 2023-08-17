import { UserCircleGear } from "@phosphor-icons/react";
import logo from "../../assets/logo.png";
import { MainHome } from "./styles";
import Publicacao from "../../components/Publicacao";
import { Link } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { PubContext } from "../../context/PubContext";

export function Home() {
  const { userData, userLogado } = useContext(UserContext);
  const { pubData, addPub } = useContext(PubContext);

  const [textNewPub, setTextNewPub] = useState<string>("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextNewPub(event.target.value);
  };

  const handlePublish = () => {
    if(textNewPub != ''){
        addPub(userLogado.id, textNewPub);
    }    
  }

  return (
    <MainHome>
      <aside>
        <Link className="link" to="/">
          <img className="logo" src={logo} alt="logo da Y" />
        </Link>

        <Link className="link perfil" to="/perfil">
          <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />
          <span>Perfil</span>
        </Link>

        <Link className="link preferencias" to="/preferencias">
          <UserCircleGear size={72} weight="light" />
          <span>Preferências</span>
        </Link>
      </aside>

      <section className="container-pub">
        <div className="nova-pub">
          <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />

          <div>
            <textarea
              value={textNewPub}
              onChange={handleTextareaChange}
              cols={30}
              rows={4}
              placeholder="Escrever nova publicação..."
            ></textarea>
            <button onClick={handlePublish} className={textNewPub === '' ? 'disabled' : ''}>Publicar</button>
          </div>
        </div>

        {pubData.map((pub, index) => {
          const userQueFezAPublicacao = userData.find(
            (user) => user.id === pub.idUser
          );

          if (userQueFezAPublicacao) {
            return (
              <Publicacao
                nome={userQueFezAPublicacao.name}
                isLiked={pub.isLiked}
                texto={pub.text}
                imgProfile={userQueFezAPublicacao.imgUser}
                key={index}
              />
            );
          }

          return null;
        })}
      </section>
    </MainHome>
  );
}
