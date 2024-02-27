var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_isocr_25mins_1 = new ol.format.GeoJSON();
var features_isocr_25mins_1 = format_isocr_25mins_1.readFeatures(json_isocr_25mins_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isocr_25mins_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isocr_25mins_1.addFeatures(features_isocr_25mins_1);
var lyr_isocr_25mins_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isocr_25mins_1, 
                style: style_isocr_25mins_1,
                interactive: true,
                title: '<img src="styles/legend/isocr_25mins_1.png" /> isocr_25mins'
            });
var format_isocr_15mins_2 = new ol.format.GeoJSON();
var features_isocr_15mins_2 = format_isocr_15mins_2.readFeatures(json_isocr_15mins_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isocr_15mins_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isocr_15mins_2.addFeatures(features_isocr_15mins_2);
var lyr_isocr_15mins_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isocr_15mins_2, 
                style: style_isocr_15mins_2,
                interactive: true,
                title: '<img src="styles/legend/isocr_15mins_2.png" /> isocr_15mins'
            });
var format_ustorage_3 = new ol.format.GeoJSON();
var features_ustorage_3 = format_ustorage_3.readFeatures(json_ustorage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ustorage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ustorage_3.addFeatures(features_ustorage_3);
var lyr_ustorage_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ustorage_3, 
                style: style_ustorage_3,
                interactive: false,
                title: '<img src="styles/legend/ustorage_3.png" /> ustorage'
            });
var format_Disuelto_4 = new ol.format.GeoJSON();
var features_Disuelto_4 = format_Disuelto_4.readFeatures(json_Disuelto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disuelto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disuelto_4.addFeatures(features_Disuelto_4);
var lyr_Disuelto_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Disuelto_4, 
                style: style_Disuelto_4,
                interactive: false,
                title: '<img src="styles/legend/Disuelto_4.png" /> Disuelto'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_isocr_25mins_1.setVisible(true);lyr_isocr_15mins_2.setVisible(true);lyr_ustorage_3.setVisible(true);lyr_Disuelto_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_isocr_25mins_1,lyr_isocr_15mins_2,lyr_ustorage_3,lyr_Disuelto_4];
lyr_isocr_25mins_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_isocr_15mins_2.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ustorage_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Disuelto_4.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_isocr_25mins_1.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_isocr_15mins_2.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_ustorage_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Disuelto_4.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_isocr_25mins_1.set('fieldLabels', {'ID': 'header label', 'CENTER_LON': 'header label', 'CENTER_LAT': 'header label', 'AA_MINS': 'header label', 'AA_MODE': 'header label', 'TOTAL_POP': 'header label', });
lyr_isocr_15mins_2.set('fieldLabels', {'ID': 'header label', 'CENTER_LON': 'header label', 'CENTER_LAT': 'header label', 'AA_MINS': 'header label', 'AA_MODE': 'header label', 'TOTAL_POP': 'header label', });
lyr_ustorage_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Disuelto_4.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_Disuelto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});