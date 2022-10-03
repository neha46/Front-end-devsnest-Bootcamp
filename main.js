
/*let num1=10;
let num2=20;
if(num1>num2)
{
      console.log(num1 +" is greater than"+num2);
}
else if(num2>num1)
{
console.log(num2 +" is greater than"+ num1);
}
else
{
      console.log("both are equal");
}
*/
function Comapre_num(num1,num2)//definition
{
      if(num1>num2)
{
      console.log(num1 +" is greater than"+num2);
}
else if(num2>num1)
{
console.log(num2 +" is greater than"+ num1);
}
else
{
      console.log("both are equal");
}
}

      Comapre_num(10,20);//calling of function

      //function for returning something
      function sum(first_n,second_n)
      {
            return first_n+second_n;
      }
      //function calling
      const s=sum(10,20);
      console.log(" sum is "+ s);


      //function expression syntax
      const add=function add_number(n1,n2)
      {
            return n1+n2;
      }
      console.log( "sum is "+add(2,3));

      //anonymous function
      const sum1=function(n1,n2)
      {
            return n1+n2;
      }
      console.log( "sum is "+sum1(2,3));

     //creating object
     const person={
      first_name:"neha",
      last_name:"mishra",
      age:20,
      print:function()
      {
            console.log("this function is a property of an onejct");
      }};
     console.log(person.first_name , person.last_name , person.age);