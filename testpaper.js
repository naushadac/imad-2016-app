
var xt=30;
var mark1=0;
var mark2=0;
var mark3=0;
var mark4=0;
var mark5=0;
var mark6=0;
var mark7=0;
var mark8=0;
var mark9=0;
var mark10=0;
var mark11=0;
var mark12=0;
var mark13=0;
var mark14=0;
var mark15=0;
var mark16=0;
var mark17=0;
var mark18=0;
var mark19=0;
var mark20=0;
var total_mark=0;

function hidebody()
{
document.getElementById('af1').style.display='none';
document.getElementById('af2').style.display='none';
document.getElementById('af3').style.display='none';
document.getElementById('af4').style.display='none';
document.getElementById('bf1').style.display='none';
document.getElementById('bf2').style.display='none';
document.getElementById('bf3').style.display='none';
document.getElementById('bf4').style.display='none';
document.getElementById('cf1').style.display='none';
document.getElementById('cf2').style.display='none';
document.getElementById('cf3').style.display='none';
document.getElementById('cf4').style.display='none';
document.getElementById('df1').style.display='none';
document.getElementById('df2').style.display='none';
document.getElementById('df3').style.display='none';
document.getElementById('df4').style.display='none';
document.getElementById('ef1').style.display='none';
document.getElementById('ef2').style.display='none';
document.getElementById('ef3').style.display='none';
document.getElementById('ef4').style.display='none';
document.getElementById('ff1').style.display='none';
document.getElementById('ff2').style.display='none';
document.getElementById('ff3').style.display='none';
document.getElementById('ff4').style.display='none';
document.getElementById('gf1').style.display='none';
document.getElementById('gf2').style.display='none';
document.getElementById('gf3').style.display='none';
document.getElementById('gf4').style.display='none';
document.getElementById('hf1').style.display='none';
document.getElementById('hf2').style.display='none';
document.getElementById('hf3').style.display='none';
document.getElementById('hf4').style.display='none';
document.getElementById('if1').style.display='none';
document.getElementById('if2').style.display='none';
document.getElementById('if3').style.display='none';
document.getElementById('if4').style.display='none';
document.getElementById('jf1').style.display='none';
document.getElementById('jf2').style.display='none';
document.getElementById('jf3').style.display='none';
document.getElementById('jf4').style.display='none';
document.getElementById('kf1').style.display='none';
document.getElementById('kf2').style.display='none';
document.getElementById('kf3').style.display='none';
document.getElementById('kf4').style.display='none';
document.getElementById('lf1').style.display='none';
document.getElementById('lf2').style.display='none';
document.getElementById('lf3').style.display='none';
document.getElementById('lf4').style.display='none';
document.getElementById('mf1').style.display='none';
document.getElementById('mf2').style.display='none';
document.getElementById('mf3').style.display='none';
document.getElementById('mf4').style.display='none';
document.getElementById('nf1').style.display='none';
document.getElementById('nf2').style.display='none';
document.getElementById('nf3').style.display='none';
document.getElementById('nf4').style.display='none';
document.getElementById('of1').style.display='none';
document.getElementById('of2').style.display='none';
document.getElementById('of3').style.display='none';
document.getElementById('of4').style.display='none';
document.getElementById('pf1').style.display='none';
document.getElementById('pf2').style.display='none';
document.getElementById('pf3').style.display='none';
document.getElementById('pf4').style.display='none';
document.getElementById('qf1').style.display='none';
document.getElementById('qf2').style.display='none';
document.getElementById('qf3').style.display='none';
document.getElementById('qf4').style.display='none';
document.getElementById('rf1').style.display='none';
document.getElementById('rf2').style.display='none';
document.getElementById('rf3').style.display='none';
document.getElementById('rf4').style.display='none';
document.getElementById('sf1').style.display='none';
document.getElementById('sf2').style.display='none';
document.getElementById('sf3').style.display='none';
document.getElementById('sf4').style.display='none';
document.getElementById('tf1').style.display='none';
document.getElementById('tf2').style.display='none';
document.getElementById('tf3').style.display='none';
document.getElementById('tf4').style.display='none';

document.getElementById('div1').style.display='none';
document.getElementById('div4').style.display='none';
}

function startexam()
{
document.getElementById('div2').style.display='none';
document.getElementById('div1').style.display='block';

timer1();
}

