export interface IChildren{
    children: React.ReactNode;
}

export interface IUser{
    id: string,
    imgUser: string,
    name: string,
    qtsPubs: number,
    followers: number
}

export interface IPub{
    idUser: string,
    text: string
}