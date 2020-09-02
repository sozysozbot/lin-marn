var Global = {
    precedence: [],
    draw: (prec) => { },
    sy: () => { },
    jv: () => { },
    noborder: () => { },
    border: () => { },
    sy_pua2man1: () => { }
};
Global.precedence = ["SY", "jv", "jv touch panel", "SY pua2 man1", "noborder", "border", "meloviliju"];
Global.draw = function (prec) {
    document.getElementById("res").innerHTML =
        (document.getElementById('inputs')).value.split(" ")
            .map(function (txt) {
            var ans = "";
            for (var i = 0; i < txt.length; i++) {
                ans += getImage(txt[i], prec, 100, true);
            }
            return ans;
        })
            .join("<br><br>");
};
Global.sy = function () {
    Global.precedence = ["SY", "jv", "jv touch panel", "SY pua2 man1", "noborder", "border", "meloviliju"];
    Global.draw(Global.precedence);
};
Global.jv = function () {
    Global.precedence = ["jv", "jv touch panel", "SY", "SY pua2 man1", "noborder", "border", "meloviliju"];
    Global.draw(Global.precedence);
};
Global.noborder = function () {
    Global.precedence = ["noborder", "border", "SY", "SY pua2 man1", "jv", "jv touch panel", "meloviliju"];
    Global.draw(Global.precedence);
};
Global.border = function () {
    Global.precedence = ["border", "noborder", "SY", "SY pua2 man1", "jv"];
    Global.draw(Global.precedence);
};
Global.sy_pua2man1 = function () {
    Global.precedence = ["SY pua2 man1", "SY", "jv", "noborder", "border"];
    Global.draw(Global.precedence);
};
