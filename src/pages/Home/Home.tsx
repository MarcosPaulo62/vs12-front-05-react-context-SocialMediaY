import { UserCircleGear } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';
import { MainHome } from './styles';
import Publicacao from '../../components/Publicacao';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import imgUser from '../../assets/AnaBanana.png'

export function Home(){    
    const { userData, userLogado } = useContext(UserContext);
    console.log(userData)

    const usuarioLogado = {
        id: 1,
        imgUser: imgUser,
        name: 'Ana Banana',
        qtsPubs: 9,
        followers: 700
    }

    return (
        <MainHome>
            <aside>
                <Link className='link' to='/'>
                    <img className='logo' src={logo} alt="logo da Y" />
                </Link>                

                <Link className='link perfil' to='/perfil'>
                    <img src={usuarioLogado.imgUser} alt="imagem do perfil do usuário" />
                    <span>Perfil</span>
                </Link>

                <Link className='link preferencias' to='/preferencias'>
                    <UserCircleGear size={72} weight="light" />
                    <span>Preferências</span>
                </Link>
            </aside>

            <section className='container-pub'>
                <div className='nova-pub'>
                    <img src={usuarioLogado.imgUser} alt="imagem do perfil do usuário" />
                    
                    <div>
                        <textarea cols={30} rows={4} placeholder='Escrever nova publicação...'></textarea>
                        <button>Publicar</button>
                    </div>
                </div>

                <Publicacao 
                    nome='Ana Banana' 
                    isLiked={true} 
                    texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    imgProfile='https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg'
                />

                <Publicacao 
                    nome='Ana Banana' 
                    isLiked={true} 
                    texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    imgProfile='https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg'
                />

                <Publicacao 
                    nome='Ana Banana' 
                    isLiked={true} 
                    texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    imgProfile='https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg'
                />
            </section>
        </MainHome>
    )
}