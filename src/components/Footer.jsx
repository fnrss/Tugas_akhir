import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CoffeeVerse. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/fnrss._/?next=%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            YouTube
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
