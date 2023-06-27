import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-center fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <div className="hover:underline">
            © 2023 Control Libraries™ . All Rights Reserved.
          </div>
        </span>
      </footer>
    </>
  );
}

export default Footer;
