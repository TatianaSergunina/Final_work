document.addEventListener('DOMContentLoaded', function() {
    let image=["nature1.jpg", "nature8.jpg", "nature3.jpg", "nature4.jpg", "tree1.jpeg", "nature9.jpg", "nature7.jpg", "flowers1.jpg", "flowers2.jpg", "cat.jpg"];
    let descriptions=["Картина \"Перелетные птицы\"", "Картина \"Озерцо на опушке леса\"", "Картина \"Лес в разгаре лета\"", "Картина \"Березки у озера\"", "Картина \"Природа просыпается\"", "Картина \"Айда за грибами!\"", "Картина \"Жаркий день у реки\"", "Картина \"Букет сирени\"", "Картина \"Букет из маков\"", "Картина \"Пушистый любимец\""];
    let index=0;
    let carusel=document.querySelector("#slipper-slide img");
    let desc=document.querySelector("#slipper-slide .paint-description");
    let prevBtn=document.querySelector('.swiper-button-prev');
    let nextBtn=document.querySelector('.swiper-button-next');

    carusel.style.transition = "opacity 0.5s ease";
    carusel.src=image[index];
    desc.textContent=descriptions[index];
    carusel.style.opacity = 1;

    function nextSlide() {
        setTimeout(() => {
            carusel.style.opacity = 0;
            setTimeout(() => {
                index = (index + 1) % image.length;
                carusel.src = image[index];
                desc.textContent = descriptions[index];
                carusel.style.opacity = 1;
                nextSlide();
            }, 200);
        }, 5000);
    }

    function changeToIndex(newIndex) {
        if (newIndex === index) return;
        carusel.style.opacity = 0;
        setTimeout(() => {
            index = newIndex;
            carusel.src = image[index];
            desc.textContent = descriptions[index];
            carusel.style.opacity = 1;
        }, 500);
    }

    nextSlide();

    prevBtn.addEventListener('click', () => {
        changeToIndex((index - 1 + image.length) % image.length);
    });

    nextBtn.addEventListener('click', () => {
        changeToIndex((index + 1) % image.length);
    });
});