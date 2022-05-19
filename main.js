
     let digital = document.querySelector('.container');
     let hour = document.querySelector('.HOURS');
     const d = new Date();
     const secondHand = document.querySelector('.second');
     const minsHand = document.querySelector('.min');
     const hourHand = document.querySelector('.hour');
     const i = document.querySelector("i");
     let audio;
     let vol = false;
     

    setInterval(() => {
    const d = new Date(); //object of date()
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hr_rotation = 30 * hr + min / 2; //converting current time
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;
  
    hourHand.style.transform = `rotate(${hr_rotation}deg)`;
    minsHand.style.transform = `rotate(${min_rotation}deg)`;
    secondHand.style.transform = `rotate(${sec_rotation}deg)`;
    ticking();
}, 1000);

    
    function toggleIcon() {
        if (i.getAttribute('class')=="fas fa-volume-up") {
            i.setAttribute("class","fas fa-volume-mute");
            vol = false;

        }
        else{
            i.setAttribute("class","fas fa-volume-up");
            vol = true;
        }
    }


     function hours(){
        let ours = d.getHours();
        if (ours>=12) {
            hour.textContent = "pm"
        }
        else{
            hour.textContent = "am"
        }

        let newTime = ours >= 12 ? ours-12 : ours;
        return newTime;

     }
     function ticking(){
         audio = new Audio("src/audio/clock.mp3");
         if (!vol) {
             audio.volume = 0;
         }
         else{
             audio.volume = 1;
         }
         audio.play();
         audio.loop;
         
     }

     function change(text){
        text = text < 10 ? `0${text}` : text;
        return text;
     }
     setInterval(function update(){
     const d = new Date();
     let time = `${change(hours())}:${change(d.getMinutes())}:${change(d.getSeconds())}`;
     digital.innerHTML = time;

     },1000)

     function calcTime(city,offset){
		var b=new Date()
		var utc=b.getTime()+(b.getTimezoneOffset()*60000);
		var nd=new Date(utc+(3600000*offset));
		return "the local time of "+city+" is"+nd.toLocaleString();

	}
