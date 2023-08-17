import logo from '../../assets/logo.png';
import { MainPerfil } from './styles';
import Publicacao from '../../components/Publicacao';
import { Link } from 'react-router-dom';
import { PubContext } from '../../context/PubContext';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

export function Perfil(){
    const { userLogado } = useContext(UserContext);
    const { pubData } = useContext(PubContext);
    
    return (
        <MainPerfil>
            <Link className='link' to='/'>
                <img className='logo' src={logo} alt="logo da Y" />
            </Link>

            <section className='info-perfil'>
                <span className='user'>
                    <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />
                    <span>{userLogado.name}</span>
                </span>

                <div className='info-user'>
                    <p><span>{userLogado.qtdPubs}</span> publicações</p>
                    <p><span>{userLogado.followers}</span> seguidores</p>
                </div>
            </section>

            <section className='container-pub'>
                {
                    [...pubData].reverse().map((pub) => {
                        if (pub.idUser == userLogado.id) {
                            return (
                                <Publicacao 
                                    nome={userLogado.name} 
                                    isLiked={pub.isLiked} 
                                    texto={pub.text}
                                    imgProfile={userLogado.imgUser}
                                    key={pub.idUser}
                                />
                            );
                        }
                        return null;
                    })
                }
            </section>
        </MainPerfil>
    )
}