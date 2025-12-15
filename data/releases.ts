import { Records } from "@/types/records";

export const releases: Records = [
    {
        id: 111,
        name: 'Animal Magic',
        artists: ['Bonobo'],
        price: 29.99,
        label: 'Ninja Tune',
        releaseDate: '2004',
        genre: ['Downtempo'],
        coverImage: '/imagetemp.jpg',
        formats: ['LP'],
        description: 'One of Bonobo\'s seminal works, blending lush soundscapes with intricate beats.',
        tracklist: [
            { title: 'Kiara', duration: '5:45', preview: '/audios/SF1117929-01-01-01.mp3' },
            { title: 'Flutter', preview: '/audios/SF1117929-01-01-01.mp3' },
            { title: 'Days to Come', duration: '4:12' }
        ]
   },    {
        id: 112,
        name: 'Seminal Magic',
        artists: ['Lobobo'],
        price: 29.99,
        label: 'Ninja Tune',
        releaseDate: '2004',
        genre: ['Trance'],
        coverImage: '/imagetemp.jpg',
        formats: ['LP'],
        description: 'One of Bonobo\'s seminal works, blending lush soundscapes with intricate beats.',
        tracklist: [
            { title: 'Kiara', duration: '5:45', preview: '/audios/SF1117929-01-01-01.mp3' },
            { title: 'Flutter', preview: '/audios/SF1127151-01-01-01.mp3' },
            { title: 'Days to Come', duration: '4:12' }
        ]
   },    {
        id: 113,
        name: 'Liminal Magic',
        artists: ['DJ Shadow'],
        price: 29.99,
        label: 'NinjaPlus',
        releaseDate: '2004',
        genre: ['Trance', 'Electro'],
        coverImage: '/imagetemp.jpg',
        formats: ['LP'],
        description: 'One of Bonobo\'s seminal works, blending lush soundscapes with intricate beats.',
        tracklist: [
            { title: 'Kiara', duration: '5:45', preview: '/audios/SF1127151-01-01-01.mp3' },
            { title: 'Days to Come', duration: '4:12' }
        ]
   }
]