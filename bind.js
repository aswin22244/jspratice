//   //BIND METHOD
var file = {     
            movie:'kaithi' 
           };
 
const file = ["kaithi","leo"]

  function BindMethod(x) {
    console.log(x,"Acted in",this[1],"very well");
  }

  const newVariable = BindMethod.bind(file);

  newVariable('Karthi');