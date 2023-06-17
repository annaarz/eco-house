//map
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [53.902295, 27.561783],
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
    }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/123.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([53.907214, 27.586361], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/qwe.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

    myPlacemark3 = new ymaps.Placemark([53.901197, 27.547111], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/123.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });

    myPlacemark4 = new ymaps.Placemark([53.892956, 27.556296], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/asd.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });

    myPlacemark5 = new ymaps.Placemark([53.893826, 27.562072], {
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'img/asd.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });

    myPlacemark6 = new ymaps.Placemark([53.889511, 27.539421], {
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'img/123.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });
    myPlacemark9 = new ymaps.Placemark([53.898843, 27.548425], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/zxc.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });
    myPlacemark8 = new ymaps.Placemark([53.890381, 27.534268], {
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'img/zxc.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });
    myPlacemark7 = new ymaps.Placemark([53.899947, 27.555050], {
    }, {

        iconLayout: 'default#image',
        iconImageHref: 'img/zxc.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
});