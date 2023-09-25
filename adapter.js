(function (doc, win) {
  var docE1 = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docE1.clientWidth;
      if (!clientWidth) return;
      clientWidth = clientWidth < 320 ? 320 : clientWidth;
      docE1.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)