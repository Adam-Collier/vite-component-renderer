export const keenSlider = () => /* html */ `
    <script src="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.js"></script>
    <script>
      let carouselHandler = () => {
        document.querySelectorAll(".keen-wrapper").forEach(wrapper => {
            let selector = wrapper.querySelector('.keen-slider')
            let children = selector.children

            let slider = new KeenSlider(selector, {
            loop: true,
            slidesPerView: wrapper.dataset.slidesperview,
            spacing: wrapper.dataset.spacing,
            breakpoints: {
                '(max-width: 767px)': {
                    slidesPerView: wrapper.dataset.slidesperviewmob,
                },
            },
            created: function(instance) {
                let prevArrow = wrapper.querySelector(".keen-prev")
                prevArrow && prevArrow.addEventListener('click', () => instance.prev());

                let nextArrow = wrapper.querySelector(".keen-next")
                nextArrow && nextArrow.addEventListener('click', () => instance.next());
            },
            });
        });
        }

        document.addEventListener("DOMContentLoaded", function(){
            if(document.querySelector(".keen-slider")){
                carouselHandler();
            }
        });	
    </script>
`;
