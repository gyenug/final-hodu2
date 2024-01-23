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










//pictsum api 이미지 기능
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
        console.error('데이터를 가져오는데 문제가 발생했습니다. ', error);
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

// 2초의 딜레이 시간 주기
const throttleFetchImages = throttling(fetchImages, 2000);

// 더보기 버튼을 누르면 무한 스크롤 하다가 특정 개수를 출력 완료하면 멈추고 이후에는 더보기 버튼 눌러서 추가로 출력
const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 15 && pageToFetch <= 30 ) {
        throttleFetchImages();
    }
};

// Initial load
fetchImages();

showMore.addEventListener('click', fetchImages);

window.addEventListener('scroll', infiniteScroll);







// 지도좌표
const posX = 33.4424896;
const posY = 126.5714226;

const mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(posX, posY), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
const markerPosition  = new kakao.maps.LatLng(posX, posY);

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);














