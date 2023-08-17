import { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { MainPreferencias } from './styles';
import { Link } from 'react-router-dom';
import { Sun, Moon } from '@phosphor-icons/react';
import { UserContext } from '../../context/UserContext';

interface PreferenciasProps{
    onToggleTheme: (tema: string) => void
}

export function Preferencias({ onToggleTheme }: PreferenciasProps){
    const { userLogado } = useContext(UserContext);

    const [tema, setTema] = useState<string>('dark');

    function handleTheme(){
        if (tema === 'light'){
            setTema('dark');
        } else {
            setTema('light');
        }
    }

    return (
        <MainPreferencias>
            <Link className='link' to='/'>
                <img className='logo' src={logo} alt="logo da Y" />
            </Link>

            <section className='handle-theme'>
                <span className='user'>
                    <img src={userLogado.imgUser} alt="imagem do perfil do usuário" />
                    <span>{userLogado.name}</span>
                </span>
                
                <button onClick={() => {
                    onToggleTheme(tema);
                    handleTheme();
                }}>
                    {tema === 'light' 
                    ? <Sun weight="fill" />
                    : <Moon weight="fill" />}
                    Alterar Tema
                </button>
            </section>
        </MainPreferencias>
    )
}