const circleCollisionHandler = (p1X, p1Y, p1Radius, p2X, p2Y, p2Radius) => {
  const radiusSum = p1Radius + p2Radius;
  const differenceX = p1X - p2X;
  const differenceY = p1Y - p2Y;

  if (
    radiusSum > Math.sqrt(differenceX * differenceX + differenceY * differenceY)
  ) {
    return true;
  }

  return false;
};
