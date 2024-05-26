import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
         <img className="w-24 h-24 rounded-full" src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149697771.jpg?w=826&t=st=1716724270~exp=1716724870~hmac=925e6501e87dfc198100f7de8dbdcf18b9948c4ffdc78b4d0ecc182f76c64046" alt="" />
          <p>
            Mobile Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com">
             <CiTwitter className="w-9 h-9 rounded-full bg-sky-400"/>
            </a>
            <a href="https://facebook.com">
            <CiFacebook className="w-9 h-9 bg-blue-500 rounded-full" />
            </a>
            <a href="https://youtube.com">
              <CiYoutube  className="w-9 h-9 rounded-full bg-red-600"/>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
