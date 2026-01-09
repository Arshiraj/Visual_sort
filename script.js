let array = [];
const size = 30;
const container = document.getElementById("bars-container");

function generateArray() {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 300) + 50);
  }
  renderArray();
}

function renderArray(highlightIndices = []) {
  container.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    if (highlightIndices.includes(index)) {
      bar.style.background = "tomato";
    }
    container.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Bubble Sort Animation
async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      renderArray([j, j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      await sleep(50);
    }
  }
  renderArray();
}

// Selection Sort Animation
async function selectionSort() {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      renderArray([minIndex, j]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      await sleep(50);
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  renderArray();
}

// Start sort based on selected algorithm
function startSort() {
  const algorithm = document.getElementById("algorithm").value;
  if (algorithm === "bubble") bubbleSort();
  else if (algorithm === "selection") selectionSort();
}

// Shuffle and render
function shuffleArray() {
  generateArray();
}

// Initial load
generateArray();
