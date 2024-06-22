function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    return /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent) && !/ipad/i.test(userAgent);
}

if (isMobileDevice()) {
    window.location.href = "please_dont_use_mobile/index.html";
}
