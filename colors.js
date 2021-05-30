window.addEventListener('load', function () {
    var colorChangeBtn = this.document.querySelector('#night_day');
    colorChangeBtn.addEventListener('click', nightDayHandler);
});

var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }
        $('a').css('color', color);
    },
};
var Body = {
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
};
function nightDayHandler(e) {
    var target = document.querySelector('body');
    if (this.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        this.value = 'day';

        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        this.value = 'night';

        Links.setColor('blue');
    }
}
