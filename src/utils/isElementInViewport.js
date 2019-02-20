function cumulativeOffset(element, top = 0, left = 0) {
    do {
        //相對於OffsetParent於頂部的距離
        top += element.offsetTop;
        //相對於OffsetParent於左邊的距離
        left += element.offsetLeft;
        //返回一個指向最近的（最接近，指包含層級上的最近）包含該元素的定位元素。
        element = element.offsetParent
    } while (element);
    return {
        top: top,
        left: left
    };
}

export default function isElementInviewport(element) {
    // 當計算邊界矩形時，會考慮視口區域（或其他可滾動元素）內的滾動操作，也就是說，當滾動位置發生了改變，
    // 頂部和左屬性值就會隨之立即發生變化（因此，它們的值是相對於視口的，而不是絕對的）。
    // 如果你需要獲得相對於整個網頁左上角定位的屬性值，那麼只要給頂部，
    // 左側屬性值加上當前的滾動位置（通過window.scrollX和window.scrollY），這樣就可以獲取與當前的滾動位置無關的值。
    let rect = element.getBoundingClientRect();
    let { top } = cumulativeOffset(element);

    return (
        document.documentElement.scrollTop >= (top - rect.height / 2) && document.documentElement.scrollTop <= top + rect.height
    );
}
