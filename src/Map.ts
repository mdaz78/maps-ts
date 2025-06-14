export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
}

interface MapOptions {
  zoom: number;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string, options: MapOptions) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: options.zoom,
        zoomControl: true,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable) {
    const { latitude, longitude } = mappable.location;

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: latitude,
        lng: longitude,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
