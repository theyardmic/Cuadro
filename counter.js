export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `You have saved ${counter} Kes`
  }
  element.addEventListener('click', () => setCounter(counter + 1000))
  setCounter(0)
}
