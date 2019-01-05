//model
var model = {
    currentCat = null,
    //all cats objects
    cats: [
        {
            clickCount = 0,
            name: 'cat a',
            src : 'image/434164568_fea0ad4013_z.jpg',
            link: 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {   
            clickCount = 0,
            name: 'cat b',
            src : 'image/4154543904_6e2428c421_z.jpg',
            link: 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount = 0,
            name: 'cat c',
            src : 'image/22252709_010df3379e_z.jpg',
            link: 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount = 0,
            name: 'cat d',
            src : 'image/1413379559_412a540d29_z.jpg',
            link: 'https://www.flickr.com/photos/malfet/1413379559'
        }

    ]

}

//hub
var hub = {
    init: function(){
        //put the first cat input current cat for first time render
        model.currentCat = model.cats[0];

        //init
        catList.init();
        catView.init();
    },
    getCurrentCat: function(){
        return model.currentCat;
    },
    setCurrentCat: function(index){
        model.currentCat.index;
    },
    getCats: function(){
        return model.cats;
    },
    addCounter: function(){
        model.currentCat.clickCount++;
        catView.render();
    }

}
//view
var carView = {
    init: function(){
        this.catElem = document.querySelector('.cat');
        this.catNameElem = document.querySelector('.name');
        this.catImgElem = document.querySelector('.img');
        this.countElem = document.querySelector('.count');

        this.catImgElem.addEventListener('click',function(){
            hub.addCounter();
        });
        this.render();
    },
    render: function(){
        var currentCat = hub.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImgElem.src = currentCat.src;
    }

}