
const Mock = require('mockjs');

var Random = Mock.Random
Mock.mock('number',{
    'list|1-20':[{
        'title':Random.csentence(),
        "content|": Random.csentence(),
        'imgSrc':Random.image('200x200',Random.hex(), Random.csentence())
    }] 
})



//'#'+Math.floor(Math.random()*0xffffff).toString(16)  随机生成颜色

// :Random.image(Random.hex(), 'png', Random.csentence())
