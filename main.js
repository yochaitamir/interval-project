$(document).ready(function () {

    $("#submit").click(function () {
        
        repetitions = $('#repetitions').val()
        $('#rounds').html("rounds remaining :"+repetitions)
        runclock();
    });
    

    function runclock() {
        if (repetitions > 0) {
            $('audio#pop')[0].play()
            }
        var duration = $('#duration').val();
        let dure=duration
        
        repetitions--
        if (repetitions >= 0) {
            $('#timer').html("time remaining in this round: "+dure+" seconds")
            let timerId = setInterval(() => {
                dure--
                $('#timer').html("time remaining in this round: "+dure+" seconds")
                
            }, 1000);

            console.log(duration)
            setTimeout(() => {
                clearInterval(timerId)
                setBreak()
            }, duration * 1000);

        }
    }

    function setBreak() {
        $('#rounds').html("rounds remaining :"+repetitions)
        $('audio#pop')[0].play()
        
        var breakTime = $('#break').val();

        console.log(repetitions)

        setTimeout(() => {

            runclock()
        }, breakTime * 1000)
    }

});