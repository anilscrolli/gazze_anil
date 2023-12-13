var config = {
    style: 'mapbox://styles/mapbox/standard',
    accessToken: 'pk.eyJ1Ijoic2Nyb2xsaSIsImEiOiJjbHEybDh1YjcwMjgwMmtxd2Roc3J3YWt3In0.uycKijDciND-jcNknmYP1g',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Story of Gaza',
    subtitle: 'A Journey Through Its Landscapes and Heritage',
    byline: 'Curated by Scrolli',
    footer: 'Source: Scrolli',
    chapters: [
        {

            id: 'gaza-city',
            alignment: 'right',
            title: 'Vibrant Streets of Gaza City',
            image: '',
            description: 'Explore the bustling streets and vibrant markets that form the heartbeat of Gaza City.',
            location: {
                center: [34.4450, 31.5225],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -10.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-port',
            alignment: 'right',
            title: 'Historical Port of Gaza',
            image: '',
            description: 'Discover the historical Port of Gaza, a gateway to the Mediterranean Sea and a symbol of resilience.',
            location: {
                center: [34.4575, 31.5050],
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
            title: 'Al-Azhar University: A Beacon of Learning',
            image: '',
            description: 'Delve into Al-Azhar University, a center of academic excellence and cultural exchange in Gaza.',
            location: {
                center: [34.4411, 31.5111],
                zoom: 17.00,
                pitch: 50.00,
                bearing: -5.00
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-beaches',
            alignment: 'right',
            title: 'Serene Beaches of Gaza',
            image: '',
            description: 'Experience the serene beauty of Gaza’s beaches, offering a moment of peace and reflection.',
            location: {
                center: [34.4648, 31.5019],
                zoom: 15.50,
                pitch: 30.00,
                bearing: 10.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-unesco',
            alignment: 'right',
            title: 'UNESCO Heritage Sites in Gaza',
            image: '',
            description: 'Discover the rich history of Gaza through its UNESCO Heritage Sites, showcasing the region’s cultural and historical depth.',
            location: {
                center: [34.4521, 31.5169],
                zoom: 17.00,
                pitch: 50.00,
                bearing: 20.00
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'gaza-agriculture',
            alignment: 'right',
            title: 'Agriculture in Gaza: The Green Plains',
            image: '',
            description: 'Gaza’s agriculture is a testament to the resilience and resourcefulness of its people. Explore the green plains that symbolize hope and sustenance.',
            location: {
                center: [34.4724, 31.4992],
                zoom: 15.00,
                pitch: 40.00,
                bearing: 30.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
