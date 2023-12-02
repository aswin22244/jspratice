
 //APPPLY METHORD IT ARGUMENTS ACCEPT AS AN ARRAY
const details ={
                institution:'self Stack',
                domain:'full stack'
                }
      
function ApplyMethod(x) {
    console.log(Hello ${x} You are Currentlty working in ${this.institution} in the ${this.domain} domain Is It?);
  }

ApplyMethod.apply(details, ['Midhu Mon']); 
 