import React from 'react'
import { Conteiner } from './styles'



interface IMessageBox {
    title:string;
    description:string;
    footerText:string;
    icon:string;
}

const MessageBox: React.FC<IMessageBox> = ({title,description,footerText,icon}) => {

    return (
        <Conteiner>
            <header>
                <h1>
                   {title}
                    <img src={icon} alt="Icone"/>
                </h1>
                <p>{description}</p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </Conteiner>
    )
}

export default MessageBox