// first ATTEMPT!
function maxStockProfit(pricesArr) {
  // takes in an array of prices as params
  // returns the max possible profit of the day;
  let mins = [pricesArr[0]];
  let maxes = [pricesArr[1]];
  let currentMin = mins[0];
  let currentMax = maxes[0];

  for (let i = 1; i <= pricesArr.length - 1; i++) {
    if (pricesArr[i] < currentMin) {
      mins.push(pricesArr[i]);
      currentMin = mins[mins.length - 1];
      maxes.push(pricesArr[i + 1]);
      currentMax = maxes[maxes.length -1];
    } else if (pricesArr[i] > currentMax); {
      maxes[currentMax] = pricesArr[i]
    }
  }

  maxProfit = -1;
  for (let i = 0; i<= mins.length; i++) {
    if ((maxes[i] - mins[i]) > maxProfit) {
      maxProfit = (maxes[i] - mins[i]);
    }
  }
}

maxStockProfit([32,46,26,38,40,48,42]);

// second attempt!
function maxStockProfit(pricesArr) {
  let mins = new Map();
  let maxes = new Map();

  let currentMin = pricesArr[0];
  let currentMax = pricesArr[1];

  mins.set(currentMin, pricesArr.indexOf(currentMin))
  maxes.set(currentMax, pricesArr.indexOf(currentMax))

  for (let i = 0; i <= pricesArr.length; i++) {
    if (pricesArr[i] < currentMin) {
      currentMin = pricesArr[i];
      mins.set(currentMin, pricesArr.indexOf(currentMin));
    } else if (pricesArr[i] > currentMax) {
      currentMax = pricesArr[i];
      maxes.set(currentMax, pricesArr.indexOf(currentMax));
    }
  }
  console.log(mins);
  console.log(maxes);

  let allMins = [];
  let allMaxes = [];

  mins.forEach((k, v) => {
    allMins.push([v, k]);
  })

  maxes.forEach((k, v) => {
    allMaxes.push([v, k]);
  })

  console.log(allMins);
  console.log(allMaxes);

  let finalPairs = new Map();

  let currentMinIndex;
  let currentMaxIndex;


  for (let i = 0; i < allMaxes.length; i++) {
    currentMaxIndex = allMaxes[i][1];
    currentMax = allMaxes[i][0];
    currentMin = allMins[0][0];
    for (let j = 1; j < allMins.length; j++) {
      if (allMins[j][0] < currentMin && allMins[j][1] < currentMaxIndex) {
        currentMin = allMins[j][0];
        currentMinIndex = allMins[j][1];
      }
    }
    console.log(currentMin);
    console.log(currentMax)
    finalPairs.set(currentMax, currentMin);
  }

  console.log(finalPairs);


  maxProfit = -1;
  finalPairs.forEach((k, v) => {
    if (v - k > maxProfit) {
      maxProfit = v - k;
    }
  })
  return maxProfit;
}

maxStockProfit([32,46,26,38,40,48,42]);

// course's

function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}
