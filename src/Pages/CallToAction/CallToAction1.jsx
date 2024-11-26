// Subscribe Form Component
const SubscribeForm = () => (
    <form>
      <div className="rounded overflow-hidden">
        {/* Email Input and Subscribe Button */}
        <div className="flex flex-wrap justify-between rounded">
          <input
            type="email"
            className="min-h-[48px] leading-6 border-none bg-gray-100 bg-opacity-100 dark:bg-gray-600 dark:bg-opacity-10 grow text-black focus:outline-none placeholder:text-gray-900 dark:placeholder:text-gray-300 dark:text-gray-300 pl-4"
            placeholder="Enter Email"
            required // Ensures the input is not empty
          />
          <button
            type="submit" // Set the type to "submit" for form submission
            className="min-w-[110px] h-12 py-3 px-7 text-white bg-blue-600 hover:bg-opacity-90 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
  
  // Call to Action Section Component
  const CallToAction1 = () => {
    return (
      <section className="ezy__cta20 light py-5 md:py-8 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          {/* Centered Content */}
          <div className="grid grid-cols-12 justify-center text-center">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-16">
              {/* Section Title */}
              <h2 className="text-2xl md:text-5xl leading-none font-bold mb-12">
                Newsletter
              </h2>
  
              {/* Subscription Form */}
              <div className="grid grid-cols-12 justify-center">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction1;
  