import { getImage } from "../aws/GetObject"

export async function Header() {

  const image = await getImage("DJI_20240623200642_0022_D copy.jpeg")

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={image}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="flex items-center gap-4 lg:flex-row flex-col justify-around mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Capturing New Perspectives From Above</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Discover the world from an extraordinary angle with our high-quality aerial photography services.
          </p>
        </div>
        <div>
            <button className="transition ease-out duration-500 bg-dblue rounded-md hover:bg-blue text-white p-4">Contact us Now!</button>
        </div>
      </div>
    </div>
  )
}
