let obj = 
{
    a:10,
    a1:20,
    b:"abc",
    c: function ()
    {
        let ob1=
        {
            p:"hi",
            q:true
        }
        return ob1
    },
    d: function()
    {
        return this.a+this.a1;
    }
}

obj.e=[24,"Morning"]

let x=obj.c()

console.log(x)
console.log("d:"+obj.d())