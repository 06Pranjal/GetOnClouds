import { pricingPlans } from "../../assets/data";

const CTASection = () => {
  return (
    <section className="bg-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
          Start your free trial today and see how GetOnClouds can help your team work smarter.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-md bg-white text-purple-600 font-semibold shadow hover:shadow-lg hover:bg-purple-50 transition-all duration-200">
            Start Free Trial
          </button>
          <button className="px-8 py-3 rounded-md bg-purple-500 text-white font-semibold shadow hover:shadow-lg hover:bg-purple-700 transition-all duration-200">
            Contact
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
