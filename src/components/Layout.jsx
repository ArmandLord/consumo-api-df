export default function Layout({ personajes, children }) {
  //console.log(personajes); // todas las comidas
  return (
    <div className=" bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            API RICK & MORTY
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            placeat esse dolor, provident laboriosam itaque.
          </p>
        </div>
        <div className="mt-5">{children}</div>
        <ul
          role="list"
          className=" mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {personajes?.map((personaje) => (
            <li key={personaje.idMeal}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={personaje.strMealThumb}
                alt={`personaje de api rick y morty: ${personaje.strMeal}`}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {personaje.strMeal}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {personaje.strArea}
              </p>
            </li>
          ))}
          {}
        </ul>
      </div>
    </div>
  );
}
