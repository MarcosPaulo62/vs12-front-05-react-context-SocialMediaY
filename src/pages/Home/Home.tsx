import { UserCircleGear } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';
import { MainHome } from './styles';
import Publicacao from '../../components/Publicacao';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { PubContext } from '../../context/PubContext';

export function Home(){    
    const { userData, userLogado } = useContext(UserContext);
    const { pubData } = useContext(PubContext);

    return (
        <MainHome>
            <aside>
                <Link className='link' to='/'>
                    <img className='logo' src={logo} alt="logo da Y" />
                </Link>                

                <Link className='link perfil' to='/perfil'>
                    <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />
                    <span>Perfil</span>
                </Link>

                <Link className='link preferencias' to='/preferencias'>
                    <UserCircleGear size={72} weight="light" />
                    <span>Preferências</span>
                </Link>
            </aside>

            <section className='container-pub'>
                <div className='nova-pub'>
                    <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />
                    
                    <div>
                        <textarea cols={30} rows={4} placeholder='Escrever nova publicação...'></textarea>
                        <button>Publicar</button>
                    </div>
                </div>

                {
                    [...pubData].reverse().map((pub) => {

                        const userQueFezAPublicacao = userData.find(user => user.id === pub.idUser);

                        if (userQueFezAPublicacao) {
                            return (
                                <Publicacao 
                                    nome={userQueFezAPublicacao.name} 
                                    isLiked={pub.isLiked} 
                                    texto={pub.text}
                                    imgProfile={userQueFezAPublicacao.imgUser}
                                    key={pub.idUser}
                                />
                            );
                        }

                        return null;
                    })
                }
            </section>
        </MainHome>
    )
}