var config = {
    style: 'mapbox://styles/mapbox/standard',
    accessToken: 'pk.eyJ1Ijoic2Nyb2xsaSIsImEiOiJjbHEybDh1YjcwMjgwMmtxd2Roc3J3YWt3In0.uycKijDciND-jcNknmYP1g',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Story of Gaza',
    subtitle: 'A Journey Through Its Landscapes and Heritage',
    byline: 'Curated by Scrolli',
    footer: 'Source: Scrolli',
    chapters: [
        {

            id: 'gaza-city',
            alignment: 'right',
            title: 'Gazze Şehri Nasıl Bir Yerdi?',
            image: '',
            description: 'Bir zamanlar canlı sokakları ve pazarlarıyla tanınan Gazze Şehri, tarihi ve kültürel bir zenginliğe sahipti.',
            location: {
                center: [34.4450, 31.5225],
                zoom: 12.00,
                pitch: 45.00,
                bearing: -10.00
            },
            onChapterEnter: [
                {
                    layer: 'gaza-city',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'gaza-port',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-port',
            alignment: 'right',
            title: 'Kaybolan Tarihi Liman',
            image: '',
            description: 'Gazze’nin tarihi limanı, savaş öncesi dönemde şehrin ekonomik ve kültürel hayatının kalbiydi.',
            location: {
                center: [34.431067, 31.525214],
                zoom: 18.00,
                pitch: 40.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gaza-port',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'al-azhar-university',
            alignment: 'right',
            title: 'Eğitimin Işığı: El-Ezher Üniversitesi',
            image: '',
            description: 'Savaş öncesinde Gazze’nin eğitim merkezi olan El-Ezher Üniversitesi, gençler için umut ve ilham kaynağıydı.',
            location: {
                center: [34.4397788, 31.5149879],
                zoom: 17.00,
                pitch: 50.00,
                bearing: -5.00
            },
            onChapterEnter: [
                {
                    layer: 'al-azhar-university',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'al-azhar-university',
                    opacity: 0
                }
            ]
        },
        {id: 'gaza-beaches',
        alignment: 'right',
        title: 'Gazze’nin Huzur Veren Sahilleri',
        image: '',
        description: 'Gazze’nin sahilleri, savaş öncesi halkın buluşma noktasıydı. Şimdi ise sakinliğin ve geçmişin hüzünlü anılarının bir simgesi.',
        location: {
            center: [34.36186, 31.45668],
            zoom: 15.50,
            pitch: 30.00,
            bearing: 10.00
            },
            onChapterEnter: [
                {
                    layer: 'gaza-beaches',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'gaza-beaches',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-unesco',
            alignment: 'right',
            title: 'Kaybolan Miras: Gazze’nin UNESCO Alanları',
            image: '',
            description: 'Gazze’nin UNESCO Dünya Mirası Alanları, şehrin zengin tarihini ve kültürünü sergiliyordu. Bugün bu alanlar savaşın yıkıcı etkilerini yansıtıyor.',
            location: {
                center: [34.4521, 31.5169],
                zoom: 17.00,
                pitch: 50.00,
                bearing: 20.00
            },
            onChapterEnter: [
                {
                    layer: 'gaza-unesco',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'gaza-unesco',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-agriculture',
            alignment: 'right',
            title: 'Yeşeren Umutlar: Gazze’nin Tarlaları',
            image: '',
            description: 'Gazze’nin tarım alanları, savaş öncesi halkın geçim kaynağıydı. Artık bu tarlalar, savaşın ve zorlukların tanığı olarak duruyor.',
            location: {
                center: [34.4724, 31.4992],
                zoom: 15.00,
                pitch: 40.00,
                bearing: 30.00
            },
            onChapterEnter: [
                {
                    layer: 'gaza-agriculture',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'gaza-agriculture',
                    opacity: 0
                }
            ]
        }
    ]
};
