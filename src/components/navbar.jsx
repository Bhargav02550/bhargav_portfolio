import { useState, useEffect } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <div
      id="NavBar"
      className="w-full flex justify-center items-center fixed z-20"
    >
      {!showModal && (
        <div className="w-full 2xl:w-60vw flex justify-between py-4 md:py-5 md:px-5 px-2 backdrop-blur-lg bg-gray-200 bg-opacity-50 text-center rounded-lg mx-4 my-4">
          <div>
            <h1 className="text-lg">
              I&apos;m <span className="font-bold">Bhargav</span>
            </h1>
          </div>

          <div className="md:flex hidden gap-10">
            <a className="nav-element" href="#about">
              About
            </a>
            <a className="nav-element" href="#work">
              Work
            </a>
            <a className="nav-element" href="#contact">
              Contact
            </a>
          </div>
          <div className="block md:hidden">
            <span
              onClick={() => setShowModal(true)}
              className="material-symbols-outlined cursor-pointer"
            >
              menu
            </span>
          </div>
        </div>
      )}
      {/* mobile modal */}
      <div
        className={`fixed top-0 left-0 h-full w-full backdrop-blur-lg rounded-sm z-50 transform transition-transform duration-300 ease-in-out ${
          showModal ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end">
          <span
            onClick={() => setShowModal(false)}
            className="material-symbols-outlined p-10 absolute text-3xl cursor-pointer"
          >
            close
          </span>
        </div>
        <div className="text-2xl h-full font-bold flex flex-col justify-center items-center gap-10">
          <a href="#about" onClick={() => setShowModal(false)}>
            About
          </a>
          <a onClick={() => setShowModal(false)} href="#work">
            Work
          </a>
          <a
            onClick={() => setShowModal(false)}
            href="https://blog.nanisamireddy.dev"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a onClick={() => setShowModal(false)} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;