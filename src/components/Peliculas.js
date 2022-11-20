import '../styles/Peliculas.css';
import Pelis from './peliculas/Pelis.js';

function Peliculas() {
    return (
        <div className='Peliculas'>
            <div className='contenedor-principal'>
                <h1>Estas son las Películas en Estreno:</h1>
                <Pelis
                    nombre='El Rey León'
                    link='https://www.youtube.com/watch?v=h-As2lUk6IA'
                    imagen='1'
                    descripcion='El rey león es la historia de Simba, un joven león destinado a convertirse en rey de la sabana africana. Su feliz infancia llega a su fin cuando su malvado tío Scar logra matar al rey para quedarse con el trono y obliga a Simba a huir a tierras lejanas.' 
                    />
                <Pelis
                    nombre='Frozen'
                    link='https://www.youtube.com/watch?v=QTvcYow0Z5U'
                    imagen='2'
                    descripcion='En Frozen se nos cuentan las aventuras de una preciosa princesa Anna, que sale en busca de su hermana Elsa, ya reina, quien se ha alejado para vivir en majestuosa soledad en un palacio de hielo, situado allende las montañas del reino de Arendelle.' 
                    />
                <Pelis
                    nombre='Buscando a Nemo'
                    link='https://www.youtube.com/watch?v=ba4TwyaNhSQ'
                    imagen='3'
                    descripcion='Nemo es el protagonista de la película El cual tenía una aleta atrófica y por eso una era más pequeña que la otra. La historia se basa en su padre llamado Marlin un pez payaso, quien va en busca de su pequeño hijo Nemo junto a una pez cirujano llamada Dory que tiene problemas de memoria.' 
                    />
                <Pelis
                    nombre='Enredados'
                    link='https://www.youtube.com/watch?v=ee3XOCH-pok'
                    imagen='4'
                    descripcion='La película cuenta la historia de la perdida princesa Rapunzel, que anhela dejar su torre aislada por una aventura. Contra los deseos de su madrastra, acepta la ayuda de un apuesto intruso, Flynn Rider, para sacarla al mundo que nunca ha visto.' 
                    />
                <Pelis
                    nombre='Aladdin'
                    link='https://www.youtube.com/watch?v=f2NQvVjf0ZY&t=13s'
                    imagen='5'
                    descripcion='Aladdín es un joven pobre que, junto con su mono Abú, se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir. Él y Abú viven en una guarida, una casa abandonada y medio derruida en el bazar de la ciudad donde tienen una amplia vista al palacio.' 
                    />
            </div>
        </div>
    );
}

export default Peliculas;