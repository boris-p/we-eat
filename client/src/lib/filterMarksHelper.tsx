export type Marks = { [s: number]: string };

// a small helper function to generace marks
// not doing any input validations here
export const genMarks = (min = 0, max = 10, step = 1): Marks => {
  const marks: Marks = {};
  let currentMark = min;
  while (currentMark <= max) {
    marks[currentMark] = currentMark.toString();
    currentMark += step;
  }
  marks[max] = max.toString();
  return marks;
};
