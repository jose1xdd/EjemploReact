import { Link } from "react-router-dom"

const Test = ()=>{ 
    return<>
    <div className="container text-center">
        <h1>Pokemon</h1>
    </div>
    <div className="d-flex container">
        <div className="">
            <Link to="/"><h2>inicio</h2></Link>
        </div>
        <div className="mx-5">
            <Link to="/app"><h2>app</h2></Link>
        </div>
    </div>
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pokémon: Criaturas del Mundo Pokémon</h5>
          <p className="card-text">
            Los Pokémon son criaturas que habitan en el mundo Pokémon. Vienen en diversas formas,
            tamaños y tipos. Los entrenadores capturan y entrenan Pokémon para que luchen entre sí por diversión.
          </p>
          <p className="card-text">
            Cada Pokémon pertenece a un tipo específico, como Agua, Fuego, Planta, Eléctrico, etc.
            Estos tipos determinan sus fortalezas y debilidades en las batallas.
          </p>
          <p className="card-text">
            Los entrenadores Pokémon viajan por el mundo, encuentran Pokémon salvajes, luchan contra
            otros entrenadores y desafían a los Gimnasios Pokémon para ganar medallas.
          </p>
          <p className="card-text">
            El objetivo de muchos entrenadores Pokémon es convertirse en un Maestro Pokémon capturando
            y entrenando un equipo diverso de Pokémon y derrotando a los Cuatro Fantásticos.
          </p>
        </div>
      </div>
    </div>
    </> 
}
export default Test