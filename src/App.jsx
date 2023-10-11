// import axios from "axios";
import { useEffect, useState } from "react";
import { instance } from "./api/rickAPi";
import Layout from "./components/Layout";
import { Texto } from "./components/Texto";
import axios from "axios";

// const apiURL = "https://rickandmortyapi.com/api/character";

const App = () => {
  // estado
  const [data, setData] = useState([]);

  // funcion async
  const getData = async () => {
    const { data } = await instance();
    // console.log(data);
    setData(data.meals);
  };

  const searchCharacter = async (e) => {
    // axios.get('https://rickandmortyapi.com/api/character?name=rick')
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    );
    console.log(res);
    setData(res.data.meals);
  };

  // efecto
  useEffect(() => {
    getData();
  }, []);

  //

  return (
    <div>
      {/* {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
      <Layout personajes={data}>
        {/* <Texto>Este deberia ser un children</Texto> */}
        <div className="relative w-48">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            Busca un personaje
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCharacter}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Jane Smith"
          />
        </div>
      </Layout>
    </div>
  );
};

export default App;
