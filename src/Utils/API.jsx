fetch('mens.json', {
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then(function(response){
    console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    setdata(myJson)
  });



  const options = {

  }