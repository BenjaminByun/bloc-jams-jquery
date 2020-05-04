class Helper {
  playPauseAndUpdate (song = this.player.playPause) {
    player.playPause();
    }

  }
}

const helper = new Helper();

// playPause (song = this.currentlyPlaying) {
//   if (this.currentlyPlaying !== song) {
//     // Stop the currently playing sound file (even if nothing is playing)
//     this.soundObject.stop();
//     // Clear classes on the song that's currently playing
//     this.currentlyPlaying.element.removeClass('playing paused');
//
//     // Update our currentlyPlaying and playState properties
//     this.currentlyPlaying = song;
//     this.playState = 'stopped';
//     this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
//   }
//   if (this.playState === 'paused' || this.playState === 'stopped') {
//     this.soundObject.setVolume( this.volume );
//     this.soundObject.play();
//     this.playState = 'playing';
//     this.currentlyPlaying.element.removeClass('paused').addClass('playing');
//   } else {
//     this.soundObject.pause();
//     this.playState = 'paused';
//     this.currentlyPlaying.element.removeClass('playing').addClass('paused');
//   }
// }


// Add a method to the Helper class called
// playPauseAndUpdate that takes one parameter, song.
// The method should call player.playPause
// (passing the song parameter) and update the total time.
// Replace every call of player.playPause
// with helper.playPauseAndUpdate.
