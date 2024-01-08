function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divide by zero it's not possible");
    }
    return a / b;
  } catch (e) {
    console.log(e.message);
  }
}

divide(10, 0);