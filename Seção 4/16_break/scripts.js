let nome = "Gabriel";

for(i = 0; i < 10; i = i + 1) {

   if(i == 3){ 
      nome = "Gabriela";
   }

   if(i == 5 && nome == "Gabriela") {
      console.log("O nome é Gabriela, pode parar");
      break;
   }

   console.log(i);

}