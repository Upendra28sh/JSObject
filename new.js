function myfun (name,marks)
{
    this.name=name
    this.marks=marks
}

let student1=new myfun("upen", 90)
let student2=new myfun("abhi",92)

console.log(student1)
console.log(student2)
