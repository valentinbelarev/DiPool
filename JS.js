$('.navbar a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});

function Print() {
    $(".tableToPrint td, .tableToPrint th").each(function() { $(this).css("width", $(this).width() + "px") });
    $(".tableToPrint tr").wrap("<div class='avoidBreak'></div>");
    window.print();
}