function timer1()
{
if(xt>=0)
 {
  document.getElementById('tm').innerHTML = xt;
  timer=setTimeout("timer1()",60000);
  xt--;
 }
 else if(xt<0)
 {
 clearTimeout(timer);
 showresult();
 }

}

function hide5()
{
document.getElementById('af1').style.display='none';
document.getElementById('af2').style.display='none';
document.getElementById('bf1').style.display='none';
document.getElementById('bf2').style.display='none';
document.getElementById('cf1').style.display='none';
document.getElementById('cf2').style.display='none';
document.getElementById('df1').style.display='none';
document.getElementById('df2').style.display='none';
document.getElementById('ef1').style.display='none';
document.getElementById('ef2').style.display='none';
document.getElementById('ff1').style.display='none';
document.getElementById('ff2').style.display='none';
document.getElementById('gf1').style.display='none';
document.getElementById('gf2').style.display='none';
document.getElementById('hf1').style.display='none';
document.getElementById('hf2').style.display='none';
document.getElementById('if1').style.display='none';
document.getElementById('if2').style.display='none';
document.getElementById('jf1').style.display='none';
document.getElementById('jf2').style.display='none';
document.getElementById('kf1').style.display='none';
document.getElementById('kf2').style.display='none';
document.getElementById('lf1').style.display='none';
document.getElementById('lf2').style.display='none';
document.getElementById('mf1').style.display='none';
document.getElementById('mf2').style.display='none';
document.getElementById('nf1').style.display='none';
document.getElementById('nf2').style.display='none';
document.getElementById('of1').style.display='none';
document.getElementById('of2').style.display='none';
document.getElementById('pf1').style.display='none';
document.getElementById('pf2').style.display='none';
document.getElementById('qf1').style.display='none';
document.getElementById('qf2').style.display='none';
document.getElementById('rf1').style.display='none';
document.getElementById('rf2').style.display='none';
document.getElementById('sf1').style.display='none';
document.getElementById('sf2').style.display='none';
document.getElementById('tf1').style.display='none';
document.getElementById('tf2').style.display='none';

}

function hide1()
{
document.getElementById('af1').style.display='none';
document.getElementById('af2').style.display='none';
}

function hide2()
{
document.getElementById('bf1').style.display='none';
document.getElementById('bf2').style.display='none';
}

function hide3()
{
document.getElementById('cf1').style.display='none';
document.getElementById('cf2').style.display='none';
}

function hide4()
{
document.getElementById('df1').style.display='none';
document.getElementById('df2').style.display='none';
}

/*function hide5()
{
document.getElementById('ef1').style.display='none';
document.getElementById('ef2').style.display='none';
}*/

function showa1()
{
document.getElementById('af1').style.display='block';
}

function showb1()
{
document.getElementById('bf1').style.display='block';
}

function showc1()
{
document.getElementById('cf1').style.display='block';
}

function showd1()
{
document.getElementById('df1').style.display='block';
}

function showe1()
{
document.getElementById('ef1').style.display='block';
}

function showf1()
{
document.getElementById('ff1').style.display='block';
}

function showg1()
{
document.getElementById('gf1').style.display='block';
}

function showh1()
{
document.getElementById('hf1').style.display='block';
}

function showi1()
{
document.getElementById('if1').style.display='block';
}

function showj1()
{
document.getElementById('jf1').style.display='block';
}

function showk1()
{
document.getElementById('kf1').style.display='block';
}

function showl1()
{
document.getElementById('lf1').style.display='block';
}

function showm1()
{
document.getElementById('mf1').style.display='block';
}

function shown1()
{
document.getElementById('nf1').style.display='block';
}

function showo1()
{
document.getElementById('of1').style.display='block';
}

function showp1()
{
document.getElementById('pf1').style.display='block';
}

function showq1()
{
document.getElementById('qf1').style.display='block';
}

function showr1()
{
document.getElementById('rf1').style.display='block';
}

function shows1()
{
document.getElementById('sf1').style.display='block';
}

function showt1()
{
document.getElementById('tf1').style.display='block';
}



function showa2()
{
document.getElementById('af2').style.display='block';
}

function showb2()
{
document.getElementById('bf2').style.display='block';
}

