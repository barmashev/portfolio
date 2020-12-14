const app = {};

app.init = function () {
  console.log("ready");
};

app.eventListeners = function () {};

$(function () {
  app.init();
  app.eventListeners();
});
