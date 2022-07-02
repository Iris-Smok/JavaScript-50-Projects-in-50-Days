let sounds = [
    'applouse', 'boo', 'gasp', 'tada', 'victory', 'wrong'
]

sounds.forEach(sound => {
    let btn = document.createElement('button')
    btn.classList.add('btnn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        let song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}