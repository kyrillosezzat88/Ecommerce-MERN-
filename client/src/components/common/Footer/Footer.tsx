const Footer = () => {
  return (
    <>
      <div className=" bg-gray-100 py-12 mt-12 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Anvogue</h2>
              <ul className="flex flex-col gap-2">
                <li>Email: anvogue.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main St, Anytown, USA</li>
                <li>Hours: 9am - 6pm, Monday - Friday</li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Community</h2>
              <ul className="flex flex-col gap-2">
                <li>Blog</li>
                <li>Forum</li>
                <li>Help & Support</li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Legal</h2>
              <ul className="flex flex-col gap-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Connect</h2>
              <ul className="flex flex-col gap-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container">
          <p className="text-center text-sm">
            &copy; 2025 Anvogue. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