function showc2()
{
document.getElementById('cf2').style.display='block';
}

function showd2()
{
document.getElementById('df2').style.display='block';
}

function showe2()
{
document.getElementById('ef2').style.display='block';
}

function showf2()
{
document.getElementById('ff2').style.display='block';
}

function showg2()
{
document.getElementById('gf2').style.display='block';
}

function showh2()
{
document.getElementById('hf2').style.display='block';
}

function showi2()
{
document.getElementById('if2').style.display='block';
}

function showj2()
{
document.getElementById('jf2').style.display='block';
}

function showk2()
{
document.getElementById('kf2').style.display='block';
}

function showl2()
{
document.getElementById('lf2').style.display='block';
}

function showm2()
{
document.getElementById('mf2').style.display='block';
}

function shown2()
{
document.getElementById('nf2').style.display='block';
}

function showo2()
{
document.getElementById('of2').style.display='block';
}

function showp2()
{
document.getElementById('pf2').style.display='block';
}

function showq2()
{
document.getElementById('qf2').style.display='block';
}

function showr2()
{
document.getElementById('rf2').style.display='block';
}

function shows2()
{
document.getElementById('sf2').style.display='block';
}

function showt2()
{
document.getElementById('tf2').style.display='block';
}




var q1=0;
var ans1;
function check1(z1)
{
ans1=z1;
q1++;

}


function answer1()
{

if(ans1=="cor")
 {
  if(q1==3)
  {
   mark1=1.66;
  }
  
  else
  {
   mark1=(5/q1);
  }
  document.getElementById('af3').style.display='block';
  document.getElementById('af5').innerHTML=mark1;
  document.getElementById('af4').style.display='block';
  document.getElementById('a11').disabled=true;
  document.getElementById('a12').disabled=true;
  document.getElementById('a13').disabled=true;
  document.getElementById('a14').disabled=true;
  document.getElementById('a15').disabled=true;
  document.getElementById('sub1').disabled=true;
 }
 
 else if(ans1=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }
 
}


var q2=0;
var ans2;
function check2(z1)
{
ans2=z1;
q2++;

}

function answer2()
{

if(ans2=="cor")
 {
  if(q2==3)
  {
   mark2=1.66;
  }
  
  else
  {
   mark2=(5/q2);
  }
  document.getElementById('bf3').style.display='block';
  document.getElementById('bf5').innerHTML=mark2;
  document.getElementById('bf4').style.display='block';
  document.getElementById('b11').disabled=true;
  document.getElementById('b12').disabled=true;
  document.getElementById('b13').disabled=true;
  document.getElementById('b14').disabled=true;
  document.getElementById('b15').disabled=true;
  document.getElementById('sub2').disabled=true; 
 }

 else if(ans2=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 } 
 
}


var q3=0;
var ans3;
function check3(z1)
{
ans3=z1;
q3++;

}

function answer3()
{

if(ans3=="cor")
 {
  if(q3==3)
  {
   mark3=1.66;
  }
  
  else
  {
   mark3=(5/q3);
  }
  document.getElementById('cf3').style.display='block';
  document.getElementById('cf5').innerHTML=mark3;
  document.getElementById('cf4').style.display='block';
  document.getElementById('c11').disabled=true;
  document.getElementById('c12').disabled=true;
  document.getElementById('c13').disabled=true;
  document.getElementById('c14').disabled=true;
  document.getElementById('c15').disabled=true;
  document.getElementById('sub3').disabled=true;
 }

 else if(ans3=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 } 
 
}


var q4=0;
var ans4;
function check4(z1)
{
ans4=z1;
q4++;

}

