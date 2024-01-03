window.addEventListener('DOMContentLoaded', function() {
    var titles = ["144","14-","1--","---","1--","14-","144"];
    var currentIndex = 0;
    var intervalDuration = 400

    function changeTitle() {
        document.title = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }

    changeTitle();

    setInterval(changeTitle, intervalDuration);
});