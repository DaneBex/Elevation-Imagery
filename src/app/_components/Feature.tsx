import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon
} from "@heroicons/react/20/solid";
import { getImage } from "../aws/GetObject";

const featuresOne = [
  {
    name: "Detailed and Dynamic Visuals",
    description:
      "Our state-of-the-art drones capture high-resolution images and videos that reveal more than what meets the eye.",
    icon: SparklesIcon,
  },
  {
    name: "Affordable Rates",
    description:
      "We offer the most competitive pricing in the market, making professional drone photography accessible without compromising quality.",
    icon: CurrencyDollarIcon,
  },
];

const featuresTwo = [
  {
    name: "Custom Solutions for Every Need",
    description:
      "No project is too big or too small. Whether it’s capturing breathtaking aerial shots for real estate listings, immortalizing precious moments at weddings, or documenting expansive land developments, our drone services are tailored to fit any requirement. Whatever your need, we’re equipped to deliver exceptional results.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Rapid Deployment and Flexible Scheduling",
    description:
      "We understand the importance of timing in your projects. Our team is ready to deploy at a moment’s notice, ensuring that you get the shots you need when you need them.",
    icon: RocketLaunchIcon,
  }
];

export async function Feature() {
  const lakeImage = await getImage("DJI_20240710160556_0092_D.jpeg");
  const pabloImage = await getImage("EI-Website-Pablo.jpeg")

  return (
    <div className="overflow-hidden bg-white py-0 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue">
                Truely Elevate
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Elevate Your Projects with Professional Drone Photography
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {
                  "Unlock the full potential of your visual projects with Elevation Imagery. Our drone services provide unparalleled perspectives that ensure your project stands out."
                }
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {featuresOne.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-red"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={lakeImage}
            width={2432}
            height={1442}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-mr-4 lg:-mr-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-4 w-full lg:justify-around">
            <img
              alt="Product screenshot"
              src={pabloImage}
              width={2432}
              height={1442}
              className="w-full md:w-[38rem] lg:w-1/2 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[1/2] md:-mr-4 lg:-mr-0"
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {featuresTwo.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-red"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
