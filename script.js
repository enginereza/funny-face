document.querySelector("body").addEventListener("mousemove", function (event) {
    const eyes = document.querySelectorAll(".left-eye, .right-eye");
    eyes.forEach(function (eye) {
        const pupilContainer = eye.querySelector(".pupil-container");
        const pupil = pupilContainer.querySelector(".pupil");
        const pupilBack = pupilContainer.querySelector(".pupil-back");
        const pupilFront = pupilContainer.querySelector(".pupil-front");

        // مرکز چشم
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width /6 ;
        const eyeCenterY = eyeRect.top + eyeRect.height / 6;

        // موقعیت موس
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        // محاسبه زاویه بین مرکز چشم و موس
        const radian = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

        // محدود کردن حرکت مردمک داخل چشم‌ها (فاصله از مرکز چشم)
        const maxDistance = eyeRect.width / 3;  // حداکثر فاصله برای مردمک
        const distance = Math.min(maxDistance, eyeRect.height / 3);  // محدود کردن به اندازه عرض یا ارتفاع چشم

        // موقعیت مردمک‌ها
        const pupilX = Math.cos(radian) * distance;
        const pupilY = Math.sin(radian) * distance;

        // حرکت لایه‌ها (پشت، جلو و مردمک)
        pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
        pupilBack.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
        pupilFront.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;

        // حرکت سفیدی چشم
        const eyeMovementX = Math.cos(radian) * maxDistance;
        const eyeMovementY = Math.sin(radian) * maxDistance;

        // حرکت چشم‌ها همراه با مردمک‌ها
        eye.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;
    });
});
