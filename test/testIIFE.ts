(function () {
    console.log("This is IIFE");
})();

(function (name) {
    console.log(`Hello ${name}`);
}) ("cdo");

((name) => {
    console.log(`Hello ${name}`);
}) ('mdo');