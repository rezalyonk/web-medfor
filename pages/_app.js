// import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "@popperjs/core/dist/umd/popper.min.js";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Load Bootstrap JavaScript and Popper.js on the client-side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("bootstrap/dist/js/bootstrap.min.js");
    import("bootstrap/dist/js/bootstrap.js");
    import("@popperjs/core/dist/umd/popper.min.js");
  }, []);

  return <Component {...pageProps} />;
}
