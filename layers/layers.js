ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([723808.805166, 930935.710084, 739490.624672, 937812.669912]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SOILTYPES_2 = new ol.format.GeoJSON();
var features_SOILTYPES_2 = format_SOILTYPES_2.readFeatures(json_SOILTYPES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_SOILTYPES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOILTYPES_2.addFeatures(features_SOILTYPES_2);
var lyr_SOILTYPES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOILTYPES_2, 
                style: style_SOILTYPES_2,
                popuplayertitle: 'SOIL TYPES',
                interactive: false,
    title: 'SOIL TYPES<br />\
    <img src="styles/legend/SOILTYPES_2_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOILTYPES_2_1.png" /> Hill Soil<br />\
    <img src="styles/legend/SOILTYPES_2_2.png" /> Red Soil<br />' });
var format_PANCHAYATHBOUNDARY_3 = new ol.format.GeoJSON();
var features_PANCHAYATHBOUNDARY_3 = format_PANCHAYATHBOUNDARY_3.readFeatures(json_PANCHAYATHBOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_PANCHAYATHBOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCHAYATHBOUNDARY_3.addFeatures(features_PANCHAYATHBOUNDARY_3);
var lyr_PANCHAYATHBOUNDARY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCHAYATHBOUNDARY_3, 
                style: style_PANCHAYATHBOUNDARY_3,
                popuplayertitle: 'PANCHAYATH BOUNDARY',
                interactive: false,
    title: 'PANCHAYATH BOUNDARY<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_0.png" /> <br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_1.png" /> ALATHOOR<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_2.png" /> ANAMUKHAM<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_3.png" /> ANCODE<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_4.png" /> ARUVIKKARA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_5.png" /> ARUVIPPURAM<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_6.png" /> AYIROOR<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_7.png" /> CHULLIYOOR<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_8.png" /> MANALUVILA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_9.png" /> MARAYAMUTTOM<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_10.png" /> PALKULANGARA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_11.png" /> PAZHAMALA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_12.png" /> PERUMKADAVILA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_13.png" /> PULIMANCODE<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_14.png" /> THATHAMALA<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_15.png" /> THATHIYOOR<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_16.png" /> THRIPPALAVOOR<br />\
    <img src="styles/legend/PANCHAYATHBOUNDARY_3_17.png" /> VADAKARA<br />' });
var format_GEOMORPHOLOGY_4 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_4 = format_GEOMORPHOLOGY_4.readFeatures(json_GEOMORPHOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_GEOMORPHOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_4.addFeatures(features_GEOMORPHOLOGY_4);
var lyr_GEOMORPHOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_4, 
                style: style_GEOMORPHOLOGY_4,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_0.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_2.png" /> Residual Hill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_3.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_4.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_5.png" /> Water Body<br />' });
var format_GEOLOGY_5 = new ol.format.GeoJSON();
var features_GEOLOGY_5 = format_GEOLOGY_5.readFeatures(json_GEOLOGY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_GEOLOGY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_5.addFeatures(features_GEOLOGY_5);
var lyr_GEOLOGY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_5, 
                style: style_GEOLOGY_5,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_5_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_5_1.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_5_2.png" /> Migmatite Complex<br />' });
var format_BUILDINGS_6 = new ol.format.GeoJSON();
var features_BUILDINGS_6 = format_BUILDINGS_6.readFeatures(json_BUILDINGS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BUILDINGS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_6.addFeatures(features_BUILDINGS_6);
var lyr_BUILDINGS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGS_6, 
                style: style_BUILDINGS_6,
                popuplayertitle: 'BUILDINGS',
                interactive: false,
                title: '<img src="styles/legend/BUILDINGS_6.png" /> BUILDINGS'
            });
var format_Buildingg_7 = new ol.format.GeoJSON();
var features_Buildingg_7 = format_Buildingg_7.readFeatures(json_Buildingg_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Buildingg_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingg_7.addFeatures(features_Buildingg_7);
var lyr_Buildingg_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingg_7, 
                style: style_Buildingg_7,
                popuplayertitle: 'Buildingg',
                interactive: false,
                title: '<img src="styles/legend/Buildingg_7.png" /> Buildingg'
            });
var format_ROADS_8 = new ol.format.GeoJSON();
var features_ROADS_8 = format_ROADS_8.readFeatures(json_ROADS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_ROADS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_8.addFeatures(features_ROADS_8);
var lyr_ROADS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_8, 
                style: style_ROADS_8,
                popuplayertitle: 'ROADS',
                interactive: false,
                title: '<img src="styles/legend/ROADS_8.png" /> ROADS'
            });
var format_DRAINAGE_9 = new ol.format.GeoJSON();
var features_DRAINAGE_9 = format_DRAINAGE_9.readFeatures(json_DRAINAGE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_DRAINAGE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_9.addFeatures(features_DRAINAGE_9);
var lyr_DRAINAGE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_9, 
                style: style_DRAINAGE_9,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_9.png" /> DRAINAGE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SOILTYPES_2.setVisible(true);lyr_PANCHAYATHBOUNDARY_3.setVisible(true);lyr_GEOMORPHOLOGY_4.setVisible(true);lyr_GEOLOGY_5.setVisible(true);lyr_BUILDINGS_6.setVisible(true);lyr_Buildingg_7.setVisible(true);lyr_ROADS_8.setVisible(true);lyr_DRAINAGE_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_SOILTYPES_2,lyr_PANCHAYATHBOUNDARY_3,lyr_GEOMORPHOLOGY_4,lyr_GEOLOGY_5,lyr_BUILDINGS_6,lyr_Buildingg_7,lyr_ROADS_8,lyr_DRAINAGE_9];
lyr_SOILTYPES_2.set('fieldAliases', {});
lyr_PANCHAYATHBOUNDARY_3.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORPHOLOGY_4.set('fieldAliases', {});
lyr_GEOLOGY_5.set('fieldAliases', {});
lyr_BUILDINGS_6.set('fieldAliases', {});
lyr_Buildingg_7.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_ROADS_8.set('fieldAliases', {});
lyr_DRAINAGE_9.set('fieldAliases', {});
lyr_SOILTYPES_2.set('fieldImages', {});
lyr_PANCHAYATHBOUNDARY_3.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMORPHOLOGY_4.set('fieldImages', {});
lyr_GEOLOGY_5.set('fieldImages', {});
lyr_BUILDINGS_6.set('fieldImages', {});
lyr_Buildingg_7.set('fieldImages', {'source': '', 'height': '', });
lyr_ROADS_8.set('fieldImages', {});
lyr_DRAINAGE_9.set('fieldImages', {});
lyr_SOILTYPES_2.set('fieldLabels', {});
lyr_PANCHAYATHBOUNDARY_3.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_GEOMORPHOLOGY_4.set('fieldLabels', {});
lyr_GEOLOGY_5.set('fieldLabels', {});
lyr_BUILDINGS_6.set('fieldLabels', {});
lyr_Buildingg_7.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_ROADS_8.set('fieldLabels', {});
lyr_DRAINAGE_9.set('fieldLabels', {});
lyr_DRAINAGE_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});