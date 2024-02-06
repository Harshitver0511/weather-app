 let search=document.querySelector(".search")
 let but=document.querySelector(".box")
 let harshit=document.querySelector("#name")
 let imgt=document.querySelector(".image")
 let sac=document.querySelector("#sac")
but.addEventListener("click", async() =>{
    const apiKey = 'ef5b96d4f76eff5b651ed4cd933e200b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}`;
    let response= await fetch(apiUrl);
    let data=await response.json();
    let temp=Math.round(data.main.temp-273.15)
    let icon=data.weather[0].icon;
    let sach=data.weather[0].main;
    imgt.innerHTML=` <img src="https://openweathermap.org/img/wn/${icon}@2x.png"  id="img" width="140px" height="140px">
    <h1 id="temp">${temp} c</h1>`
    sac.innerText=sach;
    console.log(data);
    console.log(sach);
    harshit.innerText=`${search.value}`;

})