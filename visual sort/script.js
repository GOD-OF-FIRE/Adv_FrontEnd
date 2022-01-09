let arr = [4,2,1,5,6]
function generatearray() {
  for (var i = 0; i < 5; i++) {
      var value = Math.ceil(Math.random() * 100);
      let arr = document.createElement("div");
      arr.classList.add("box");
      var arr_label = document.createElement("label");
      arr_label.classList.add("block_id");
      arr_label.innerText = value;
      arr.appendChild(arr_label);
      document.querySelector(".array").appendChild(arr);
  }
} 


generatearray();

let boxes = document.querySelectorAll(".box");

for(let box of boxes){
  box.classList.add("start");
  box.style.backgroundColor = "#ccdbdc";
}

function swap(one, two) {
  return new Promise((resolve) => {
one.classList.add("m-right");
two.classList.add("m-left");
     setTimeout( ()=>{
      let temp = one.innerText;
      one.innerText = two.innerText;
      two.innerText = temp;
      one.classList.remove("m-right");
two.classList.remove("m-left");
resolve();
     }, 1000);
  });
}

async function bubbleSort(){

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, 1000);
  });

  for(let i = 0; i <boxes.length ; ++i){

    for(let j = 0; j < boxes.length - i - 1; ++j){

      boxes[j].style.backgroundColor = "#7371fc";
      boxes[j+1].style.backgroundColor = "#4361ee";

      boxes[j].style.color = "whitesmoke";
      boxes[j + 1].style.color = "whitesmoke";

      await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, 1000);
      });
      
      const n1 = parseInt(boxes[j].innerText);
      const n2 = parseInt(boxes[j + 1].innerText);
      if( n1 > n2)
      await swap(boxes[j], boxes[j+1]);
      
      else{
        await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve();
          }, 1000);
        });
      }
 
      boxes[j].style.backgroundColor = "#ccdbdc";

      boxes[j+1].style.backgroundColor = "#ccdbdc";

      boxes[j].style.color = "black";
      boxes[j + 1].style.color = "black";

      await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, 500);
      });

    }
 
    boxes[boxes.length - i - 1].style.backgroundColor = "#fb8500"; 

    await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      }, 500);
    });

   }

   for(let box of boxes){

    box.style.color = "whitesmoke";
    box.classList.add("box_done");
  }

}

bubbleSort();



function swap2(one, two, diff = 78){

  diff *= 3;
  let pos = 0;
  let id = null;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame(){
    if( pos == diff){
      clearInterval(id);
    }

    else{
      ++pos;
      one.style.left = pos + 'px';
    }
  }
}