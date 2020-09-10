const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Mytery of love',
            artist: 'Sufjan Stevens',
            url: 'http://m801.music.126.net/20200910134520/00e511dcfd1b2531ecdd3a334e653ad3/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2339973122/919f/5758/d006/2ec0f4621374e07a86c011a8a69e4658.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'Visions of Gideon',
            artist: 'Silu Wang',
            url: 'http://m10.music.126.net/20200910135327/1fb973d954b5c29ef59b297cec5e4e82/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3928930255/8238/bfa2/9892/8786ad4e30eb062496e130d7f0d4920a.mp3',
            cover: 'cover2.jpg',
        }
    ]
});