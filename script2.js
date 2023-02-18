async function getData() {
    const val=document.getElementById("id").value;
    console.log("val",val)
    try {
        let data=await fetch(`https://api.nationalize.io?name=${val}`)
      if (!data.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
     
      const response = await data.json()
    
    
      const show=response.country;
     let li= `<tr><th>Country ID</th><th>Probability</th></tr>`;
     show.forEach(index => {
       li +=`<tr>
       <td>${index.country_id}</td>
       <td>${index.probability}</td>
       </tr>`
     });
    
     document.getElementById("user").innerHTML = li;
    
    }
    catch (error) {
      console.error(`Data is not Found: ${error}`);
    }
   
    
  }
  
  getData();


