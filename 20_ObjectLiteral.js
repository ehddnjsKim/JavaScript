const person = {
  name: "김사과",
  age: 20,
  greet: function () {
    console.log("안녕하세요, 저는 " + this.name + "입니다.");
  },
};

person.greet();
