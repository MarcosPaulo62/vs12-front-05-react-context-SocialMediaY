import { styled } from "styled-components";

export const MainPerfil = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;

    .logo{
        width: 100px;
    }

    .info-perfil{
        background-color: ${(props) => props.theme.primaryColor};
        width: 600px;
        border-radius: 10px;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        padding: 4rem;
        gap: 3rem;

        .user{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            color: ${(props) => props.theme.fontColor};
            font-size: 1.3rem;

            img{
                width: 75px;
                height: 75px;
                border-radius: 50%;
            }
        }
        
        .info-user{
            display: flex;
            justify-content: center;
            gap: 2.5rem;
            font-size: 1.3rem;
            color: ${(props) => props.theme.fontColor};

            span{
                font-weight: 700;
            }
        }
    }

    .container-pub{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }  
`