var config = {
    style: 'mapbox://styles/scrolli/clqmiw36s00q601o3fmrl4czl',
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
                center: [33.74970, 31.71947],
                zoom: 3.74,
                pitch: 0,
                bearing: 0
            },
        
        },
        {
            id: 'gaza-isgal',
            alignment: 'right',
            title: 'İsrail kuzeyden girdi!',
            image: '',
            description: 'Gazze'nin kuzey bölgesinden giren birlikler kısa sürede şehrin dış mahallelerini işgal etti.',
            location: {
                center: [34.44691, 31.46607],
                zoom: 10.89,
                pitch: 36.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gaza-isgal',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'gaza-isgal',
                    opacity: 0
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
            onChapterExit: [
                {
                    layer: 'gaza-port',
                    opacity: 1
                }
            ]
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
