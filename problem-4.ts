type Circle = {
  radius: number;
  shape: "circle";
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};
type Shape = Circle | Rectangle;

const calculateShapeArea = (params: Shape): number | undefined => {
  if (params.shape === "circle") {
    const areaOfCircle = Math.PI * params.radius * params.radius;
    return areaOfCircle;
  }
  if (params.shape === "rectangle") {
    const areaOfRectangle = params.height * params.width;
    return areaOfRectangle;
  }
};
