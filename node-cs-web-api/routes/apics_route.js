var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const jsonData =
    {
        photos: {
            page: 1, pages: 10, perpage: 100,
            photo: [
                { id: "1", title: "url", url_s: "https://cache.yisu.com/upload/information/20200318/90/6271.jpg" },
                { id: "2", title: "url2", url_s: "https://cache.yisu.com/upload/information/20200318/90/6272.jpg" },
                { id: "3", title: "趣味广告", url_s: "https://w-img.bigbigwork.cn/words-topic-img/d523a6d8-ba39-47ee-a1b1-530bdcaaf313.png?x-oss-process=style/pc_webp" },
                { id: "4", title: "色彩艺术", url_s: "https://w-img.bigbigwork.cn/words-topic-img/d41aef4c-1a6f-4359-b690-bcb34352c8d3.png?x-oss-process=style/pc_webp" },
                { id: "5", title: "雅致景观", url_s: "https://w-img.bigbigwork.cn/words-topic-img/79971c84-d03b-493a-96c4-848857cf6f6f.jpg?x-oss-process=style/pc_webp" },
                { id: "6", title: "胶片", url_s: "https://w-img.bigbigwork.cn/words-topic-img/932205f6-3174-4d13-b59e-a4704b51f68c.png?x-oss-process=style/pc_webp" },
                { id: "7", title: "漫游", url_s: "https://w-img.bigbigwork.cn/words-topic-img/224e5d0a-8965-4b88-9ee7-08bac78435b1.jpg?x-oss-process=style/pc_webp" },
            ]
        }
    }
    // {
    //     sites: [
    //         { "name": "菜鸟教程", "url": "www.runoob.com" },
    //         { "name": "google", "url": "www.google.com" },
    //         { "name": "微博", "url": "www.weibo.com" }
    //     ]
    // }
    res.json(jsonData)

    // const path = '/json/rapi.json';
    // // 使用res.sendFile发送文件
    // res.sendFile(path, { root: __dirname + '/../public' }, function (err) {
    //     if (err) {
    //         if (err.status === 404) {
    //             // 如果文件未找到，返回404错误
    //             return res.status(404).send('File not found');
    //         }
    //         // 其他错误类型，传递给Express的错误处理中间件
    //         return next(err);
    //     }
    //     // 如果文件发送成功，不需要做其他操作
    // });
});

module.exports = router;