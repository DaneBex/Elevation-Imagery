import { getImage } from "../aws/GetObject";

export async function Footer() {
  const igImage = await getImage("instagram.png");
  return (
    <footer className="bg-dblue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="b mb-6 text-center md:mb-0 md:text-left">
            <p className="text-base leading-6">Connect with us:</p>
            <div className="mt-4 flex justify-center space-x-6 md:justify-start">
              {/* <a href="#" className="text-blue hover:text-red transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                Icon example
                <i className="fab fa-facebook-f"></i>
              </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/ecelevation_imagery/?hl=en"
                className="flex flex-row text-blue transition-colors duration-300 hover:text-red"
              >
                <img src={igImage} className="w-3" />
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
              © {new Date().getFullYear()} Elevation Imagery. All rights
              reserved.
            </p>
            <p className="mt-2 text-sm leading-5 text-blue">
              Designed by Elevation Imagery Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
