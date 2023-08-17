import { styled } from "styled-components";

export const MainPreferencias = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;

    .logo{
        width: 100px;
    }

    .handle-theme{
        background-color: ${(props) => props.theme.primaryColor};
        width: 600px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
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
        
        button{
            background-color: ${(props) => props.theme.backgroundColor};
            color: ${(props) => props.theme.fontColor};
            font-size: 1.3rem;
            padding: 1rem 2rem;
            border-radius: 4px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            width: 250px;
            margin: 1rem auto 0;
            cursor: pointer;
        }
    }
`