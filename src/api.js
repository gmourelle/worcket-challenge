const timeOut = fn =>
  new Promise(resolve => setTimeout(() => resolve(fn), 1500));

export default {
  items: {
    fetch: () => timeOut(JSON.parse(localStorage.getItem("items") || "[]")),
    update: items =>
      timeOut(localStorage.setItem("items", JSON.stringify(items)))
  }
};
