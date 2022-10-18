import '../styles/news.css'

function HomePage() {


    return(
        <>
        <br /><br /><br /><br /><br /><br /><br />
        <h1 className="titles">Bienevenido a tu sitio de noticias!</h1>

        <div className='parrafo inicial'>
        <p className="texto-inical">Aqui poodras leer sobre alguna de las ultimas noticias que han pasado en el pais. Para ver alguna de las noticias, asegurate de ejecutar
            el comando node bin/News.seed.js para poder cargar las noticias seleccionadas en el seed file</p>
            </div>
        </>
    )
}


export default HomePage;