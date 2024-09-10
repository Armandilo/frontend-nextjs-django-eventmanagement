export default function Getstarted() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-14 sm:px-6 sm:py-26 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden relative isolate px-6 pt-16 sm:rounded-2xl sm:px-27 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-10">
         
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden sm:flex sm:justify-center relative mt-16 h-auto lg:mt-1 w-full max-w-5xl mx-auto">
                <img
                    alt="App screenshot"
                    src="person.svg"
                    className="w-full h-auto max-w-full object-contain rounded-md bg-white/5 ring-1 ring-white/10"
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
  