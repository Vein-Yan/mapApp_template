import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import VectorLayer from 'ol/layer/vector';
import Vector from 'ol/source/vector';
import Point from 'ol/geom/point';
import Feature from 'ol/feature';
import Style from 'ol/style/style';
import Circle from 'ol/style/circle';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import Icon from 'ol/style/icon'
import proj from 'ol/proj';

import 'ol/ol.css';
import '../css/map.css';

import icon from '../img/icon.png';


let circleStyle = new Style({
    image: new Circle({
        radius: 7,
        snapToPixel: false,
        fill: new Fill({
            color: 'black'
        }),
        stroke: new Stroke({
            color: 'white',
            width: 2
        })
    })
});
let markerStyle = new Style({
    image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: icon
    })
})

let vector = new Vector();
let vectorLayer = new VectorLayer({
    source: vector
});

let map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=7'
            })
        }),
        vectorLayer
    ],
    view: new View({
        center:  [105, 34],
        zoom: 3,
        minZoom: 3, 
        maxZoom: 20,
    })
});

let points = [
    [105, 34],
    [120, 23],
    [115, 23]
]
for (let i = 0, len = points.length; i < len; i++) {
    let point = points[i];
    let geometry = new Point(point);
    geometry = geometry.transform('EPSG:4326', 'EPSG:3857');
    let feature = new Feature({
        geometry: geometry
    });
    feature.setStyle(markerStyle);
    vector.addFeature(feature);
}

export default map;