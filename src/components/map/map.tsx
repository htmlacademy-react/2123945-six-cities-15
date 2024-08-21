import { OfferPreview } from '../../shared-types';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';

export type MapProps = {
  cards: OfferPreview[];
  activeCard?: OfferPreview | null;
  className?: string;
};

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({
  className = 'cities__map',
  cards,
  activeCard,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map && cards.length > 0) {
      const markerLayer = layerGroup().addTo(map);
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });
        marker
          .setIcon(
            activeCard && activeCard.id === card.id ? currentIcon : defaultIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cards, activeCard]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default Map;
