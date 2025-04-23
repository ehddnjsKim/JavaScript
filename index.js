const apiKey =
  "TOzUiqu+esY3FMU5yuNsX3HGY9eJGn8mgBw0fxraR+Lep2aB5Hf6DQ1cQNp47xuIrGxGZNv0Qx2EyE1tshrcQQ==";

function initMap() {
  const mapContainer = document.getElementById("map");
  const mapOptions = {
    center: new kakao.maps.LatLng(37.5665, 126.978),
    level: 9,
  };
  window.map = new kakao.maps.Map(mapContainer, mapOptions);
}

const locations = {
  서울경기: { lat: 37.5665, lng: 126.978 },
  강원: { lat: 37.8854, lng: 127.7298 },
  충북: { lat: 36.6357, lng: 127.4914 },
  대전충남: { lat: 36.3504, lng: 127.3845 },
};

async function moveMap() {
  const selectedRegion = document.getElementById("region").value;
  const location = locations[selectedRegion];

  if (!location) return alert("잘못된 지역 선택!");

  const coords = new kakao.maps.LatLng(location.lat, location.lng);
  window.map.setCenter(coords);

  if (window.marker) window.marker.setMap(null);
  window.marker = new kakao.maps.Marker({ map: window.map, position: coords });

  await getRoadkillData(selectedRegion);
}

async function getRoadkillData(region) {
  const apiUrl = `https://api.publicdata.go.kr/roadkill?region=${region}&serviceKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("로드킬 사고 데이터:", data);

    plotRoadkillOnMap(data);
  } catch (error) {
    console.error("공공데이터 가져오기 오류:", error);
  }
}

function plotRoadkillOnMap(data) {
  data.forEach((item) => {
    const coords = new kakao.maps.LatLng(item.latitude, item.longitude);
    const marker = new kakao.maps.Marker({ position: coords, map: window.map });

    const infowindow = new kakao.maps.InfoWindow({
      content: `<div style="padding:5px;">${item.description}</div>`,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(window.map, marker);
    });
  });
}

window.onload = initMap;
