const app = {};

app.init = function () {
  console.log("ready");
};

app.eventListeners = function () {};

$(function () {
  AOS.init();
  app.init();
  app.eventListeners();
});
