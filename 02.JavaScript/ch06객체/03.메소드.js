let obj = 
{
    // 속성(attribute)
    name: '사과',
    price: 1000,
    // 메소드(method)
    print: function()
    {
        console.log(`${this.name}의 가격은 ${this.price} 입니다`);
    }
};
obj.print();