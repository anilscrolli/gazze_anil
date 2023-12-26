var config = {
    style: 'mapbox://styles/scrolli/clqmiosbr00rf01qwe8a5bo9c',
    accessToken: 'pk.eyJ1Ijoic2Nyb2xsaSIsImEiOiJjbHE0NjRyMjAwMXF2Mm1udmVuajcxZXMzIn0.7B_-qv4yez-sXAhdGrQ0wA',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Kaynak: scrolli.co',
    chapters: [
        {
           
            location: {
                center: [35.45012, 33.11681],
                zoom: 2.70,
                pitch: 45.00,
                bearing: 1.60
            },
            
        },
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
                    layer: 'gaza-city',
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
                center: [34.43098, 31.52349],
                zoom: 18.00,
                pitch: 50.00,
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
                center: [34.44072, 31.51130],
                zoom: 18.00,
                pitch: 50.00,
                bearing: -141.60
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
        {
            id: 'gaza-beaches',
            alignment: 'right',
            title: 'Gazze’nin Huzur Veren Sahilleri',
            image: '',
            description: 'Gazze’nin sahilleri, savaş öncesi halkın buluşma noktasıydı. Şimdi ise sakinliğin ve geçmişin hüzünlü anılarının bir simgesi.',
            location: {
                center: [34.42447, 31.51576],
                zoom: 16.50,
                pitch: 50.00,
                bearing: -58.40
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
                zoom: 18.00,
                pitch: 60.00,
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
                center: [34.51936, 31.50836],
                zoom: 15.00,
                pitch: 70.00,
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
