let submit = document.querySelector(".submit");
let img =document.querySelector(".img");
console.log(submit);
let para= document.querySelector(".para");
let g =document.querySelector(".g");
let r =document.querySelector(".r");
let s =document.querySelector(".s");
let h =document.querySelector(".h");
let po = document.querySelector(".first");
let put =document.querySelector(".second");
let th =document.querySelector(".th");
let thr =document.querySelector(".t");
let body=document.querySelector("body");
let back=document.querySelector(".back");
let back2=document.querySelector(".back2");
let count =  0;
let head= document.querySelector("h1");
// let quiz = document.querySelector(".quiz");
let disp= document.getElementById("display");
submit.addEventListener("click", function(){

    let first= document.querySelector(".first").value;
    console.log(first)

    let second= document.querySelector(".second").value;
    
    console.log(second)
    
    
    if(first ==="kind" & second=== "introvert") 
     {para.innerHTML= "You are a HUFFLEPUFF!";
     para.style.display="block";
      h.style.display = 'block'; 
      g.style.display = 'none';
      s.style.display = 'none';
     r.style.display = 'none';
     img.style.display = 'none';
    submit.style.display= "none";  
    po.style.display= "none";
     put.style.display= "none";
     thr.style.display= "none";
     th.style.display= "none";
     head.innerHTML="CONGRATULATIONS!!!!";
     back.style.display="block";
     body.style.backgroundColor="#b08e1e";
     count++;
     disp.innerHTML =    count;
     }

    else if(first ==="intelligent" & second=== "introvert")  
    {para.innerHTML= "You are a RAVENCLAW!";
    para.style.display="block";
    r.style.display = 'block';
    h.style.display = 'none';
    g.style.display = 'none';
    s.style.display = 'none';
    img.style.display = 'none';
    submit.style.display= "none";  
    po.style.display= "none";
     put.style.display= "none";
     thr.style.display= "none";
     th.style.display= "none";
     head.innerHTML="CONGRATULATIONS!!!!";
     back.style.display="block";
     count++;
     disp.innerHTML = count;
     body.style.backgroundColor="#30467a";}
    
    else if(first ==="intelligent" & second=== "extrovert")
      {para.innerHTML= "You are a SLITHERIN!";
      para.style.display="block";
      s.style.display = 'block';
      r.style.display = 'none';
      h.style.display = 'none';
      g.style.display = 'none';
      img.style.display = 'none';
      submit.style.display= "none";  
      po.style.display= "none";
       put.style.display= "none";
       thr.style.display= "none";
       th.style.display= "none";
       head.innerHTML="CONGRATULATIONS!!!!";
      //  back2.style.backgroundImage = "url('Sli.png')";
       back.style.display="block";
       count++;
       disp.innerHTML = count;
       body.style.backgroundColor="#285740"; }
   
    else if(first ==="kind" & second=== "extrovert")
      {para.innerHTML= "You are a GRYFFINDOR!";
      para.style.display="block";
      g.style.display = 'block';
      s.style.display = 'none';
      r.style.display = 'none';
      h.style.display = 'none';
      img.style.display = 'none';
      submit.style.display= "none";  
      po.style.display= "none";
       put.style.display= "none";
       thr.style.display= "none";
       head.innerHTML="CONGRATULATIONS!!!!";
       th.style.display= "none";
       back.style.display="block";
       count++;
       disp.innerHTML = count;
       body.style.backgroundColor="#6b2323"; }
    
    else {para.innerHTML= "Sorry! Did you mistype?";
    para.style.display="block"; }
    });
    back.addEventListener("click", function(){ 
        h.style.display = 'none'; 
        g.style.display = 'none';
        s.style.display = 'none';
       r.style.display = 'none';
       img.style.display = 'flex';
      submit.style.display= "block";  
      back.style.display="none";
      po.style.display= "block";
       put.style.display= "block";
       thr.style.display= "block";
       th.style.display= "block";
       head.innerHTML="WHAT HARRY POTTER HOUSE ARE YOU?";
       head.style.display= "block";
       para.style.display="none";
       body.style.backgroundColor="#967456"; 
    });