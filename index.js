new Vue({
    el: '#app',
    data: {
        timer: null,
        showBanner: 1,
        hoverBanner: false,
        lan: 0,
        bannerList: [
            {
                url: '',
                img: 'images/carousel/b1.png',
            },
            {
                url: '',
                img: 'images/carousel/b2.png',
            },
            {
                url: '',
                img: 'images/carousel/b3.png',
            },
            {
                url: '',
                img: 'images/carousel/b4.png',
            },
        ],
        gameList: [
            {
                url: '',
                img: 'images/game/game1.png',
            },
            {
                url: '',
                img: 'images/game/game2.png',
            },
            {
                url: '',
                img: 'images/game/game3.png',
            },
            {
                url: '',
                img: 'images/game/game4.png',
            },
            {
                url: '',
                img: 'images/game/game5.png',
            },
            {
                url: '',
                img: 'images/game/comming-soon.png',
                comming: true,
            },
        ],
        languageList: [
            {
                img: 'images/lan/cn-icon.png',
            }
        ]
    },
    created() {
        this.timer = setInterval(this.carousel, 4000);
    },
    methods: {
        carousel: function () {
            if (!this.hoverBanner) {
                this.showBanner = (this.showBanner === this.bannerList.length - 1) ? 0 : this.showBanner + 1;
            }
        },
        clickBanner: function (showBanner) {
            clearInterval(this.timer);
            this.showBanner = showBanner;
            this.timer = setInterval(this.carousel, 4000);
        }
    }
})