import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo --> */}
      <footer className="w-full text-white ">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-gray-600 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-12">
              <div
                className="col-span-3 md:col-span-6 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="mb-6 flex items-center gap-2 whitespace-nowrap text-3xl font-bold leading-6 text-white focus:outline-none"
                  href="javascript:void(0)"
                >
                  <img className="h-12 w-14 shrink-0" src={logo} alt="" />
                  Nexcent
                </a>
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <nav
                className="col-span-3 md:col-span-6 lg:col-span-3"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-lg font-lg text-white"
                  id="footer-product-5-logo"
                >
                  Company
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Customers
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Why us?
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-3 md:col-span-6 lg:col-span-3"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-lg font-bold text-white"
                  id="footer-docs-5-logo"
                >
                  Support
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Training
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      System status
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Help Center
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="col-span-3 md:col-span-6 lg:col-span-3">
              <h2 className="text-2xl md:text-5xl leading-none font-bold mb-12">
							Newsletter
						</h2>
                <form>
                  <div className="rounded overflow-hidden">
                    <div className="flex flex-wrap justify-between rounded">
                      <input
                        type="email"
                        className="min-h-[48px] leading-6 border-none bg-gray-100 bg-opacity-100 dark:bg-gray-600 dark:bg-opacity-10 grow text-black focus:outline-none placeholder:text-gray-900 dark:placeholder:text-gray-300 dark:text-gray-300 pl-4"
                        placeholder="Enter Email"
                      />
                      <button className="min-w-[110px] h-12 py-3 px-7 text-white bg-blue-600 hover:bg-opacity-90 transition">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo --> */}
    </>
  );
}
