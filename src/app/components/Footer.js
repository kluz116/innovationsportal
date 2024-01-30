import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto  py-[1rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={
                  "https://www.financetrust.co.ug/wp-content/uploads/2020/09/cropped-ftb-logo-01-e1599758445874.png"
                }
                alt="footer_logo"
                className="w-[10rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                Finance Trust Bank Uganda Limited is regulated by Bank of Uganda
                No. A1.28. Deposits Protected by the Deposit Protection Fund up
                to Shs. 10Million
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Financetrust{" "}
                <br /> Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  Business Technology
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Services</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-lime-500"></span>

              <p className="text-[16px] hover:text-lime-500 cursor-pointer text-blue-800 font-medium hover:font-bold">
                Alternative Channels
              </p>
              <p className="text-[16px] hover:text-lime-500 cursor-pointer text-blue-800 font-medium hover:font-bold">
                Money Transfer Services
              </p>
              <p className="text-[16px] hover:text-lime-500 cursor-pointer text-blue-800 font-medium hover:font-bold">
                Utilities Collections
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-lime-500"></span>

              <p className="text-[16px]  text-blue-800 font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                8:30am - 5:00pm
              </p>
              <p className="text-[16px] text-blue-800 font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                9:00am - 4:00pm
              </p>
              <p className="text-[16px] text-blue-800 font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
