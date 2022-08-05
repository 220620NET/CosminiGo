$(document).ready(() => {


$('.generate').click(function()
{
	/*fetch('https://api.agify.io/?name=michael',{ mode: 'no-cors'}).then((response) => response.text()).then(imageBlob => {
      // Then create a local URL for that image and print it 
      //const imageObjectURL = URL.createObjectURL(imageBlob);*/
      let topImg = document.createElement("img"); //creates an html img tag
      topImg.src = `https://app.pixelencounter.com/api/basic/stars?height=300&width=300&date=${Date.now()}`;
      $('.tm').html(topImg);

      let rightImg = document.createElement("img"); //creates an html img tag
      rightImg.src = `https://app.pixelencounter.com/api/v2/basic/svgmonsters?date=${Date.now()}`;
      $('.right').html(rightImg);

      let bottomImg = document.createElement("img"); //creates an html img tag
      bottomImg.src = `https://app.pixelencounter.com/api/basic/planets?frame=450&height=300&width=300&date=${Date.now()}`;
      $('.bm').html(bottomImg);

      let leftImg = document.createElement("img"); //creates an html img tag
      leftImg.src = `https://app.pixelencounter.com/api/basic/monsters/random?date=${Date.now()}`;
      $('.left').html(leftImg);
      //console.log(imageBlob);
  //});
		//{
		 //console.log(resBody);
    	//document.querySelector('#result-name').innerText = resBody.name;
        //document.getElementById('result-age').innerText = resBody.age;
        //}).catch((err) => console.log(err));

        /*const reqArr = ['https://api.agify.io/?name=' + nameInput, 'https://api.genderize.io?name=' + nameInput, 'https://api.nationalize.io?name=' + nameInput];
        // Promise.all([fetch(reqArr[0]).then((res) => res.json()), fetch(reqArr[1]).then((res) => res.json()), fetch(reqArr[2]).then((res) => res.json())])
        
        //refactoring the above long Promise.all call to utilize js's Array.map() method (this is akin to C# array's foreach method or LINQ's select method)
        Promise.all(reqArr.map((url) => fetch(url).then((res) => res.json()))).then((data) => {
            console.log(data);
            //format the data
            responseData = {
                name: data[1].name,
                gender: {
                    gender: data[1].gender,
                    probability: data[1].probability
                },
                age: data[0].age,
                nationality: {
                    country: data[2].country[0]?.country_id,
                    probability: data[2].country[0]?.probability
                }
            };

            callback(responseData);
        }) 
    }*/



});
});
	
