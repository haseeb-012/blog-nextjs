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
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.58012 12.0259H9.61012C12.4301 12.0259 14.7241 9.73187 14.7241 6.91087C14.7241 4.09087 12.4301 1.79688 9.61012 1.79688C6.79112 1.79688 4.49712 4.09088 4.49712 6.90788C4.49112 8.27087 5.01712 9.55288 5.97712 10.5199C6.93612 11.4849 8.21512 12.0209 9.58012 12.0259ZM5.99712 6.91087C5.99712 4.91787 7.61812 3.29687 9.61012 3.29687C11.6031 3.29687 13.2241 4.91787 13.2241 6.91087C13.2241 8.90387 11.6031 10.5259 9.61012 10.5259H9.58312C8.62112 10.5219 7.71812 10.1449 7.04212 9.46187C6.36412 8.77987 5.99312 7.87488 5.99712 6.91087Z"
              fill="#333333"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.05078 18.6743C2.05078 22.2033 7.54278 22.2033 9.60978 22.2033C11.4788 22.2033 17.1688 22.2033 17.1688 18.6543C17.1688 15.9673 13.7078 13.6963 9.60978 13.6963C5.51178 13.6963 2.05078 15.9753 2.05078 18.6743ZM3.55078 18.6743C3.55078 17.0323 6.14178 15.1963 9.60978 15.1963C13.0778 15.1963 15.6688 17.0213 15.6688 18.6543C15.6688 20.3473 12.3738 20.7033 9.60978 20.7033C5.58878 20.7033 3.55078 20.0203 3.55078 18.6743Z"
              fill="#333333"
            />
            <path
              d="M16.8532 10.8261C16.5212 10.8261 16.2182 10.6051 16.1282 10.2691C16.0222 9.86909 16.2592 9.45909 16.6602 9.35109C17.7672 9.05509 18.5402 8.04809 18.5402 6.90009C18.5412 5.70009 17.6902 4.65409 16.5162 4.41309C16.1102 4.33009 15.8482 3.93309 15.9322 3.52809C16.0142 3.12209 16.4102 2.85609 16.8172 2.94409C18.6862 3.32809 20.0412 4.99209 20.0412 6.90009C20.0412 8.72509 18.8092 10.3301 17.0462 10.8011C16.9822 10.8181 16.9162 10.8261 16.8532 10.8261Z"
              fill="#333333"
            />
            <path
              d="M18.9932 18.0194C19.0742 18.3643 19.3822 18.5973 19.7222 18.5973C19.7792 18.5973 19.8372 18.5914 19.8952 18.5774C21.0842 18.2974 21.9492 17.2984 21.9492 16.2014C21.9492 14.4744 19.8342 12.9014 17.5122 12.9014C17.0982 12.9014 16.7622 13.2374 16.7622 13.6514C16.7622 14.0653 17.0982 14.4014 17.5122 14.4014C19.1332 14.4014 20.4492 15.4914 20.4492 16.2014C20.4492 16.5484 20.1132 16.9853 19.5512 17.1173C19.1482 17.2114 18.8982 17.6164 18.9932 18.0194Z"
              fill="#333333"
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-badge-check-icon lucide-badge-check"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
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
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 15V13H9.175C9.09167 13.3333 9.0375 13.6667 9.0125 14C8.9875 14.3333 8.99167 14.6667 9.025 15H7ZM7 20C5.61667 20 4.4375 19.5125 3.4625 18.5375C2.4875 17.5625 2 16.3833 2 15V6C1.45 6 0.979167 5.80417 0.5875 5.4125C0.195833 5.02083 0 4.55 0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4C14 4.55 13.8042 5.02083 13.4125 5.4125C13.0208 5.80417 12.55 6 12 6V9.025C11.6 9.275 11.2333 9.56667 10.9 9.9C10.5667 10.2333 10.275 10.6 10.025 11H7V9H10V6H4V15C4 15.8333 4.29167 16.5417 4.875 17.125C5.45833 17.7083 6.16667 18 7 18C7.5 18 7.95417 17.8917 8.3625 17.675C8.77083 17.4583 9.11667 17.1583 9.4 16.775C9.53333 17.1083 9.68333 17.425 9.85 17.725C10.0167 18.025 10.2167 18.3167 10.45 18.6C10 19.0333 9.48333 19.375 8.9 19.625C8.31667 19.875 7.68333 20 7 20ZM2 4H12V2H2V4ZM15.5 17C16.2 17 16.7917 16.7583 17.275 16.275C17.7583 15.7917 18 15.2 18 14.5C18 13.8 17.7583 13.2083 17.275 12.725C16.7917 12.2417 16.2 12 15.5 12C14.8 12 14.2083 12.2417 13.725 12.725C13.2417 13.2083 13 13.8 13 14.5C13 15.2 13.2417 15.7917 13.725 16.275C14.2083 16.7583 14.8 17 15.5 17ZM20.6 21L17.9 18.3C17.5333 18.5333 17.15 18.7083 16.75 18.825C16.35 18.9417 15.9333 19 15.5 19C14.25 19 13.1875 18.5625 12.3125 17.6875C11.4375 16.8125 11 15.75 11 14.5C11 13.25 11.4375 12.1875 12.3125 11.3125C13.1875 10.4375 14.25 10 15.5 10C16.75 10 17.8125 10.4375 18.6875 11.3125C19.5625 12.1875 20 13.25 20 14.5C20 14.9333 19.9417 15.35 19.825 15.75C19.7083 16.15 19.5333 16.5333 19.3 16.9L22 19.6L20.6 21Z"
              fill="#333333"
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
