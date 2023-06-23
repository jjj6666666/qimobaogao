var hhh = document.querySelector('.hhh');
        var lis = hhh.querySelectorAll('li');
        var tabs = document.querySelectorAll('.item');
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('data-index', i);    // 给每个li添加一个data-index的自定义属性，值是它们自己在lis中的下标，这个值主要让我们判断我们当前点击的是哪个li从而帮助我们后续修改它对应的div的display值
            lis[i].onclick = function () {
                // 1.第一步，用排他思想先做出用户点击谁就给谁class属性赋值，注意其他没有被点击的都需要操作它们的class值为空，这就是干掉其他人留下我自己的排他思想
                for (var i = 0; i <lis.length; i++) {
                    lis[i].className = '';  // 用循环先将所有人（包括自己）的class类名为空
                }
                // 再单独给自己修改class类名即留下我自己
                this.className = 'current';  // current这个类名的CSS样式是已经写好了的
                
                // 然后上面的tab栏样式好了就要处理第二步就是点击谁就让其对应的下属div显示出来，其他没有被点击的就隐藏，这里主要是需要先知道用户点击的是谁，然后再给对象的div设置display为block即可。还是需用用排他思想来做哦
                // 第二步：根据点击修改div的display属性值
                var index = this.getAttribute('index'); // 获取当前被点击的li的index
                for (var i = 0; i < lis.length; i++) { // 用循环让每个item的display都为none即干掉所有人
                    tabs[i].style.display = 'none';
                }
                // 在tabs中锁定li的index对应的item单独将它的display值改成block即留下我自己
                tabs[index].style.display = 'block';
            }
        }