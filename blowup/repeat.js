
var Repeater = {
    interval_: 1500,
    id_: null,
    save_: false,

    do: function(x, y) {
        // for share
        if (this.save_) {
            var url = window.location.href;
            window.history.pushState({}, 0, url + '?x=' + x + '&y=' + y);
        } else {
            var url = window.location.pathname;
            window.history.pushState({}, 0, url + '?x=' + x + '&y=' + y);
        }

        if (Repeater.id_ != null)
            clearInterval(Repeater.id_);

        Repeater.id_ = setInterval(function() {
            var canvas = document.getElementsByTagName('canvas')[0];
            canvas.style.display = canvas.style.display == 'none' ? '' : 'none';
        }, Repeater.interval_);
    },

    toggle: function(t) {
        this.save_ = t;
    }
}
