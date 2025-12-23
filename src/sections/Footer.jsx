import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              className="icon"
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialImg.imgPath} alt={socialImg.name + " icon"} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
