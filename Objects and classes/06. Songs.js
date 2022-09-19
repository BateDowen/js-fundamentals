function songs(input) {
    class Song{
        constructor(playlist, name, time) {
            this.playlist = playlist,
            this.name = name,
            this.time = time,
            this.print = () => console.log(this.name);
        }
    }
    let numberOfSongs = input.shift();
    let desiredSong = input.pop();
    let song = [];
    for(let i = 0; i< numberOfSongs; i++){
        let currentInput = input[i];
        let currArr = currentInput.split('_');
        let currSong = new Song(currArr[0], currArr[1], currArr[2]);
        song.push(currSong);
    }
    if (desiredSong === "all") {
        song.forEach(s => s.print);
    } else{
        song
         .filter(s => s.playlist === desiredSong)
         .forEach(s => s.print())
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])