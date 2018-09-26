$(document).ready(function () {

    $("#submit").click(function () {
        repetitions = $('#repetitions').val()
        runclock();
    });

    function runclock() {

        var duration = $('#duration').val();
        let dure=duration
        repetitions--
        if (repetitions >= 0) {
            $('#timer').html("time remaining is:"+dure)
            let timerId = setInterval(() => {
                dure--
                $('#timer').html("time remaining is:"+dure)
                
            }, 1000);

            console.log(duration)
            setTimeout(() => {
                clearInterval(timerId)
                setBreak()
            }, duration * 1000);

        }
    }

    function setBreak() {
        var breakTime = $('#break').val();

        console.log(repetitions)

        setTimeout(() => {

            runclock()
        }, breakTime * 1000)
    }

});