function answer4()
{

if(ans4=="cor")
 {
  if(q4==3)
  {
   mark4=1.66;
  }
  
  else
  {
   mark4=(5/q4);
  }
  document.getElementById('df3').style.display='block';
  document.getElementById('df5').innerHTML=mark4;
  document.getElementById('df4').style.display='block';
  document.getElementById('d11').disabled=true;
  document.getElementById('d12').disabled=true;
  document.getElementById('d13').disabled=true;
  document.getElementById('d14').disabled=true;
  document.getElementById('d15').disabled=true;
  document.getElementById('sub4').disabled=true;
 }


 else if(ans4=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}


var q5=0;
var ans5;
function check5(y1)
{

ans5=y1;
q5++;

}

function answer5()
{


if(ans5=="cor")
 {
  if(q5==3)
  {
   mark5=1.66;
  }
  
  else
  {
   mark5=(5/q5);
  }
  document.getElementById('ef3').style.display='block';
  document.getElementById('ef5').innerHTML=mark5;
  document.getElementById('ef4').style.display='block';
  document.getElementById('e11').disabled=true;
  document.getElementById('e12').disabled=true;
  document.getElementById('e13').disabled=true;
  document.getElementById('e14').disabled=true;
  document.getElementById('e15').disabled=true;
  document.getElementById('sub5').disabled=true;
 }


 else if(ans5=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q6=0;
var ans6;
function check6(z1)
{
ans6=z1;
q6++;

}

function answer6()
{

if(ans6=="cor")
 {
  if(q6==3)
  {
   mark6=1.66;
  }
  
  else
  {
   mark6=(5/q6);
  }
  document.getElementById('ff3').style.display='block';
  document.getElementById('ff5').innerHTML=mark6;
  document.getElementById('ff4').style.display='block';
  document.getElementById('f11').disabled=true;
  document.getElementById('f12').disabled=true;
  document.getElementById('f13').disabled=true;
  document.getElementById('f14').disabled=true;
  document.getElementById('f15').disabled=true;
  document.getElementById('sub6').disabled=true;
 }


 else if(ans6=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q7=0;
var ans7;
function check7(z1)
{
ans7=z1;
q7++;

}

function answer7()
{

if(ans7=="cor")
 {
  if(q7==3)
  {
   mark7=1.66;
  }
  
  else
  {
   mark7=(5/q7);
  }
  document.getElementById('gf3').style.display='block';
  document.getElementById('gf5').innerHTML=mark7;
  document.getElementById('gf4').style.display='block';
  document.getElementById('g11').disabled=true;
  document.getElementById('g12').disabled=true;
  document.getElementById('g13').disabled=true;
  document.getElementById('g14').disabled=true;
  document.getElementById('g15').disabled=true;
  document.getElementById('sub7').disabled=true;
 }


 else if(ans7=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q8=0;
var ans8;
function check8(z1)
{
ans8=z1;
q8++;

}

function answer8()
{

if(ans8=="cor")
 {
  if(q8==3)
  {
   mark8=1.66;
  }
  
  else
  {
   mark8=(5/q8);
  }
  document.getElementById('hf3').style.display='block';
  document.getElementById('hf5').innerHTML=mark8;
  document.getElementById('hf4').style.display='block';
  document.getElementById('h11').disabled=true;
  document.getElementById('h12').disabled=true;
  document.getElementById('h13').disabled=true;
  document.getElementById('h14').disabled=true;
  document.getElementById('h15').disabled=true;
  document.getElementById('sub8').disabled=true;
 }


 else if(ans8=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q9=0;
var ans9;
function check9(z1)
{
ans9=z1;
q9++;

}

function answer9()
{

if(ans9=="cor")
 {
  if(q9==3)
  {
   mark9=1.66;
  }
  
  else
  {
   mark9=(5/q9);
  }
  document.getElementById('if3').style.display='block';
  document.getElementById('if5').innerHTML=mark9;
  document.getElementById('if4').style.display='block';
  document.getElementById('i11').disabled=true;
  document.getElementById('i12').disabled=true;
  document.getElementById('i13').disabled=true;
  document.getElementById('i14').disabled=true;
  document.getElementById('i15').disabled=true;
  document.getElementById('sub9').disabled=true;
 }


 else if(ans9=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q10=0;
var ans10;
function check10(z1)
{
ans10=z1;
q10++;

}

function answer10()
{

if(ans10=="cor")
 {
  if(q10==3)
  {
   mark10=1.66;
  }
  
  else
  {
   mark10=(5/q10);
  }
  document.getElementById('jf3').style.display='block';
  document.getElementById('jf5').innerHTML=mark10;
  document.getElementById('jf4').style.display='block';
  document.getElementById('j11').disabled=true;
  document.getElementById('j12').disabled=true;
  document.getElementById('j13').disabled=true;
  document.getElementById('j14').disabled=true;
  document.getElementById('j15').disabled=true;
  document.getElementById('sub10').disabled=true;
 }


 else if(ans10=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q11=0;
var ans11;
function check11(z1)
{
ans11=z1;
q11++;

}

function answer11()
{

if(ans11=="cor")
 {
  if(q11==3)
  {
   mark11=1.66;
  }
  
  else
  {
   mark11=(5/q11);
  }
  document.getElementById('kf3').style.display='block';
  document.getElementById('kf5').innerHTML=mark11;
  document.getElementById('kf4').style.display='block';
  document.getElementById('k11').disabled=true;
  document.getElementById('k12').disabled=true;
  document.getElementById('k13').disabled=true;
  document.getElementById('k14').disabled=true;
  document.getElementById('k15').disabled=true;
  document.getElementById('sub11').disabled=true;
 }


 else if(ans11=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q12=0;
var ans12;
function check12(z1)
{
ans12=z1;
q12++;

}

function answer12()
{

if(ans12=="cor")
 {
  if(q12==3)
  {
   mark12=1.66;
  }
  
  else
  {
   mark12=(5/q12);
  }
  document.getElementById('lf3').style.display='block';
  document.getElementById('lf5').innerHTML=mark12;
  document.getElementById('lf4').style.display='block';
  document.getElementById('l11').disabled=true;
  document.getElementById('l12').disabled=true;
  document.getElementById('l13').disabled=true;
  document.getElementById('l14').disabled=true;
  document.getElementById('l15').disabled=true;
  document.getElementById('sub12').disabled=true;
 }


 else if(ans12=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q13=0;
var ans13;
function check13(z1)
{
ans13=z1;
q13++;

}

function answer13()
{

if(ans13=="cor")
 {
  if(q13==3)
  {
   mark13=1.66;
  }
  
  else
  {
   mark13=(5/q13);
  }
  document.getElementById('mf3').style.display='block';
  document.getElementById('mf5').innerHTML=mark13;
  document.getElementById('mf4').style.display='block';
  document.getElementById('m11').disabled=true;
  document.getElementById('m12').disabled=true;
  document.getElementById('m13').disabled=true;
  document.getElementById('m14').disabled=true;
  document.getElementById('m15').disabled=true;
  document.getElementById('sub13').disabled=true;
 }


 else if(ans13=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q14=0;
var ans14;
function check14(z1)
{
ans14=z1;
q14++;

}

function answer14()
{

if(ans14=="cor")
 {
  if(q14==3)
  {
   mark14=1.66;
  }
  
  else
  {
   mark14=(5/q14);
  }
  document.getElementById('nf3').style.display='block';
  document.getElementById('nf5').innerHTML=mark14;
  document.getElementById('nf4').style.display='block';
  document.getElementById('n11').disabled=true;
  document.getElementById('n12').disabled=true;
  document.getElementById('n13').disabled=true;
  document.getElementById('n14').disabled=true;
  document.getElementById('n15').disabled=true;
  document.getElementById('sub14').disabled=true;
 }


 else if(ans14=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q15=0;
var ans15;
function check15(z1)
{
ans15=z1;
q15++;

}

function answer15()
{

if(ans15=="cor")
 {
  if(q15==3)
  {
   mark15=1.66;
  }
  
  else
  {
   mark15=(5/q15);
  }
  document.getElementById('of3').style.display='block';
  document.getElementById('of5').innerHTML=mark15;
  document.getElementById('of4').style.display='block';
  document.getElementById('o11').disabled=true;
  document.getElementById('o12').disabled=true;
  document.getElementById('o13').disabled=true;
  document.getElementById('o14').disabled=true;
  document.getElementById('o15').disabled=true;
  document.getElementById('sub15').disabled=true;
 }


 else if(ans15=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q16=0;
var ans16;
function check16(z1)
{
ans16=z1;
q16++;

}

function answer16()
{

if(ans16=="cor")
 {
  if(q16==3)
  {
   mark16=1.66;
  }
  
  else
  {
   mark16=(5/q16);
  }
  document.getElementById('pf3').style.display='block';
  document.getElementById('pf5').innerHTML=mark16;
  document.getElementById('pf4').style.display='block';
  document.getElementById('p11').disabled=true;
  document.getElementById('p12').disabled=true;
  document.getElementById('p13').disabled=true;
  document.getElementById('p14').disabled=true;
  document.getElementById('p15').disabled=true;
  document.getElementById('sub16').disabled=true;
 }


 else if(ans16=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q17=0;
var ans17;
function check17(z1)
{
ans17=z1;
q17++;

}

function answer17()
{

if(ans17=="cor")
 {
  if(q17==3)
  {
   mark17=1.66;
  }
  
  else
  {
   mark17=(5/q17);
  }
  document.getElementById('qf3').style.display='block';
  document.getElementById('qf5').innerHTML=mark17;
  document.getElementById('qf4').style.display='block';
  document.getElementById('q11').disabled=true;
  document.getElementById('q12').disabled=true;
  document.getElementById('q13').disabled=true;
  document.getElementById('q14').disabled=true;
  document.getElementById('q15').disabled=true;
  document.getElementById('sub17').disabled=true;
 }


 else if(ans17=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q18=0;
var ans18;
function check18(z1)
{
ans18=z1;
q18++;

}

function answer18()
{

if(ans18=="cor")
 {
  if(q18==3)
  {
   mark18=1.66;
  }
  
  else
  {
   mark18=(5/q18);
  }
  document.getElementById('rf3').style.display='block';
  document.getElementById('rf5').innerHTML=mark18;
  document.getElementById('rf4').style.display='block';
  document.getElementById('r11').disabled=true;
  document.getElementById('r12').disabled=true;
  document.getElementById('r13').disabled=true;
  document.getElementById('r14').disabled=true;
  document.getElementById('r15').disabled=true;
  document.getElementById('sub18').disabled=true;
 }


 else if(ans18=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q19=0;
var ans19;
function check19(z1)
{
ans19=z1;
q19++;

}

function answer19()
{

if(ans19=="cor")
 {
  if(q19==3)
  {
   mark19=1.66;
  }
  
  else
  {
   mark19=(5/q19);
  }
  document.getElementById('sf3').style.display='block';
  document.getElementById('sf5').innerHTML=mark19;
  document.getElementById('sf4').style.display='block';
  document.getElementById('s11').disabled=true;
  document.getElementById('s12').disabled=true;
  document.getElementById('s13').disabled=true;
  document.getElementById('s14').disabled=true;
  document.getElementById('s15').disabled=true;
  document.getElementById('sub19').disabled=true;
 }


 else if(ans19=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}

var q20=0;
var ans20;
function check20(z1)
{
ans20=z1;
q20++;

}

function answer20()
{

if(ans20=="cor")
 {
  if(q20==3)
  {
   mark20=1.66;
  }
  
  else
  {
   mark20=5/q20;
  }
  document.getElementById('tf3').style.display='block';
  document.getElementById('tf5').innerHTML=mark20;
  document.getElementById('tf4').style.display='block';
  document.getElementById('t11').disabled=true;
  document.getElementById('t12').disabled=true;
  document.getElementById('t13').disabled=true;
  document.getElementById('t14').disabled=true;
  document.getElementById('t15').disabled=true;
  document.getElementById('sub20').disabled=true;
 }


 else if(ans20=="incor")
 {
  alert("Please Submit correct Answer");
 }
 
 else
 {
  alert("Choose the answer first");
 }

}




var remark="";


function showresult()
{

document.getElementById('div3').style.display='none';
document.getElementById('div4').style.display='block';

total_mark=Math.round(mark1+mark2+mark3+mark4+mark5+mark6+mark7+mark8+mark9+mark10+mark11+mark12+mark13+mark14+mark15+mark16+mark17+mark18+mark19+mark20); 

 if(total_mark==100)
 {
   remark="Perfect";
 }


 if(total_mark>80 && total_mark<100)
 { 
  remark="Excellent";
 }
 
 else if(total_mark>60 && total_mark<=80)
 {
  remark="Very Good";
 }
 
 else if(total_mark>50 && total_mark<=50)
 {
  remark="Good";
 }
 
 else if(total_mark>40 && total_mark<=50)
 {
 remark="Average";
 }
 
 else if (total_mark<=40)
 {
 remark="Work Hard";
 }


document.getElementById('mark1').innerHTML=total_mark;
document.getElementById('remark1').innerHTML=remark;


}


function gencert()
{
alert("Your Certificate is generated in new pop up window");
window.location="certificate.html";
}


