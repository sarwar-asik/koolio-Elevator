import audioLocalSource from "../assets/Audio/move_elevator.mp3";


const playAudioSound = () => {
  const audio = new Audio(audioLocalSource);
  audio.play();
};

export default playAudioSound;
