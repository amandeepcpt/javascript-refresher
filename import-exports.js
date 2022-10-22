export const STUDENT = {
  name: "rahul",
  age: 20,
  id: 1,
};
export const printMyName1 = () => {};
export function printMyName2() {}
// export { student };

// 2 types of imports
// named import - we will write it in different file
import { STUDENT, printMyName1, printMyName2 } from "../fileName";

function sayMyName1() {
  function print() {}
}

function sayMyName2() {}

export default sayMyName1;
export { sayMyName2 };
