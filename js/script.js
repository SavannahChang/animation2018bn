window.onload = function() {
    //獲取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //當音樂播放完停止時候 自動停止光盤旋轉效果
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class","");
        //music.style.animationPlayState = "paused";
        //music.style.webkitanimationPlayState = "paused";
        //一樣有版本不相容問題
    }, false);

    // music.onclick = function() {
    //     if (audio.paused) {
    //         audio.play();
    //         // this.setAttribute("class", "play")
    //         this.style.animationPlayState = "running";
    //         // 此方式較新較好 但4.4以下安卓 6以下Iphone手機不相容
    //         this.style.webkitanimationPlayState = "running";
    //         // 此方解決6以下Iphone手機不相容 但安卓一樣
    //     } else {
    //         audio.pause();
    //         // this.setAttribute("class", "")
    //         this.style.animationPlayState = "paused";
    //         // 此方式較新較好 但4.4以下安卓 6以下Iphone手機不相容
    //         this.style.webkitanimationPlayState = "paused";
    //         // 此方解決6以下Iphone手機不相容 但安卓一樣
    //     };
    // };
    music.addEventListener("touchstart", function(event) {
        if (audio.paused) {
            audio.play();
            this.style.animationPlayState = "running";
            this.style.webkitanimationPlayState = "running";
        } else {
            audio.pause();
            this.style.animationPlayState = "paused";
            this.style.webkitanimationPlayState = "paused";
        };
    }, false);

    //點擊螢幕開啟好運2018
    page1.addEventListener("touchstart", function(event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function() {
            page2.setAttribute("class","page fadeOut")
            page3.setAttribute("class","page fadeIn")
        }, 5500);
    }, false);
};
