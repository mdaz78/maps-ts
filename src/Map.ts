interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
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

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: latitude,
        lng: longitude,
      },
    });
  }
}
