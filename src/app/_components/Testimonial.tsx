import { Pagination } from "../_tailwind/Pagination"

type testimonialsType = {
  name: string
  message: string
  businessLogo?: string
}

const testimonials: testimonialsType[] = [
  {
    name: "Brad",
    message: "I would highly recommend Elevation Imagery for your drone photography needs. Dane was friendly, responsive, and easy to work with. The pictures turned out great and were exactly what I needed.",
    businessLogo: "https://mma.prnewswire.com/media/649227/Century_21_Real_Estate_Logo.jpg?p=facebook"
  },
  {
    name: "Ethan",
    message: "N/A",
  }
]

export function Testimonial() {

  
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-red ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img alt="" src="https://affiliated45.c21.com/images/eco/Century21-nav-logo.png" className="mx-auto w-1/6 h-1/2 h-12" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
              “I would highly recommend Elevation Imagery for your drone photography needs. Dane was friendly, responsive, and easy to work with. The pictures turned out great and were exactly what I needed.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://www.century21.com/c21/remote-media/affiliate-1x1-155w/b31/6e0/d6/aHR0cHM6Ly9jMjEuYXp1cmVlZGdlLm5ldC8xMjI4aTAveWF0OTg5ZjU2M2U5bXlqeGYwNGUxY2ptYzdp.jpg"
                className="mx-auto h-10 w-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Brad Kenealy</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Realitor for Century 21 Real Estate</div>
              </div>
            </figcaption>
          </figure>
          {/*
          <Pagination />      
          */}
        </div>
      </section>
    )
  }
  