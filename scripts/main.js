const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];

next.addEventListener("click", () => slider(next));
prev.addEventListener("click", () => slider(prev));


function slider(current) {
    let images = [
        {
            num: 1,
            path: "images/beans.jpg",
        },
        {
            num: 2,
            path: "images/tea.jpg",
        },
        {
            num: 3,
            path: "images/teapot.jpg",
        },
    ];
    const currentImg = document.getElementsByClassName("sliderImage")[0];
    const currentSrc = currentImg.getAttribute("src");
    console.log(currentImg, currentSrc);

    // index within images array of the object
    const search = images.indexOf(
        images.find((image) => image.path == currentSrc)
    );
    console.log(search);

    if (current == next) {
        if (search == images.length-1) {
            currentImg.setAttribute("src", images[0].path);
        }
        else {
        currentImg.setAttribute("src", images[search + 1].path);
        }
    }
    else if (current == prev) {
        if (search == 0) {
            currentImg.setAttribute("src", images[images.length-1].path);
        }
        else {
        currentImg.setAttribute("src", images[search - 1].path);
        }
    }
}
