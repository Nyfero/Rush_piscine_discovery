console.log("toto");
let a;

function scrol_to(id) {
	if (a) a.stop();
	a = $([document.documentElement, document.body]).animate({
		scrollTop: $("#" + id).offset().top }, 1000);
}
