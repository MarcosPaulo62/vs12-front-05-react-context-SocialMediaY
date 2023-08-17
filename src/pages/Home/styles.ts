import { styled } from "styled-components";

export const MainHome = styled.main`
    padding: 4.31rem 4rem;
    display: flex;
    gap: 4rem;

    aside{
        background-color: ${(props) => props.theme.primaryColor};
        width: 500px;
        height: 80vh;
        position: sticky;
        top: 4.31rem;
        border-radius: 10px;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        padding: 2.5rem 2rem;
        gap: 2.5rem;

        .logo{
            width: 100px;
            margin-bottom: .5rem;
            margin: auto;
        }

        .link{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            color: ${(props) => props.theme.fontColor};
            font-size: 1.3rem;
        }

        .perfil{
            img{
                width: 75px;
                height: 75px;
                border-radius: 50%;
            }
        }      
    }

    .container-pub{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .nova-pub{
            background-color: ${(props) => props.theme.primaryColor};
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            padding: 2.5rem 2.25rem;
            display: flex;
            gap: 2.25rem;

            img{
                width: 75px;
                height: 75px;
                border-radius: 50%;
            }

            div{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1.25rem;

                textarea{
                    padding: 1.25rem;
                    border-radius: 4px;
                    background-color: ${(props) => props.theme.primaryColor};
                    border: 2px solid ${(props) => props.theme.fontColor};
                    color: ${(props) => props.theme.fontColor};
                    font-size: 1.3rem;
                }

                button{
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    background: #058ED9;
                    font-size: 1.3rem;
                    color: #FFF;
                    border: none;
                    cursor: pointer;
                    width: 150px;
                    align-self: flex-end;
                }
            }
        }
    }  
`