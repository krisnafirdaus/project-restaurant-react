import React from "react";

export default function Menu() {
  var mybutton = document.getElementById("btnTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="wrapper-btn-fixed">
        <button
          id="btnTop"
          className="btn-rounded"
          onClick={() => topFunction()}
        >
          <img
            alt="top-arrow"
            data-src="https://alamisharia.co.id/wp-content/themes/alami/images/icon/top-arrow.svg"
            className="img-top-master lazyloaded"
            src="https://alamisharia.co.id/wp-content/themes/alami/images/icon/top-arrow.svg"
            loading="lazy"
          />
        </button>
      </div>
    </>
  );
}
