import audioCorrectSource from "../assets/Audio/move_elevator.mp3";
import audioWrongSource from "../assets/Audio/wrong-Type.mp3";

const playAudioSound = (type: "correct" | "incorrect") => {
  if (type === "correct") {
    const audio = new Audio(audioCorrectSource);
    audio.play();
  } else {
    const audio = new Audio(audioWrongSource);
    audio.play();
  }
};

export default playAudioSound;
