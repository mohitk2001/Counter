$(document).ready(function () {

    let content = "";
    $("#wish").datepicker({ dateFormat: 'mm-dd-yy' });

    let myvar;
    
    
    $("#set").on("click", function () {
        content = document.getElementById("wish").value;
       
        if (content!== "") {
            fun();
        }
    })
    function fun() {
        var date = document.getElementById("wish").value;
        var date_ob = new Date(date); 

        console.log(date_ob);
        var day = 0, hour = 0, min = 0, sec = 0, milisec = 0, totalsec = 0;
        myvar = setInterval(timer, 1000);
        function timer() {
            var current_date = new Date();
            milisec = date_ob - current_date;
            totalsec = Math.floor(milisec / 1000);
            day = Math.floor(totalsec / 3600 / 24);
            hour = Math.floor(totalsec / 3600) % 24;
            min = Math.floor(totalsec / 60) % 60;
            sec = Math.floor(totalsec) % 60;
            console.log(day, hour, min, sec);


            document.querySelector("#d").textContent = day;
            document.querySelector('#h').textContent = hour;
            document.querySelector('#m').textContent = min;
            document.querySelector('#s').textContent = sec;
            
        }
        
            $("#set").prop('disabled',true);
       
    }
    $("#reset").on("click", function () {

        Reset();
    })
    function Reset() {
        document.querySelector("#d").textContent = 0;
        document.querySelector('#h').textContent = 0;
        document.querySelector('#m').textContent = 0;
        document.querySelector('#s').textContent = 0;
        clearTimeout(myvar);
        $("#set").prop('disabled',false);
    }
});
