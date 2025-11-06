import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/images/video-popup-bg.jpg";
import "../../assets/scss/components/_video-popup.scss";
import { IoClose } from "react-icons/io5";
import shape1 from "../../assets/images/video-shape/shape1.png";
import shape2 from "../../assets/images/video-shape/shape2.png";
import shape3 from "../../assets/images/video-shape/shape3.png";

const VideoPopUp = ({ videoId = "M7lc1UVf-VE", title = "Intro video" }) => {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      // focus close button after open
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  //   function createRipple(e, center = false) {
  //     const container = thumbRef.current;
  //     if (!container) return;

  //     const rect = container.getBoundingClientRect();
  //     let x, y;

  //     if (center || (e.clientX === 0 && e.clientY === 0)) {
  //       x = rect.width / 2;
  //       y = rect.height / 2;
  //     } else {
  //       x = e.clientX - rect.left;
  //       y = e.clientY - rect.top;
  //     }

  //     const d = Math.max(rect.width, rect.height) * 1.2;
  //     const ripple = document.createElement("span");
  //     ripple.className = "video-popup__ripple";
  //     ripple.style.width = ripple.style.height = `${d}px`;
  //     ripple.style.left = `${x - d / 2}px`;
  //     ripple.style.top = `${y - d / 2}px`;

  //     container.appendChild(ripple);

  //     // Remove after animation
  //     setTimeout(() => {
  //       ripple.remove();
  //     }, 700);
  //   }

  return (
    <div className="video-popup relative z-20 pb-30 lg:pb-0">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="md:w-[80%] w-full mx-auto">
          <div
            ref={thumbRef}
            className="video-popup__thumb h-[560px] bg-cover bg-center rounded-lg flex items-center justify-center relative overflow-hidden border-10 border-white shadow-2xl"
            role="button"
            tabIndex={0}
            aria-label={`Play ${title}`}
            onClick={(e) => {
              setOpen(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // keyboard: center the ripple
                createRipple(e, true);
                setOpen(true);
              }
            }}
            style={{ backgroundImage: `url(${bg})` }}
          >
            <span
              className="inline-flex items-center justify-center w-[75px] h-[75px] transition-all 0.5s all ease-in-out bg-secondary cursor-pointer rounded-full relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:border-secondary after:border after:rounded-full animation-ripple before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[110%] before:h-[110%] before:bg-transparent before:border-secondary before:border before:rounded-full "
              aria-hidden
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#f86f03" />
                <path d="M26 20v24l20-12-20-12z" fill="#fff" />
              </svg>
            </span>
          </div>

          {open && (
            <div
              className="video-popup__modal fixed inset-0 flex items-center justify-center bg-[#0d0d0ec4] z-999 py-12 px-8"
              role="dialog"
              aria-modal="true"
              aria-label={title}
            >
              <button
                ref={closeBtnRef}
                className="bg-[#00000046] text-white h-12 w-12 flex items-center cursor-pointer justify-center mb-8 absolute top-0 right-0"
                aria-label="Close video"
                onClick={() => setOpen(false)}
              >
                <IoClose className="text-2xl" />
              </button>

              <div className="video-popup__frame aspect-video w-[80%] overflow-hidden bg-[#231f4000] h-full">
                <iframe
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover bg-transparent"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
        <img src={shape1} className="absolute top-[45%] left-[18%] animate-[horizontalMove_3s_linear_infinite] hidden lg:block" alt="Video Shape 1" />
        <img src={shape2} className="absolute top-[45%] right-[19%] animate-[zumpUp_5s_linear_infinite] hidden lg:block" alt="Video Shape 2" />
        <img src={shape3} className="absolute bottom-[4%] left-[10%] hidden lg:block" alt="Video Shape 3" />
        <div className="absolute bottom-[5%] right-[12%] hidden lg:block">
          <div className="h-13 w-13 opacity-45 border-8 rounded-full border-secondary bg-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
