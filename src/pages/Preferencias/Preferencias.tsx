import { useState } from 'react';
import logo from '../../assets/logo.png';
import { MainPreferencias } from './styles';
import { Link } from 'react-router-dom';
import { Sun, Moon } from '@phosphor-icons/react';

interface PreferenciasProps{
    onToggleTheme: (tema: string) => void
}

export function Preferencias({ onToggleTheme }: PreferenciasProps){
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
                    <img src="https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg" alt="imagem do perfil do usuário" />
                    <span>Ana Banana</span>
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