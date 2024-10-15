const navigation = [
  { name: "หน้าหลัก", href: "/", current: false },
  { name: "ข่าวทั้งหมด", href: "/pages/map", current: false },
  { name: "ติดต่อ", href: "/pages/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer({}) {
  return (
    <footer class="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a class="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          แจ้งเตือนอุบัติเหตุ
        </a>
        <p class="my-6 text-gray-400 dark:text-gray-400">
          เหตุด่วนเหตุร้าย โทร 191.
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {item.name}
            </a>
          ))}
        </ul>
        <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2024-2024{" "}
          <a href="#" class="hover:underline">
            
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
