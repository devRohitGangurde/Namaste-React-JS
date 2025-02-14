const Footer = () => {
  return (
    <footer className="">
      <hr />
      <div className="flex mx-44 justify-between">
        <div className="mt-12">
          <img
            src={
              "https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            }
            className="w-48 mb-10"
          />
           <div className="mt-10">© 2025</div>
          <span className="mt-10"> Powered by Rohit food Limited</span>
        </div>
        <div className="flex justify-between">
          <ul className="w-[150] mt-8 text-lg font-medium text-gray-500">
            <li className="mt-5 font-bold text-black">Company</li>
            <li className="mt-2">About Us</li>
            <li className="mt-2">corporate</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Team</li>
            <li className="mt-2">Swiggy One</li>
            <li className="mt-2">Swiggy Instamart</li>
            <li className="mt-2">Swiggy Dineout</li>
            <li className="mt-2">Swiggy Genie</li>
          </ul>
       
          <ul className="w-[150] mt-8 text-lg font-medium text-gray-500">
            <li className="mt-5 font-bold text-black">Contact us</li>
            <li className="mt-2">Help</li>
            <li className="mt-2">support</li>
            <li className="mt-2">Partner with us</li>
            <li className="mt-2">Ride with us</li>
          </ul>
          <ul className="w-[150] mt-8 text-lg font-medium text-gray-500">
            <li className="mt-5 font-bold text-black">Available in :</li>
            <li className="mt-2">Pune</li>
            <li className="mt-2">Mumbai</li>
            <li className="mt-2">Pune</li>
            <li className="mt-2">Nashik</li>
          </ul>
          <ul className="w-[130] mt-8 text-lg font-medium text-gray-500">
            <li className="mt-5 font-bold text-black">Life at Swiggy</li>
            <li className="mt-2">Swiggy News</li>
          </ul>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
