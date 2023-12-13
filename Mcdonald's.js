let foodItems=document.querySelectorAll("#fooditems input");
  let status=document.querySelector("#status");
  let orderid=document.getElementById("orderId");
let orderfood=document.getElementById("orderFood");
  
  function orderFood(){
    let items=Array.from(foodItems);
let p= document.createElement("p");
p.innerText="Food is being order";
status.append(p)
promiseCreate(items)
    .then((res)=>{
        console.log(res);
        p.innerText=`${res} has been order sucessfully`;
        orderid.textContent=`OrderId-: ${orderId()}`;
    });   
  };

  function promiseCreate(items){
      let imageCont=document.querySelector("#imageCont")
     let images=[
          {
              name: "Burger",
              url:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
              name: "Pizza",
              url:"	https://img.freepik.com/free-photo/top-view-pepper…ll-pepper-olive-corn-black-wooden_141793-2158.jpg"
          },
          {
              name: "Fries",
              url:"	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TPQiP9JWfeHhO3p2jiQBere7zQvvxFaD9Men7IpGQ&s"
          },
          {
              name:"Pasta",
              url:"	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5GRY8gzvnpwgLLI2ihST6UP93mGAckJPvW-lO_a18g&s"
          },
      ]

      let checkedItems=items.filter((ele)=>{
        return ele.checked
    });

      let imageFilter=images.filter((ele)=>{
          return ele.name== checkedItems[0].value
      });

      
      let promise= new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let image=document.createElement("img");
            image.src=imageFilter[0].url;
            image.style.width="100%";
            image.style.boxShadow= "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset";
            imageCont.append(image)
              resolve(checkedItems[0].value)
          },2000);
      });
      return promise
  };
  console.log(foodItems);

//------------------------------Function Of OrderId----------------------------//
  function orderId(){
      let length=9;
      let id="";
      for(let i=0; i<=length; i++){
          id+=Math.floor(Math.random()*10);
      }
      return id;
  }