import { VerifiedIcon } from "@/utils/icon";

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
          <VerifiedIcon color="black" />
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
              d="M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
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
    <div className="w-full bg-gray-800 ">
      <div className="mx-auto max-w-8xl px-4  sm:px-6 xl:px-0">
        {/* Mobile Layout - Vertical Stack */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg bg-gray-800 p-4"
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    {stat.number}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Layout - Horizontal */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 xl:gap-0">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="hover:bg-gray-750 flex items-center gap-4  bg-gray-800 p-6 transition-all"
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white lg:text-3xl">
                    {stat.number}
                  </span>
                  <span className="text-sm font-medium text-gray-300 lg:text-base">
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
