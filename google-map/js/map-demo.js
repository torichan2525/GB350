/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
async function initMap() {
  const contentString = `
    <div>
      <h1>タイトル</h1>
      <div>
        <p>
        ここに詳細を記載
        </p>
        <p>
          Attribution: Uluru,
          <a href="https://GB350.com">
            https://GB350.com
          </a>
          (last visited June 22, 2009).
        </p>
      </div>
    </div>`;
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  const marker = document.querySelector('gmp-advanced-marker');
  marker.addEventListener('gmp-click', () => {
    infoWindow.open({anchor: marker});
  });
}

