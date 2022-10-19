import './styleComponent.css'

export const PrimeiroComponent = (name) => {
    console.log(name)
    return (
        <div className="center">
        <div>Olá, <strong>Softex!</strong> Meu nome é: {name.name}</div>
        
        <div>Estou usando um component para criar essa mensagem!</div>
        </div>
    )
}