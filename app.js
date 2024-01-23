const btnPopMobileMenu = document.querySelector('.btn-menu');
const btnBack = document.querySelector('.btn-back');
const dimed = document.querySelector('.dimed');

const toggleMobileMenu = () => {
    document.querySelector('.menu-mobile').classList.toggle('on');
};

btnPopMobileMenu.addEventListener('click', toggleMobileMenu);
btnBack.addEventListener('click', toggleMobileMenu);
dimed.addEventListener('click', toggleMobileMenu);

const btnSubscribe = document.querySelector('.btn-subscribe');
const btnOkHodu = document.querySelector('.btn-okhodu');
const dimedBlack = document.querySelector('.dimed-black');

const toggleThanksSubscribe = () => {
    document.querySelector('.modal-thanks').classList.toggle('on');
}

btnSubscribe.addEventListener('click', toggleThanksSubscribe);
btnOkHodu.addEventListener('click', toggleThanksSubscribe);
dimedBlack.addEventListener('click', toggleThanksSubscribe);







//pictsum api 이용해야함
const imageList = document.getElementById('image-list');
const showMore = document.getElementById('show-more');

let pageToFetch = 0;

const fetchImages = async () => {
    const apiUrl = `https://picsum.photos/v2/list?page=1&limit=100`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const loadSize = 6;
        const end = pageToFetch + loadSize;

        for (let i = pageToFetch; i < end && i < data.length; i++) {
            const img = document.createElement('img');
            img.src = data[i].download_url;
            img.alt = `Image ${i + 1}`;
            imageList.appendChild(img);
        }

        pageToFetch = end;

        if (pageToFetch >= data.length) {
            continueBox.classList.add('hidden');
        }
    } catch (error) {
        console.error('오류 발생 데이터가 없음. ', error);
    }
};

const throttling = (callback, delay) => {
    let timer = null;
    return () => {
        console.log(timer);

        if (timer === null) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay);
        }
    };
};


// 특정 사진 순번 출력
const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 15 && pageToFetch <= 30 ) {
        throttleFetchImages();
    }
};

// 2초
const throttleFetchImages = throttling(fetchImages, 2000);


// Initial load
fetchImages();

showMore.addEventListener('click', fetchImages);

window.addEventListener('scroll', infiniteScroll);








const posX = 37.566826;
const posY = 126.9786567;

const mapContainer = document.getElementById('map'), 
    mapOption = {
        center: new kakao.maps.LatLng(posX, posY), 
        level: 4 
    };

const map = new kakao.maps.Map(mapContainer, mapOption); 


const markerPosition  = new kakao.maps.LatLng(posX, posY);


const marker = new kakao.maps.Marker({
    position: markerPosition
});


marker.setMap(map);














