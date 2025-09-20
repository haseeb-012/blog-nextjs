function ReviewStatistics() {
  const statistics = [
    {
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
          >
            <path
              d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
              fill="#6B7280"
            />
          </svg>
        </div>
      ),
      number: "33",
      label: "Expert Reviewers",
    },
    {
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
          >
            <path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              fill="#6B7280"
            />
          </svg>
        </div>
      ),
      number: "50,000+",
      label: "Reviews Checked",
    },
    {
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
          >
            <path
              d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H12V17H17V12ZM7 7H12V12H7V7Z"
              fill="#6B7280"
            />
          </svg>
        </div>
      ),
      number: "125+",
      label: "Mouth Tapes Tested",
    },
  ];

  return (
    <div className="w-full bg-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Mobile Layout - Vertical Stack */}
        <div className="block md:hidden">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-gray-800 px-6 py-5 ${
                index < statistics.length - 1 ? "border-b border-gray-600" : ""
              }`}
            >
              <div className="flex-shrink-0">{stat.icon}</div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">
                  {stat.number}
                </span>
                <span className="text-lg text-white">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:block">
          <div className="flex">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-3 bg-gray-800 px-6 py-4"
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white lg:text-2xl">
                    {stat.number}
                  </span>
                  <span className="text-base text-white lg:text-lg">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewStatistics;
