export default function ButtonComponent({ color, texto, reaccionarAClick }) {
    const estilo = {
        backgroundColor: color,
    };

    return (
        <>
            <button onClick={reaccionarAClick} style={estilo}>
                {texto}
            </button> 
        </>
    )
} 