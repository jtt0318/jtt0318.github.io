document.addEventListener('DOMContentLoaded', init)
var baseUrl = '';

var heart, bgtop, intro, pic, tip, mask, tipbox, close, watch;

var info = [{
    url: 'img/hongbao.png',
    msg: '关注“酷音”公众号，回复关键词“女生节”，获取支付宝红包口令，先到先得哦~宝宝们快行动吧！'
}, {
    url: 'img/5.gif',
    msg: '深沉浓郁，但飘忽不定，若即若离，让人忍不住想接近，又很难驾驭。成熟稳重的大叔请拿出真心来靠近她哦~'
}, {
    url: 'img/2.gif',
    msg: '能污能萌，沉溺二次元世界无法自拔进入她的世界，了解二次元这个神秘的世界，陪她一起中二吧！'
}, {
    url: 'img/8.jpg',
    msg: '肤白貌美，胸大细腰大长腿！超亮眼！努力变成高富帅，或者祈祷女神啥时候变瞎就好了……'
}, {
    url: 'img/4.jpg',
    msg: '俗称X冷淡？自带冷漠气质，你知道女唐僧吗？慢慢接近，给她无微不至的关怀与温柔，让她不要有任何压力~'
}, {
    url: 'img/7.jpg',
    msg: '出口成章，对着新换的窗帘都能作诗一首~读书读书读书！让她感受到你的高逼格，如此才称得上是才子佳人呀~'
}, {
    url: 'img/6.gif',
    msg: '单手拆灯泡，徒手修电脑，本来想做大哥的女人，没想到成了大哥！以柔克刚，其实她内心很温柔，渴望被理解，摸头杀绝对是必胜法宝！'
}, {
    url: 'img/1.jpg',
    msg: '自带特有荷尔蒙，帅气御姐，一出场便自带光环，气场强大！只有双商极高的人才能入她法眼，或者你帅过吴彦祖也可以~'
}, {
    url: 'img/3.gif',
    msg: '简直就是误入人间的小精灵！天马行空的想法可爱到炸裂！老司机请减速！这里有一个可爱的小仙女想跟你谈个恋爱啊喂！'
}]

var tracker = {
    src: '37女神节活动页',
    act: {
        click: '-点击'
    },
    label: {
        block: '-色块'
    }
}

var indexImg = [
    'img/bgtop.jpg',
    'img/tipsfont.png',
    'img/shouzhi.png'
];

var lazyImg = info.map(function(e) {
    return e.url
});


function init() {
    initData();
    preload();
}

function preload() {
    // 预加载首页图片
    loadImage(indexImg, 3, function() {
        // 加载剩余图片
        loadImage(lazyImg);

        heart.style.opacity = '0';
        heart.addEventListener('webkitTransitionEnd', function() {
            heart.classList.remove('infinite');
            heart.classList.remove('beat');
            bgtop.setAttribute('src', bgtop.getAttribute('srcbak'));

        });

        bgtop.onload = function() {
            bgtop.classList.add('fadeInDown');
            intro.classList.add('bounceInLeft');
            heart.style.opacity = '1';
            guide.style.opacity = '1';
        }

        bindEvent();
    })
}

function loadImage(imgArr, timeout, callback) {
    if (!imgArr) {
        callback && callback();
        return;
    }

    var hasCall = false,
        count = 0;
    var img;
    for (var index = 0, length = imgArr.length; index < length; index++) {
        img = new Image();
        img.src = imgArr[index];
        img.onload = function() {
            count++;
            if (count == length) {
                !hasCall && callback && callback();
                hasCall = true;
            }
        }
    }
    if (timeout) {
        setTimeout(function() {
            !hasCall && callback && callback();
            hasCall = true;
        }, timeout * 1000)
    }
}

function bindEvent() {
    guide.addEventListener('click', function() {
        guide.style.opacity = '0'
        guide.addEventListener('webkitTransitionEnd', function() {
            guide.style.display = 'none';
        })
    })

    var sharps = document.querySelectorAll('.sharp')
    for (var i = 0, l = sharps.length; i < l; i++) {
        sharps[i].addEventListener('click', function() {
            var data = info[this.dataset.n];
            pic.style.backgroundImage = 'url(' + data.url + ')';
            tip.innerHTML = data.msg;

            showMask();
            tipbox.classList.remove('zoomOut');
            tipbox.classList.add('zoomIn');

            try {
                _hmt.push(['_trackEvent', tracker.src, tracker.src + tracker.act.click, tracker.src + tracker.act.click + tracker.label.block]);
            } catch (e) {

            }

        })
    }

    close.addEventListener('click', function() {
        tipbox.classList.remove('zoomIn');
        tipbox.classList.add('zoomOut');
        setTimeout(hideMask, 0);
    })

    watch.addEventListener('click', function() {
        location.href = "weixin://"
    })

}

function initData() {

    pic = document.querySelector('#pic');
    tip = document.querySelector('#tip');
    mask = document.querySelector('#mask');
    tipbox = document.querySelector('#tipbox');
    close = document.querySelector('#close');
    watch = document.querySelector('#watch');
    heart = document.querySelector('#heart');
    bgtop = document.querySelector('#bgtop');
    intro = document.querySelector('#intro');

    info.sort(function() {
        return 0.5 - Math.random();
    })

    if (isWeiXin()) {
        watch.style.display = 'none';
    }
}

function showMask() {
    mask.removeAttribute('style');
    document.body.addEventListener('touchmove', preventMove)
}

function hideMask() {
    mask.style.display = 'none';
    document.body.removeEventListener('touchmove', preventMove)
}

function preventMove() {
    try {
        event.preventDefault();
    } catch (e) {

    }
}

function isWeiXin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}