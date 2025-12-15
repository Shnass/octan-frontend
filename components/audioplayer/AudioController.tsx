type AudioAPI = {
  play?: (src: string) => void;
  pause?: () => void;
  toggle?: () => void;
};

let api: AudioAPI = {};

export function registerPlayer(playerApi: AudioAPI) {
  api = playerApi;
}

export function playTrack(src: string) {
  api.play?.(src);
}

export function pauseTrack() {
  api.pause?.();
}