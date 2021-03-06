/* global FOOTLONG_STANDARD_SIZE */

// Nutrition: [calories, fat, sugars, protein, vitamin C]

const NORMAL_BREAD_BOTTOM_POSITION = {
  y: 170,
  offset: [0, 0]
};

const NORMAL_BREAD_TOP_POSITION = {
  y: 5,
  offset: [0, 0]
};

const FLATBREAD_BOTTOM_POSITION = {
  y: 170,
  offset: [0, 0]
};

const FLATBREAD_TOP_POSITION = {
  y: 55,
  offset: [0, 0]
};

const SAUCE_POSITION = {
  y: 110,
  footlongDistance: -14,
  offset: [0, 0]
};

const ingredientData = {
  breadSize: {
    sixInch: {
      selected: true
    },
    footlong: {
      selected: false
    }
  },
  bread: {
    nineGrainWheat: {
      selected: true,
      nutrition: [210, 2, 5, 8, 0],
      position: NORMAL_BREAD_BOTTOM_POSITION,
      layer: 0
    },
    multiGrainFlatbread: {
      selected: false,
      nutrition: [220, 5, 3, 8, 8],
      position: FLATBREAD_BOTTOM_POSITION,
      layer: 0
    },
    italian: {
      selected: false,
      nutrition: [200, 2.5, 3, 7, 0],
      position: NORMAL_BREAD_BOTTOM_POSITION,
      layer: 0
    },
    italianHerbsAndCheese: {
      selected: false,
      nutrition: [240, 5, 3, 9, 0],
      position: NORMAL_BREAD_BOTTOM_POSITION,
      layer: 0
    },
    flatbread: {
      selected: false,
      nutrition: [230, 4.5, 2, 7, 8],
      position: FLATBREAD_BOTTOM_POSITION,
      layer: 0
    }
  },
  meat: { // いっぱいあったけどよくわからんからsub of the dayにあるやつしか載せてない
    sweetOnionChickenTeriyaki: {
      selected: false,
      nutrition: [100, 2.0, 2, 16, 8],
      position: {
        y: 140,
        footlongDistance: -23,
        offset: [0, 0]
      },
      layer: 1
    },
    ovenRoastedChicken: {
      selected: false,
      nutrition: [90, 2.5, 1, 15, 10],
      position: {
        y: 140,
        footlongDistance: 30,
        offset: [0, 0]
      },
      layer: 1
    },
    turkeyBreast: {
      selected: false,
      nutrition: [50, 1.0, 1, 9, 0],
      position: {
        y: 140,
        footlongDistance: -48,
        offset: [0, 0]
      },
      layer: 1
    },
    italianBmt: {
      selected: false,
      nutrition: [180, 14.0, 2, 11, 0],
      position: {
        y: 120,
        footlongDistance: -67,
        offset: [0, 0]
      },
      layer: 1
    },
    tuna: {
      selected: false,
      nutrition: [250, 23.0, 0, 12, 0],
      position: {
        y: 140,
        footlongDistance: -49,
        offset: [0, 0]
      },
      layer: 1
    },
    blackForestHam: {
      selected: false,
      nutrition: [60, 2.0, 2, 9, 0],
      position: {
        y: 140,
        footlongDistance: -48,
        offset: [0, 0]
      },
      layer: 1
    },
    meatballMarinara: {
      selected: false,
      nutrition: [260, 15.5, 6, 13, 14],
      position: {
        y: 135,
        footlongDistance: -16,
        offset: [0, 0]
      },
      layer: 1
    }
  },
  cheese: {
    american: {
      selected: false,
      nutrition: [40, 3.5, 0, 2, 0],
      position: {
        y: 130,
        footlongDistance: 34,
        offset: [0, 0]
      },
      layer: 2
    },
    montereyCheddar: {
      selected: false,
      nutrition: [50, 4.5, 0, 3, 0],
      position: {
        y: 100,
        footlongDistance: -31,
        offset: [0, 0]
      },
      layer: 3
    }
  },
  sauce: {
    chipotleSouthwest: {
      selected: false,
      nutrition: [100, 10, 1, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [-15, -3]}),
      layer: 4
    },
    mayonnaise: {
      selected: false,
      nutrition: [110, 12, 0, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [25, 6]}),
      layer: 4
    },
    ranch: {
      selected: false,
      nutrition: [110, 11, 1, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [-2, 9]}),
      layer: 4
    },
    oil: {
      selected: false,
      nutrition: [45, 5, 0, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [-10, 7]}),
      layer: 4
    },
    vinaigrette: {
      selected: false,
      nutrition: [40, 4, 1, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [-3, -8]}),
      layer: 4
    },
    mustard: {
      selected: false,
      nutrition: [5, 0, 0, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [9, 1]}),
      layer: 4
    },
    vinegar: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: Object.assign({}, SAUCE_POSITION, {offset: [13, -5]}),
      layer: 4
    },
    sweetOnion: {
      selected: false,
      nutrition: [40, 0, 8, 0, 0],
      position: SAUCE_POSITION,
      layer: 4
    }
  },
  veggie: {
    cucumbers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        y: 95,
        footlongDistance: -14,
        offset: [0, 0]
      },
      layer: 8
    },
    greenPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 10],
      position: {
        y: 80,
        footlongDistance: -32,
        offset: [-3, -2]
      },
      layer: 11
    },
    lettuce: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        y: 80,
        footlongDistance: -26,
        offset: [0, 0]
      },
      layer: 7
    },
    redOnions: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        y: 80,
        footlongDistance: -32,
        offset: [3, 3]
      },
      layer: 10
    },
    spinach: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        y: 85,
        footlongDistance: 0,
        offset: [0, 0]
      },
      layer: 6
    },
    tomatoes: {
      selected: false,
      nutrition: [5, 0, 1, 0, 8],
      position: {
        y: 90,
        footlongDistance: 9,
        offset: [0, 0]
      },
      layer: 5
    },
    bananaPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        y: 90,
        footlongDistance: 15,
        offset: [0, 0]
      },
      layer: 12
    },
    jalapenos: {
      selected: false,
      nutrition: [0, 0, 0, 0, 2],
      position: {
        y: 95,
        footlongDistance: 18,
        offset: [0, 0]
      },
      layer: 13
    },
    blackOlives: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        y: 95,
        footlongDistance: 28,
        offset: [0, 0]
      },
      layer: 14
    },
    pickles: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        y: 95,
        footlongDistance: 13,
        offset: [0, 0]
      },
      layer: 9
    }
  },
  side: {
    appleSlices: {
      selected: false,
      nutrition: [35, 0, 7, 0, 30]
    },
    sunChips: {
      selected: false,
      nutrition: [210, 9, 3, 4, 0]
    },
    bakedLaysPotatoCrisps: {
      selected: false,
      nutrition: [130, 2, 2, 2, 2]
    },
    doritosNachoCheese: {
      selected: false,
      nutrition: [250, 13, 2, 4, 0]
    },
    laysClassicPotatoChips: {
      selected: false,
      nutrition: [230, 15, 0, 3, 15]
    },
    chocolateChip: {
      selected: false,
      nutrition: [200, 10, 18, 2, 0]
    },
    oatmealRaisin: {
      selected: false,
      nutrition: [200, 8, 16, 3, 0]
    },
    whiteChipMacadamiaNut: {
      selected: false,
      nutrition: [220, 11, 17, 2, 0]
    }
  }
};

const breadTopData = {
  nineGrainWheat: {
    position: NORMAL_BREAD_TOP_POSITION
  },
  multiGrainFlatbread: {
    position: FLATBREAD_TOP_POSITION
  },
  italian: {
    position: NORMAL_BREAD_TOP_POSITION
  },
  italianHerbsAndCheese: {
    position: Object.assign({}, NORMAL_BREAD_TOP_POSITION, {offset: [0, -3]}),
  },
  flatbread: {
    position: FLATBREAD_TOP_POSITION
  }
};