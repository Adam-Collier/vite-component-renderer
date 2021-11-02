export const lazyLoading = () => {
  if (!document.querySelector(".container img")) return "";
  // use es6-string-html for syntax highlighting
  return /* html */ `
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      let lazyImages = Array.from(
        document.querySelectorAll(".container picture")
      );

      let callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let imgEl = entry.target;
            let sources = Array.from(
              imgEl.parentNode.querySelectorAll("source")
            );
            imgEl.classList.add("loaded");
            sources.forEach((source) => {
              source.srcset = source.dataset.srcset;
            });

            lazyImageObserver.unobserve(imgEl);
          }
        });
      };

      const options = {
        threshold: 0,
        root: null,
      };

      let lazyImageObserver = new IntersectionObserver(callback, options);

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage.querySelector("img"));
      });
    });
  </script> `;
};
