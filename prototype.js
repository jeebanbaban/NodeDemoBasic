//--------------Function prototyep------------

var user = function(){
    this.name="Jeeban"
    this.mobile="9614886787"
}
//Set age and get name from getName function USING PROTOTYPE
user.prototype={
    age:25,
    getName:function(){
        return this.name
    }
}

var u = new user()
console.log(u)
console.log(u.age)
console.log(u.getName())

