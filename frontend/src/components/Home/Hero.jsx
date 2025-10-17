const Hero = () => {
  return (
    <div className="relative bg-gray-900 ">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-primary"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-3 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-3xl text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
            Your CS Learning Hub
            <br className="hidden md:block" />
            Courses, Chapters & Tests {' '}
            <span className="relative inline-block">
              Await{' '}
              <div className="w-full h-1 -mt-1 bg-coprimary" />
            </span>
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            Browse chapters, solve MCQs, and prepare for success. Discover video explanations, practical exercises, and tests designed to help you master every course at your own pace.
          </p>
            <button
              className="font-semibold b-2 inline-flex items-center justify-center h-12 px-6 cursor-pointer tracking-wide text-white transition duration-200 rounded shadow-md w-auto bg-deep-purple-accent-400 bg-coprimary focus:shadow-outline focus:outline-none mb-4 border b-2 hover:bg-transparent hover:text-[#5076db] border-[#5076db]"
            >
              Get Started
            </button>
          <p className="max-w-md mb-10  font-thin tracking-wide text-gray-500 text-sm sm:mx-auto md:mb-12">
            Scroll down to explore chapters, tests, and resources made for computer science students.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
