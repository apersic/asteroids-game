class KeyBoardHandler {
  constructor(canvasHandler) {
    this.keys = [];
    this.canvasHandler = canvasHandler;
  }

  handleMultipleKeyPresses(ship, bullets) {
    document.body.addEventListener("keydown", (e) => {
      this.keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", (e) => {
      this.keys[e.keyCode] = false;
      this.handleShoot(e.keyCode, ship, bullets);
    });
  }

  handleMoveShip(ship) {
    // 87 = W
    ship.movingForward = this.keys[87] ?? false;

    // 68 = D
    if (this.keys[68]) {
      ship.rotate(1);
    }
    // 65 = A
    if (this.keys[65]) {
      ship.rotate(-1);
    }
  }

  handleShoot(key, ship, bullets) {
    // 32 = Spacebar
    if (key === 32) {
      bullets.push(new Bullet(ship.noseX, ship.noseY, ship.angle));
    }
  }
}
