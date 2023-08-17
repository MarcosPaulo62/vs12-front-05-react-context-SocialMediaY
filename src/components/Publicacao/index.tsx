import { Pub } from "./styles"
import { Heart } from '@phosphor-icons/react';
import { useState } from 'react';

interface PublicacaoProps{
    imgProfile: string,
    nome: string,
    texto: string,
    isLiked: Boolean
}

export default function Publicacao({ imgProfile, nome, texto, isLiked }: PublicacaoProps){
    const [liked, setLiked] = useState<Boolean>(isLiked);

    function handleLiked(){
        setLiked(!liked);
    }

    return(
        <Pub>
            <div>
                <span>
                    <img src={imgProfile} alt={`imagem do perfil do usuário ${nome}`} />
                    <span>{nome}</span>
                </span>
                {liked 
                ? <Heart size={48} weight="fill" color="red" onClick={handleLiked}/>
                : <Heart size={48} weight="light" onClick={handleLiked}/>
                }
                
            </div>
            <p>{texto}</p>
        </Pub>
    )
}