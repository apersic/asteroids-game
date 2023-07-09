class KeyBoardHandler {
  constructor() {
    this.keys = [];
  }

  handleMultipleKeyPresses() {
    document.body.addEventListener("keydown", (e) => {
      this.keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", (e) => {
      this.keys[e.keyCode] = false;
    });
  }
}
