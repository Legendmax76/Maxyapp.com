!function() {
    "use strict";
    doWhenReady(function() {
        var t, e, n = document.getElementById("searchLanguage");
        function a(e) {
            var t = 4;
            3 < e.length ? t = 6 : 3 === e.length && (t = 4.5),
            document.getElementById("searchInput").style.paddingRight = 16 * t + "px"
        }
        (e = document.createElement("label")).setAttribute("for", "searchLanguage"),
        e.setAttribute("id", "jsLangLabel"),
        e.className = "js-langpicker-label",
        e.innerText = n.value,
        e.textContent = n.value,
        n.parentNode.parentNode.className = " styled-select js-enabled",
        a(n.value),
        n.parentNode.insertBefore(e, n),
        t = e,
        n.addEventListener("change", function() {
            var e;
            e = n.value,
            t.innerText = e,
            a(t.textContent = e)
        })
    })
}();
