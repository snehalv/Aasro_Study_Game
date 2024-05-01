
document.addEventListener("DOMContentLoaded", function() {
    // Array of image objects
    var images = [
        { path: "https://www.pngitem.com/pimgs/m/119-1197022_fingers-png-transparent-background-hand-one-finger-png.png", description: "Description 1" },
        { path: "https://thumbs.dreamstime.com/b/hand-two-fingers-up-white-closeup-man-isolated-background-counting-sign-number-58117169.jpg", description: "Description 2" },
        { path: "https://th.bing.com/th/id/R.4e7ea9177e10c0e829595f212c06c030?rik=%2b%2beYnQEEnNFD%2bA&riu=http%3a%2f%2ffergusonvalues.com%2fwp-content%2fuploads%2f2015%2f05%2f3-fingers-300x280.jpg&ehk=Txqsp6iAjR9%2bwrb%2bsqzXTfofJWBGZLUBQ0mLSPx5B9U%3d&risl=&pid=ImgRaw&r=0", description: "Description 3" },
        { path: "https://tricialottwilliford.com/wp-content/uploads/2015/12/bigstock-Hand-With-Four-Fingers-Up-Isol-98185565.jpg", description: "Description 4" },
        { path: "https://st.depositphotos.com/1616053/1308/i/950/depositphotos_13085427-stock-photo-hand-is-showing-five-fingers.jpg", description: "Description 5" },
        { path: "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/600/f010991f-7953-4e20-b677-9a7c9641ea78.jpg", description: "Description 6" },
        { path: "https://cdn1.papercut.com/img/blog/static/images/7-tech-trends-that-will-define-2020-according-to-papercutters-b.jpg", description: "Description 7" },
        { path: "https://www.ou.org/holidays/files/shutterstock_191603624.jpg", description: "Description 8" },
        { path: "https://image.shutterstock.com/image-photo/counting-hands-isolated-over-white-260nw-191603627.jpg", description: "Description 9" },
        { path: "https://image.shutterstock.com/image-photo/male-hands-showing-ten-fingers-260nw-275316797.jpg", description: "Description 10" }
    ];

    var imageBox = document.querySelector(".image-box");
    var buttons = document.querySelectorAll(".numberButton");

    // Function to change the image randomly
    function changeImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        var imageObject = images[randomIndex];
        imageBox.innerHTML = "<img src='" + imageObject.path + "' alt='" + imageObject.description + "'>";
    }

    // Add click event listeners to buttons
    buttons.forEach(function(button) {
        button.addEventListener("click", changeImage);
    });
});
