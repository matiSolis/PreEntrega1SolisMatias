
const Footer = () => {
    const estiloLista = {
        color: 'deepskyblue',
        margin: 25,
        padding: 10
    }
    
    return (
        <>
            <div className="flex flex-row justify-center">
                <div style={estiloLista} >Facebook</div>
                <div style={estiloLista} >Instagram</div>
                <div style={estiloLista} >Twitter</div>
            </div>
        </>
    )
}

export default Footer