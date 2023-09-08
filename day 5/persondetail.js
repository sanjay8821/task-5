// Write a “person” class to hold all the details.

class person{
    constructor(name,age,rollno,phoneno,collage,degree){
      this.name=name;
      this.age=age;
      this.rollno=rollno;
      this.phoneno=phoneno;
      this.collage=collage;
      this.degree=degree;
    }
  }
  person1=new person("sanjay",22,25,7856485987,"mgruniversity" ,"bsc")
  console.log(person1.age);