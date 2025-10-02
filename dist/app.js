// src/app.ts
var letterKeyCoords = {
  "capital-a": {
    leading: [{ x: 6.25, y: 95 }, { x: 50, y: 50 }, { x: 95, y: 5 }],
    trailing: [{ x: 92.5, y: 95 }, { x: 92.5, y: 5 }, { x: 92.5, y: 50 }]
  },
  "capital-b": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 50 }, { x: 5, y: 5 }],
    trailing: [{ x: 45, y: 95 }, { x: 45, y: 5 }]
  },
  "capital-c": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 5 }],
    trailing: [{ x: 40, y: 95 }, { x: 40, y: 5 }]
  },
  "capital-d": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 5 }],
    trailing: [{ x: 45, y: 95 }, { x: 45, y: 5 }]
  },
  "capital-e": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 47.5 }, { x: 5, y: 5 }],
    trailing: [{ x: 60, y: 95 }, { x: 60, y: 5 }]
  },
  "capital-f": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 47.5 }, { x: 5, y: 5 }],
    trailing: [{ x: 60, y: 5 }, { x: 5, y: 95 }]
  },
  "capital-g": {
    leading: [{ x: 20, y: 95 }, { x: 5, y: 55 }, { x: 20, y: 5 }],
    trailing: [{ x: 40, y: 95 }, { x: 40, y: 5 }]
  },
  "capital-h": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 47.5 }, { x: 5, y: 5 }],
    trailing: [{ x: 60, y: 95 }, { x: 60, y: 5 }, { x: 60, y: 47.5 }]
  },
  "capital-i": {
    leading: [{ x: 28.5, y: 95 }, { x: 28.5, y: 5 }],
    trailing: [{ x: 28.5, y: 95 }, { x: 28.5, y: 5 }]
  },
  "capital-j": {
    leading: [{ x: 15, y: 95 }, { x: 35, y: 70 }],
    trailing: [{ x: 45, y: 5 }, { x: 35, y: 95 }]
  },
  "capital-k": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 50 }, { x: 5, y: 5 }],
    trailing: [{ x: 46, y: 95 }, { x: 46, y: 5 }]
  },
  "capital-l": {
    leading: [{ x: 5, y: 5 }, { x: 5, y: 95 }],
    trailing: [{ x: 55, y: 95 }]
  },
  "capital-m": {
    leading: [{ x: 5, y: 95 }],
    trailing: [{ x: 195, y: 95 }, { x: 195, y: 5 }]
  },
  "capital-n": {
    leading: [{ x: 5, y: 5 }, { x: 5, y: 95 }],
    trailing: [{ x: 95, y: 95 }, { x: 95, y: 5 }]
  },
  "capital-o": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 5 }],
    trailing: [{ x: 60, y: 95 }, { x: 60, y: 5 }]
  },
  "capital-p": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 55 }, { x: 5, y: 5 }],
    trailing: [{ x: 45, y: 5 }, { x: 45, y: 55 }, { x: 5, y: 5 }]
  },
  "capital-q": {
    leading: [{ x: 20, y: 80 }, { x: 20, y: 5 }],
    trailing: [{ x: 80, y: 95 }, { x: 60, y: 5 }]
  },
  "capital-r": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 55 }, { x: 5, y: 5 }],
    trailing: [{ x: 60, y: 95 }, { x: 45, y: 5 }, { x: 45, y: 55 }]
  },
  "capital-s": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 5 }],
    trailing: [{ x: 20, y: 95 }, { x: 60, y: 95 }]
  },
  "capital-t": {
    leading: [{ x: 5, y: 5 }, { x: 50, y: 95 }],
    trailing: [{ x: 95, y: 5 }, { x: 50, y: 95 }]
  },
  "capital-u": {
    leading: [{ x: 5, y: 5 }, { x: 20, y: 95 }],
    trailing: [{ x: 75, y: 5 }, { x: 60, y: 95 }]
  },
  "capital-v": {
    leading: [{ x: 5, y: 5 }, { x: 5, y: 95 }],
    trailing: [{ x: 95, y: 5 }, { x: 5, y: 5 }]
  },
  "capital-w": {
    leading: [{ x: 5, y: 5 }],
    trailing: [{ x: 195, y: 5 }, { x: 95, y: 95 }]
  },
  "capital-x": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 5 }],
    trailing: [{ x: 95, y: 95 }, { x: 95, y: 5 }]
  },
  "capital-y": {
    leading: [{ x: 5, y: 5 }, { x: 50, y: 95 }],
    trailing: [{ x: 95, y: 5 }, { x: 50, y: 95 }]
  },
  "capital-z": {
    leading: [{ x: 5, y: 5 }, { x: 5, y: 95 }],
    trailing: [{ x: 95, y: 95 }, { x: 95, y: 5 }]
  },
  "a": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 45 }],
    trailing: [{ x: 55, y: 95 }, { x: 55, y: 45 }]
  },
  "b": {
    leading: [{ x: 5, y: 5 }, { x: 5, y: 95 }, { x: 5, y: 45 }],
    trailing: [{ x: 40, y: 95 }, { x: 55, y: 80 }]
  },
  "c": {
    leading: [{ x: 15, y: 95 }, { x: 15, y: 45 }],
    trailing: [{ x: 45, y: 95 }, { x: 45, y: 45 }]
  },
  "d": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 45 }],
    trailing: [{ x: 55, y: 5 }, { x: 55, y: 95 }, { x: 55, y: 45 }]
  },
  "e": {
    leading: [{ x: 20, y: 95 }, { x: 15, y: 45 }],
    trailing: [{ x: 55, y: 95 }, { x: 45, y: 45 }]
  },
  "f": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }, { x: 15, y: 10 }],
    trailing: [{ x: 25, y: 45 }, { x: 5, y: 95 }, { x: 25, y: 10 }]
  },
  "g": {
    leading: [{ x: 15, y: 95 }, { x: 15, y: 45 }],
    trailing: [{ x: 55, y: 45 }, { x: 45, y: 95 }]
  },
  "h": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }, { x: 5, y: 5 }],
    trailing: [{ x: 55, y: 60 }, { x: 55, y: 95 }, { x: 40, y: 45 }]
  },
  "i": {
    leading: [{ x: 10, y: 95 }, { x: 10, y: 45 }],
    trailing: [{ x: 10, y: 95 }, { x: 10, y: 45 }]
  },
  "j": {
    leading: [{ x: 35, y: 45 }, { x: 35, y: 95 }],
    trailing: [{ x: 35, y: 45 }, { x: 35, y: 95 }]
  },
  "k": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 65 }, { x: 5, y: 5 }],
    trailing: [{ x: 50, y: 95 }, { x: 45, y: 25 }]
  },
  "l": {
    leading: [{ x: 15, y: 95 }, { x: 5, y: 5 }],
    trailing: [{ x: 25, y: 95 }]
  },
  "m": {
    leading: [{ x: 5, y: 95 }],
    trailing: [{ x: 105, y: 95 }, { x: 105, y: 45 }]
  },
  "n": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }],
    trailing: [{ x: 55, y: 95 }, { x: 35, y: 45 }]
  },
  "o": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 45 }],
    trailing: [{ x: 40, y: 95 }, { x: 40, y: 45 }]
  },
  "p": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }],
    trailing: [{ x: 40, y: 95 }, { x: 40, y: 45 }]
  },
  "q": {
    leading: [{ x: 20, y: 95 }, { x: 20, y: 45 }],
    trailing: [{ x: 55, y: 95 }, { x: 55, y: 45 }]
  },
  "r": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }],
    trailing: [{ x: 45, y: 45 }]
  },
  "s": {
    leading: [{ x: 15, y: 95 }, { x: 15, y: 45 }],
    trailing: [{ x: 55, y: 95 }, { x: 45, y: 45 }]
  },
  "t": {
    leading: [{ x: 5, y: 45 }, { x: 15, y: 95 }, { x: 5, y: 5 }],
    trailing: [{ x: 25, y: 45 }, { x: 25, y: 95 }, { x: 5, y: 5 }]
  },
  "u": {
    leading: [{ x: 5, y: 45 }, { x: 20, y: 95 }],
    trailing: [{ x: 55, y: 45 }, { x: 55, y: 95 }]
  },
  "v": {
    leading: [{ x: 5, y: 45 }, { x: 5, y: 95 }],
    trailing: [{ x: 55, y: 45 }, { x: 5, y: 5 }]
  },
  "w": {
    leading: [{ x: 5, y: 45 }, { x: 5, y: 95 }],
    trailing: [{ x: 105, y: 45 }, { x: 55, y: 95 }]
  },
  "x": {
    leading: [{ x: 5, y: 95 }, { x: 5, y: 45 }],
    trailing: [{ x: 55, y: 45 }, { x: 55, y: 95 }]
  },
  "y": {
    leading: [{ x: 5, y: 45 }, { x: 15, y: 95 }],
    trailing: [{ x: 55, y: 45 }, { x: 45, y: 95 }]
  },
  "z": {
    leading: [{ x: 5, y: 45 }, { x: 5, y: 95 }],
    trailing: [{ x: 55, y: 95 }, { x: 55, y: 45 }]
  }
};
function makeSvgResponsive(svgContent) {
  return svgContent.replace(/<rect([^>]*)fill="white"/, '<rect$1fill="var(--bg-color)"').replace(/<text([^>]*?)>([^<]*)<\/text>/g, '<text$1 fill="var(--text-color)">$2</text>').replace(/<svg([^>]*)/, '<svg$1 class="tile-svg-content"').replace(/stroke="black"/g, 'stroke="var(--text-color)"');
}
function downloadPermutationAsSVG(svgElement, word) {
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `${word.replace(/\s+/g, "-")}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  setTimeout(() => {
    URL.revokeObjectURL(svgUrl);
  }, 100);
}
function shareUrl(word) {
  const bgColorPicker = document.getElementById("bg-color-picker");
  const bgTransparent = document.getElementById("bg-transparent");
  const mainColorPicker = document.getElementById("main-color-picker");
  const bgColor = bgColorPicker ? bgColorPicker.value.slice(1) : "";
  const mainColor = mainColorPicker ? mainColorPicker.value.slice(1) : "";
  const bgTransparentVal = bgTransparent ? bgTransparent.checked ? "true" : "false" : "false";
  const url = new URL(window.location.href);
  url.search = new URLSearchParams({
    word,
    bgColor,
    mainColor,
    bgTransparent: bgTransparentVal
  }).toString();
  navigator.clipboard.writeText(url.toString()).then(() => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3e3);
    }
  }).catch((err) => {
    console.error("Failed to copy URL: ", err);
    alert("Failed to copy the share link to clipboard.");
  });
}
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
function getAllQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};
  urlParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
function replaceSvgColors(svgElement, newStroke, newFill) {
  const elements = svgElement.querySelectorAll("[stroke], [fill]");
  elements.forEach((el) => {
    if (el.hasAttribute("stroke") && el.getAttribute("stroke") !== "none") {
      el.setAttribute("stroke", newStroke);
    }
    if (el.hasAttribute("fill") && el.getAttribute("fill") !== "none") {
      el.setAttribute("fill", newFill);
    }
  });
}
function createChipConnection(chipGroup, leading, letter, offsetX) {
  if (letter === void 0) {
    return;
  }
  const letterKey = letter.letter === letter.letter.toUpperCase() ? `capital-${letter.letter.toLowerCase()}` : letter.letter.toLowerCase();
  const letterCoords = letterKeyCoords[letterKey];
  const coord = leading ? letterCoords.leading[0] : letterCoords.trailing[0];
  if (!coord) return;
  let polylineId;
  let circleId;
  if (coord.y < 45) {
    polylineId = leading ? "left-top-line" : "right-top-line";
    circleId = leading ? "left-top-circle" : "right-top-circle";
  } else if (coord.y === 45) {
    polylineId = leading ? "left-middle-line" : "right-middle-line";
    circleId = leading ? "left-middle-circle" : "right-middle-circle";
  } else {
    polylineId = leading ? "left-bottom-line" : "right-bottom-line";
    circleId = leading ? "left-bottom-circle" : "right-bottom-circle";
  }
  const polyline = chipGroup.querySelector(`#${polylineId}`);
  if (!polyline) return;
  const points = polyline.getAttribute("points");
  if (!points) return;
  const pointsArray = points.split(" ").map((pt) => {
    const [x2, y] = pt.split(",").map(Number);
    return { x: x2, y };
  });
  if (pointsArray.length === 0) return;
  const lastCoords = pointsArray[pointsArray.length - 1];
  const diff = leading ? coord.x : -(letter.width - coord.x);
  const x = lastCoords.x + diff + offsetX;
  polyline.setAttribute("points", points + ` ${x},${lastCoords.y}`);
  const circle = chipGroup.querySelector(`#${circleId}`);
  if (!circle?.parentNode) return;
  circle.parentNode.removeChild(circle);
}
function createLetterConnections(wordGroup, letterElements, selectedMainColor) {
  for (let i = 0; i < letterElements.length - 1; i++) {
    const currentLetter = letterElements[i];
    const nextLetter = letterElements[i + 1];
    const currentLetterKey = currentLetter.letter === currentLetter.letter.toUpperCase() ? `capital-${currentLetter.letter.toLowerCase()}` : currentLetter.letter.toLowerCase();
    const nextLetterKey = nextLetter.letter === nextLetter.letter.toUpperCase() ? `capital-${nextLetter.letter.toLowerCase()}` : nextLetter.letter.toLowerCase();
    const currentCoords = letterKeyCoords[currentLetterKey];
    const nextCoords = letterKeyCoords[nextLetterKey];
    if (!currentCoords || !nextCoords) {
      continue;
    }
    let connectionFound = false;
    for (const trailingCoord of currentCoords.trailing) {
      for (const leadingCoord of nextCoords.leading) {
        if (trailingCoord.y === leadingCoord.y) {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          const startX = currentLetter.x + trailingCoord.x;
          const endX = nextLetter.x + leadingCoord.x;
          const y = currentLetter.yOffset + trailingCoord.y - 2.5;
          rect.setAttribute("x", startX.toString());
          rect.setAttribute("y", y.toString());
          rect.setAttribute("width", (endX - startX).toString());
          rect.setAttribute("height", "5");
          rect.setAttribute("fill", selectedMainColor);
          rect.setAttribute("filter", "url(#glow)");
          wordGroup.appendChild(rect);
          connectionFound = true;
          break;
        }
      }
      if (connectionFound) break;
    }
  }
}
var leftSvgContent = null;
var rightSvgContent = null;
function processWordInput(word, elementContainer, resultDiv) {
  const bgColorPicker = document.getElementById("bg-color-picker");
  const bgTransparent = document.getElementById("bg-transparent");
  const mainColorPicker = document.getElementById("main-color-picker");
  const selectedBgColor = bgColorPicker ? bgColorPicker.value : "#ffffff";
  const selectedMainColor = mainColorPicker ? mainColorPicker.value : "#0055aa";
  const isBgTransparent = bgTransparent ? bgTransparent.checked : true;
  elementContainer.innerHTML = "";
  resultDiv.textContent = "";
  const shareButton = document.getElementById("share-button");
  if (shareButton) {
    shareButton.disabled = true;
  }
  if (!word) {
    return;
  }
  if (word && word.length > 0) {
    resultDiv.textContent = ``;
    if (shareButton) {
      shareButton.disabled = false;
    }
    const svgCache = {};
    const loadPromises = word.split("").map((letter) => {
      if (letter === " ") {
        return Promise.resolve({ element: " ", isSpace: true });
      }
      const fetchLetter = letter === letter.toUpperCase() ? `capital-${letter}` : letter;
      if (svgCache[fetchLetter]) {
        return Promise.resolve({ element: fetchLetter, svgContent: svgCache[fetchLetter] });
      }
      return fetch(`./letters/${fetchLetter}.svg`).then((response) => {
        if (!response.ok) throw new Error(`SVG for ${letter} not found`);
        return response.text();
      }).then((svgContent) => {
        svgCache[fetchLetter] = svgContent;
        return { element: fetchLetter, svgContent };
      }).catch((error) => {
        console.error(error);
        return { element: fetchLetter, error: true };
      });
    });
    Promise.all(loadPromises).then((results) => {
      if (results.some((r) => r.error)) {
        resultDiv.textContent = `Error loading one or more SVG tiles.`;
        return;
      }
      const words = [];
      let currentWord = [];
      results.forEach((r) => {
        if (r.isSpace) {
          if (currentWord.length > 0) {
            words.push(currentWord);
            currentWord = [];
          }
        } else if (r.svgContent) {
          currentWord.push(r.svgContent);
        }
      });
      if (currentWord.length > 0) {
        words.push(currentWord);
      }
      const permutationRow = document.createElement("div");
      permutationRow.className = "permutation-row";
      words.forEach((wordSvgs) => {
        const wordDiv = document.createElement("div");
        wordDiv.className = "tile-word";
        wordSvgs.forEach((svgContent) => {
          const svgDiv = document.createElement("div");
          svgDiv.className = "tile-svg";
          svgDiv.innerHTML = makeSvgResponsive(svgContent);
          wordDiv.appendChild(svgDiv);
        });
        permutationRow.appendChild(wordDiv);
      });
      const wordContainers = permutationRow.querySelectorAll(".tile-word");
      const allSvgElements = permutationRow.querySelectorAll(".tile-svg-content");
      if (!wordContainers.length || !allSvgElements.length) {
        resultDiv.textContent = `No SVG tiles to display.`;
        return;
      }
      const getSvgDimensionsFromString = (svgContent) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
        const originalSvg = svgDoc.documentElement;
        let width = parseFloat(originalSvg.getAttribute("width") || "0");
        let height = parseFloat(originalSvg.getAttribute("height") || "0");
        if (width === 0 || height === 0) {
          const viewBox = originalSvg.getAttribute("viewBox");
          if (viewBox) {
            const parts = viewBox.split(/\s+|,/).map(parseFloat);
            if (parts.length === 4) {
              width = parts[2];
              height = parts[3];
            }
          }
        }
        if (width === 0) width = 100;
        if (height === 0) height = 100;
        return { width, height };
      };
      let leftChipWidth = 0, leftChipHeight = 0, rightChipWidth = 0, rightChipHeight = 0;
      if (leftSvgContent) {
        const leftDims = getSvgDimensionsFromString(leftSvgContent);
        leftChipWidth = leftDims.width;
        leftChipHeight = leftDims.height;
      }
      if (rightSvgContent) {
        const rightDims = getSvgDimensionsFromString(rightSvgContent);
        rightChipWidth = rightDims.width;
        rightChipHeight = rightDims.height;
      }
      let totalWidth = 0;
      let maxHeight = 0;
      let wordCount = 0;
      allSvgElements.forEach((svg) => {
        const svgElement = svg;
        const svgElementAsString = new XMLSerializer().serializeToString(svgElement);
        const { height } = getSvgDimensionsFromString(svgElementAsString);
        maxHeight = Math.max(maxHeight, height);
      });
      maxHeight = Math.max(maxHeight, leftChipHeight, rightChipHeight);
      wordContainers.forEach((wordContainer) => {
        const wordSvgElements = wordContainer.querySelectorAll(".tile-svg-content");
        if (wordSvgElements.length > 0) {
          wordCount++;
          let wordWidth = 0;
          wordSvgElements.forEach((svg) => {
            const svgElement = svg;
            const svgElementAsString = new XMLSerializer().serializeToString(svgElement);
            const { width } = getSvgDimensionsFromString(svgElementAsString);
            wordWidth += width;
          });
          wordWidth += (wordSvgElements.length - 1) * 10;
          totalWidth += wordWidth;
        }
      });
      const SPACE_WIDTH = 50;
      if (wordCount > 1) {
        totalWidth += (wordCount - 1) * (SPACE_WIDTH + 10);
      }
      const leftChipOverlap = 220;
      const rightChipOverlap = 210;
      const lettersWidth = totalWidth + 20;
      const actualTotalWidth = leftChipWidth - leftChipOverlap + lettersWidth + (rightChipWidth - rightChipOverlap - leftChipOverlap / 2);
      const actualMaxHeight = maxHeight + 20;
      const combinedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      combinedSvg.setAttribute("width", actualTotalWidth.toString());
      combinedSvg.setAttribute("height", actualMaxHeight.toString());
      combinedSvg.setAttribute("viewBox", `0 0 ${actualTotalWidth} ${actualMaxHeight}`);
      combinedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      combinedSvg.classList.add("combined-svg");
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "glow");
      filter.setAttribute("x", "-50%");
      filter.setAttribute("y", "-50%");
      filter.setAttribute("width", "200%");
      filter.setAttribute("height", "200%");
      const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
      feGaussianBlur.setAttribute("stdDeviation", "2");
      feGaussianBlur.setAttribute("result", "coloredBlur");
      const feMerge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
      const feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      feMergeNode1.setAttribute("in", "coloredBlur");
      const feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      feMergeNode2.setAttribute("in", "SourceGraphic");
      feMerge.appendChild(feMergeNode1);
      feMerge.appendChild(feMergeNode2);
      filter.appendChild(feGaussianBlur);
      filter.appendChild(feMerge);
      defs.appendChild(filter);
      combinedSvg.appendChild(defs);
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      let currentX = 10 + leftChipOverlap;
      const wordInfos = [];
      let wordIndex = 0;
      wordContainers.forEach((wordContainer) => {
        const wordSvgElements = wordContainer.querySelectorAll(".tile-svg-content");
        if (wordSvgElements.length === 0) return;
        const wordGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.appendChild(wordGroup);
        const wordStartX = currentX;
        let wordCurrentX = 0;
        const currentWordInfo = [];
        wordSvgElements.forEach((svg, letterIndex) => {
          const svgElement = svg;
          const svgElementAsString = new XMLSerializer().serializeToString(svgElement);
          const { width, height } = getSvgDimensionsFromString(svgElementAsString);
          const svgString = new XMLSerializer().serializeToString(svgElement);
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
          const originalSvg = svgDoc.documentElement;
          let contentElement = originalSvg.querySelector("g");
          const elementX = wordStartX + wordCurrentX;
          const yOffset = (actualMaxHeight - height) / 2;
          const letterChar = word.split(" ")[wordIndex][letterIndex];
          currentWordInfo.push({
            letter: letterChar,
            x: elementX,
            width,
            height,
            yOffset
          });
          if (contentElement) {
            const clonedContent = contentElement.cloneNode(true);
            const currentTransform = clonedContent.getAttribute("transform") || "";
            clonedContent.setAttribute(
              "transform",
              `translate(${elementX}, ${yOffset}) ${currentTransform}`
            );
            wordGroup.appendChild(clonedContent);
          } else {
            const newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            newGroup.setAttribute("transform", `translate(${elementX}, ${yOffset})`);
            Array.from(originalSvg.childNodes).forEach((child) => {
              if (child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() !== "svg") {
                const importedNode = document.importNode(child, true);
                newGroup.appendChild(importedNode);
              }
            });
            wordGroup.appendChild(newGroup);
          }
          wordCurrentX += width + 10;
        });
        createLetterConnections(wordGroup, currentWordInfo, selectedMainColor);
        wordInfos.push(currentWordInfo);
        currentX += wordCurrentX + SPACE_WIDTH;
        wordIndex++;
      });
      combinedSvg.appendChild(group);
      if (allSvgElements.length > 0 && leftSvgContent && rightSvgContent) {
        const leftParser = new DOMParser();
        const leftDoc = leftParser.parseFromString(leftSvgContent, "image/svg+xml");
        const leftGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        leftGroup.setAttribute("transform", `translate(0, ${(actualMaxHeight - leftChipHeight) / 2})`);
        Array.from(leftDoc.documentElement.childNodes).forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            leftGroup.appendChild(document.importNode(node, true));
          }
        });
        const rightParser = new DOMParser();
        const rightDoc = rightParser.parseFromString(rightSvgContent, "image/svg+xml");
        const rightGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        rightGroup.setAttribute("transform", `translate(${totalWidth + 20 - rightChipOverlap + leftChipOverlap}, ${(actualMaxHeight - rightChipHeight) / 2})`);
        Array.from(rightDoc.documentElement.childNodes).forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            rightGroup.appendChild(document.importNode(node, true));
          }
        });
        combinedSvg.insertBefore(rightGroup, combinedSvg.firstChild);
        combinedSvg.insertBefore(leftGroup, combinedSvg.firstChild);
        replaceSvgColors(combinedSvg, selectedMainColor, selectedMainColor);
        if (!isBgTransparent) {
          const bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          bgRect.setAttribute("x", "0");
          bgRect.setAttribute("y", "0");
          bgRect.setAttribute("width", actualTotalWidth.toString());
          bgRect.setAttribute("height", actualMaxHeight.toString());
          bgRect.setAttribute("fill", selectedBgColor);
          combinedSvg.insertBefore(bgRect, combinedSvg.firstChild);
        }
        const firstLetter = wordInfos[0][0];
        let offsetX = 75;
        createChipConnection(leftGroup, true, firstLetter, offsetX);
        const lastWord = wordInfos[wordInfos.length - 1];
        const lastLetter = lastWord === void 0 ? firstLetter : lastWord[lastWord.length - 1];
        offsetX = -85;
        const chipX = totalWidth + 20 - rightChipOverlap + leftChipOverlap;
        const lastLetterX = lastLetter.x + lastLetter.width;
        createChipConnection(rightGroup, false, lastLetter, offsetX);
      }
      elementContainer.innerHTML = "";
      elementContainer.appendChild(combinedSvg);
      const downloadButton = document.createElement("button");
      downloadButton.className = "download-svg-button";
      downloadButton.title = "Download SVG";
      downloadButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
            `;
      downloadButton.style.display = "block";
      downloadButton.style.margin = "20px auto 0 auto";
      elementContainer.appendChild(downloadButton);
      downloadButton.addEventListener("click", () => {
        downloadPermutationAsSVG(combinedSvg, word);
      });
    });
  } else {
    resultDiv.textContent = `"${word}" contains invalid characters. Only letters A-Z and spaces are allowed.`;
    if (shareButton) {
      shareButton.disabled = true;
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("./chips/left.svg").then((r) => r.ok ? r.text() : ""),
    fetch("./chips/right.svg").then((r) => r.ok ? r.text() : "")
  ]).then(([left, right]) => {
    leftSvgContent = left;
    rightSvgContent = right;
  });
  const bgColorPicker = document.getElementById("bg-color-picker");
  const bgTransparent = document.getElementById("bg-transparent");
  const mainColorPicker = document.getElementById("main-color-picker");
  function rerenderSVG() {
    processWordInput(wordInput.value.trim(), elementContainer, resultDiv);
  }
  if (bgColorPicker) bgColorPicker.addEventListener("input", rerenderSVG);
  if (bgTransparent) bgTransparent.addEventListener("change", rerenderSVG);
  if (mainColorPicker) mainColorPicker.addEventListener("input", rerenderSVG);
  const form = document.getElementById("word-form");
  const wordInput = document.getElementById("word-input");
  const resultDiv = document.getElementById("result");
  const elementContainer = document.getElementById("tile-container");
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  const shareButton = document.getElementById("share-button");
  const params = getAllQueryParams();
  const wordFromParam = params.word || "";
  const bgColorFromParam = params.bgColor;
  const mainColorFromParam = params.mainColor;
  const bgTransparentFromParam = params.bgTransparent;
  if (bgColorPicker && bgColorFromParam) bgColorPicker.value = `#${bgColorFromParam}`;
  if (mainColorPicker && mainColorFromParam) mainColorPicker.value = `#${mainColorFromParam}`;
  if (bgTransparent && typeof bgTransparentFromParam !== "undefined") {
    bgTransparent.checked = bgTransparentFromParam === "1" || bgTransparentFromParam.toLowerCase() === "true";
  }
  themeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const target = e.target;
      setTheme(target.value);
    });
  });
  shareButton.addEventListener("click", () => {
    if (!shareButton.disabled) {
      const inputText = wordInput.value.trim();
      if (inputText) {
        shareUrl(inputText);
      }
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  wordInput.addEventListener("input", () => {
    const inputText = wordInput.value.trim();
    processWordInput(inputText, elementContainer, resultDiv);
  });
  if (wordFromParam) {
    wordInput.value = wordFromParam;
    processWordInput(wordFromParam, elementContainer, resultDiv);
  } else {
    shareButton.disabled = true;
  }
});
//# sourceMappingURL=app.js.map
