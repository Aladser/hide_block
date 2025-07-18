/**
 * Скрыть медленно блок
 * @param {*} element DOM блок
 * @param {*} period время в секундах
 */
function hideSlowlyDOMBlock(element, period = 5) {
    if (element instanceof Element) {
        period = parseInt(period);
        let opacity = period /100;
        const timer = setInterval(function() {
            if (opacity <= 0.1) {
                clearInterval(timer);
                element.remove();
            } else {
                element.style.opacity = opacity;
                element.style.filter = 'alpha(opacity=' + opacity * 100 + ')'; // Для старых IE
                opacity -= opacity * 0.1;
            }
        }, 100);
    } else {
        throw Exception(`${element} не является DOM`);
    }
}
