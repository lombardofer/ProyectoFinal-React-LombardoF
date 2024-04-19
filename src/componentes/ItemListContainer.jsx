import bienvenida from '../assets/img/welcome.svg'

export default function ItemListContainer ({greeting}) {
    return (
        <>
            <section class="container">
                <div class="px-4 py-1 my-5 text-center">
                    <h1 class="text-primary active">{greeting}</h1>
                    <img src={bienvenida} alt="" width="40%"/>
                </div>
            </section>
        </>
    )
}