import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top section: brand + nav */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">GetOnClouds</h3>
            <p className="mt-4 text-sm text-gray-400">
              Secure and reliable file sharing platform. Upload, manage, and share your content from anywhere.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section: copyright + social */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GetOnClouds. All rights reserved.
          </p>

          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
