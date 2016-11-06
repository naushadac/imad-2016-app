function hidebody()
{

document.getElementById('p11').style.display='none';
document.getElementById('p21').style.display='none';
document.getElementById('p31').style.display='none';
document.getElementById('p41').style.display='none';
document.getElementById('p51').style.display='none';
document.getElementById('p61').style.display='none';
document.getElementById('p71').style.display='none';
document.getElementById('p12').style.display='none';
document.getElementById('p22').style.display='none';
document.getElementById('p32').style.display='none';
document.getElementById('p42').style.display='none';
document.getElementById('p52').style.display='none';
document.getElementById('p62').style.display='none';
document.getElementById('p72').style.display='none';

document.getElementById('f2').style.display='none';
document.getElementById('f3').style.display='none';
document.getElementById('f4').style.display='none';
document.getElementById('f5').style.display='none';
document.getElementById('f6').style.display='none';
document.getElementById('f7').style.display='none';
document.getElementById('f8').style.display='none';
document.getElementById('f9').style.display='none';

}

function show()
{

document.getElementById('p11').style.display='none';
document.getElementById('p21').style.display='none';
document.getElementById('p31').style.display='none';
document.getElementById('p41').style.display='none';
document.getElementById('p51').style.display='none';
document.getElementById('p61').style.display='none';
document.getElementById('p71').style.display='none';
document.getElementById('p12').style.display='none';
document.getElementById('p22').style.display='none';
document.getElementById('p32').style.display='none';
document.getElementById('p42').style.display='none';
document.getElementById('p52').style.display='none';
document.getElementById('p62').style.display='none';
document.getElementById('p72').style.display='none';

//var retwind;

var n11=document.getElementById('n11').value;
var n22=document.getElementById('n22').value;
var n33=document.getElementById('n33').value;
var n44=document.getElementById('n44').value;
var n55=document.getElementById('n55').value;
var n66=document.getElementById('n66').value;
var n77=document.getElementById('n77').value;

if(n11.length===0 )
 {
 document.getElementById('p12').style.display='block';
 }
if(n22.length===0 )
 {
 document.getElementById('p22').style.display='block';
 }
if(n33.length===0 )
 {
 document.getElementById('p32').style.display='block';
 }
if(n44.length===0 )
 {
 document.getElementById('p42').style.display='block';
 }
if(n55.length===0 )
 {
 document.getElementById('p52').style.display='block';
 }
if(n66.length===0 )
 {
 document.getElementById('p62').style.display='block';
 }
if(n77.length===0 )
 {
 document.getElementById('p72').style.display='block';
 }

 reg1=/^[0-9]+$/;
 reg2=/^[a-z A-Z @ .]+$/;
 reg3=/^[a-z A-Z 0-9]+$/;
 reg4=/^[0-9 /]+$/;
 reg6=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[azA-z0-9]{2,4}$/;
 
 var reg11=n11.match(reg2);
 var reg22=n22.match(reg2);
 var reg33=n33.match(reg2);
 var reg44=n44.match(reg3);
 var reg55=n55.match(reg1);
 var reg66=n66.match(reg4);
 var reg77=n77.match(reg6);
 
 if(n11!=reg11 )
 {
  if(n11.length!==0) 
   {
  document.getElementById('p11').style.display='block';
   }
 }
 
 
  if(n22!=reg22 && n22.length!==0)
 {
  document.getElementById('p21').style.display='block';
 }
 
  if(n33!=reg33 && n33.length!==0)
 {
  document.getElementById('p31').style.display='block';
 }
 
  if(n44!=reg44 && n44.length!==0)
 {
  document.getElementById('p41').style.display='block';
 }
 
  if(n55!=reg55 && n55.length!==0)
 {
  document.getElementById('p51').style.display='block';
 }
 
  if(n66!=reg66 && n66.length!==0)
 {
  document.getElementById('p61').style.display='block';
 }
 
  if(n77!=reg77 && n77.length!==0)
 {
  document.getElementById('p71').style.display='block';
 }
 
 if(n11==reg11 && n22==reg22 && n33==reg33 && n44==reg44 && n55==reg55 && n66==reg66 && n77==reg77)
 {
 /*newwind=window.open('retstudinfo.html','','height=700,width=800');
 newwind.document.write("Candidate Information <br/> ");
 newwind.document.write("First Name:"+n11);
 newwind.document.write("<br/>Last Name:"+n22);
 newwind.document.write("<br/>School Name"+n33);
 newwind.document.write("'<br/>'Class:"+n44);
 newwind.document.write("<br/>Roll No:"+n55);
 newwind.document.write("<br/>Date of Birth:"+n66);
 newwind.document.write("<br/>E-mail id:"+n77);
 */
 
 alert("hrllf");
 window.location="/ui/selectsubject1.html";
 
 }
 
}


function  show1()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f2').style.display='block';
 
}

function  show2()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f3').style.display='block';
}

function  show3()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f4').style.display='block';
}

function  show4()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f5').style.display='block';
}

function  show5()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f6').style.display='block';
}

function  show6()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f7').style.display='block';
}

function  show7()
{
 document.getElementById('f1').style.display='none';
 document.getElementById('f8').style.display='block';
}

function  hide1()
{
 document.getElementById('f2').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide2()
{
 document.getElementById('f3').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide3()
{
 document.getElementById('f4').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide4()
{
 document.getElementById('f5').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide5()
{
 document.getElementById('f6').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide6()
{
 document.getElementById('f7').style.display='none';
 document.getElementById('f1').style.display='block';
}

function  hide7()
{
 document.getElementById('f8').style.display='none';
 document.getElementById('f1').style.display='block';
}
