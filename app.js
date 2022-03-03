let xhr = new XMLHttpRequest();
xhr.open('Get', `http://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=9f5ea772b64bac3f0beda3dffb54c566`, true);


let date = new Date();

//Todays Weather Date
let year = date.getFullYear();
let inisialMonth = date.getMonth() + 1;
let month = inisialMonth.length != 1 ? '0' + inisialMonth : inisialMonth;
let day = date.getDate().length != 1 ? '0' + date.getDate() : date.getDate();
let gettotalDate = year + '-' + month + '-' + day;
// console.log(gettotalDate);


xhr.onload = function (){
    if(this.status == 200){
        let data = JSON.parse(this.responseText);
        // console.log(data);
        let todays = [];
       
        data.list.forEach(function(data){
            // console.log(data);
            // console.log(data.dt);
            if(data.dt_txt.indexOf(gettotalDate) != -1){
                // console.log(data);
                todays.push(data);
            }
        });
        console.log(todays);
        for(let data in todays){
            let firstValue = todays[0].main.temp;
            console.log(todays[data].main.temp);
        }
        // let initialTemp = 
    // console.log(this.responseText);
    }
}
xhr.send();