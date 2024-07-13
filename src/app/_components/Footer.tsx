import { getImage } from "../aws/GetObject";


export async function Footer() {
    const igImage = await getImage("instagram.png"

    )
  return (
    <footer className="bg-dblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:justify-between md:items-center">
          <div className="text-center b md:text-left mb-6 md:mb-0">
            <p className="text-base leading-6">
              Connect with us:
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {/* <a href="#" className="text-blue hover:text-red transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                Icon example
                <i className="fab fa-facebook-f"></i>
              </a> */}
              <a target="_blank" href="https://www.instagram.com/elavation_imagery/?hl=en" className="flex flex-row text-blue hover:text-red transition-colors duration-300">
                <img src={igImage} className="w-3"/>
                <i className="fab fa-instagram"></i>
              </a>
              {/* <a href="#" className="text-blue hover:text-red transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                Icon example
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-base leading-6">
              © {new Date().getFullYear()} Elevation Imagery. All rights reserved.
            </p>
            <p className="mt-2 text-sm leading-5 text-blue">
              Designed by Elevation Imagery Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
