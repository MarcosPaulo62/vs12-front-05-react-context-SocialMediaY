import logo from '../../assets/logo.png';
import { MainPerfil } from './styles';
import Publicacao from '../../components/Publicacao';
import { Link } from 'react-router-dom';

export function Perfil(){
    return (
        <MainPerfil>
            <Link className='link' to='/'>
                <img className='logo' src={logo} alt="logo da Y" />
            </Link>

            <section className='info-perfil'>
                <span className='user'>
                    <img src="https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg" alt="imagem do perfil do usuário" />
                    <span>Ana Banana</span>
                </span>

                <div className='info-user'>
                    <p><span>9</span> publicações</p>
                    <p><span>700</span> seguidores</p>
                </div>
            </section>

            <section className='container-pub'>
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
        </MainPerfil>
    )
}