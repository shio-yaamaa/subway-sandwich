const NORMAL_BREAD_BOTTOM_POSITION = {
  sixInch: ['center', 170],
  footlong: ['center', 170]
};

const NORMAL_BREAD_TOP_POSITION = {
  sixInch: ['center', 5],
  footlong: ['center', 5]
};

const FLATBREAD_BOTTOM_POSITION = {
  sixInch: ['center', 170],
  footlong: ['center', 170]
};

const FLATBREAD_TOP_POSITION = {
  sixInch: ['center', 55],
  footlong: ['center', 55]
};

const SAUCE_POSITION = {
  sixInch: ['center', 110],
  footlong: [[0, 110], [0, 110]]
};

const menuData = {
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
      order: 0
    },
    multiGrainFlatbread: {
      selected: false,
      nutrition: [220, 5, 3, 8, 8],
      position: FLATBREAD_BOTTOM_POSITION,
      order: 0
    },
    italian: {
      selected: false,
      nutrition: [200, 2.5, 3, 7, 0],
      position: NORMAL_BREAD_BOTTOM_POSITION,
      order: 0
    },
    italianHerbsAndCheese: {
      selected: false,
      nutrition: [240, 5, 3, 9, 0],
      position: NORMAL_BREAD_BOTTOM_POSITION,
      order: 0
    },
    flatbread: {
      selected: false,
      nutrition: [230, 4.5, 2, 7, 8],
      position: FLATBREAD_BOTTOM_POSITION,
      order: 0
    }
  },
  meat: { // いっぱいあったけどよくわからんからsub of the dayにあるやつしか載せてない
    sweetOnionChickenTeriyaki: {
      selected: false,
      nutrition: [100, 2.0, 2, 16, 8],
      position: {
        sixInch: ['center', 140],
        footlong: [[], []]
      },
      order: 1
    },
    ovenRoastedChicken: {
      selected: false,
      nutrition: [90, 2.5, 1, 15, 10],
      position: {
        sixInch: ['center', 140],
        footlong: [[], []]
      },
      order: 1
    },
    turkeyBreast: {
      selected: false,
      nutrition: [50, 1.0, 1, 9, 0],
      position: {
        sixInch: ['center', 140],
        footlong: [[], []]
      },
      order: 1
    },
    italianBmt: {
      selected: false,
      nutrition: [180, 14.0, 2, 11, 0],
      position: {
        sixInch: ['center', 120],
        footlong: [[], []]
      },
      order: 1
    },
    tuna: {
      selected: false,
      nutrition: [250, 23.0, 0, 12, 0],
      position: {
        sixInch: ['center', 140],
        footlong: [[], []]
      },
      order: 1
    },
    blackForestHam: {
      selected: false,
      nutrition: [60, 2.0, 2, 9, 0],
      position: {
        sixInch: ['center', 140],
        footlong: [[], []]
      },
      order: 1
    },
    meatballMarinara: {
      selected: false,
      nutrition: [260, 15.5, 6, 13, 14],
      position: {
        sixInch: ['center', 135],
        footlong: [[], []]
      },
      order: 1
    }
  },
  cheese: {
    american: {
      selected: false,
      nutrition: [40, 3.5, 0, 2, 0],
      position: {
        sixInch: ['center', 130],
        footlong: [[], []]
      },
      order: 2
    },
    montereyCheddar: {
      selected: false,
      nutrition: [50, 4.5, 0, 3, 0],
      position: {
        sixInch: ['center', 100],
        footlong: [[], []]
      },
      order: 3
    }
  },
  sauce: {
    chipotleSouthwest: {
      selected: false,
      nutrition: [100, 10, 1, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    mayonnaise: {
      selected: false,
      nutrition: [110, 12, 0, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    ranch: {
      selected: false,
      nutrition: [110, 11, 1, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    oil: {
      selected: false,
      nutrition: [45, 5, 0, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    vinaigrette: {
      selected: false,
      nutrition: [40, 4, 1, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    mustard: {
      selected: false,
      nutrition: [5, 0, 0, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    vinegar: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    },
    sweetOnion: {
      selected: false,
      nutrition: [40, 0, 8, 0, 0],
      position: SAUCE_POSITION,
      order: 4
    }
  },
  veggie: {
    cucumbers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        sixInch: ['center', 95],
        footlong: [[], []]
      },
      order: 8
    },
    greenPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 10],
      position: {
        sixInch: ['center', 80],
        footlong: [[], []]
      },
      order: 11
    },
    lettuce: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        sixInch: ['center', 80],
        footlong: [[], []]
      },
      order: 7
    },
    redOnions: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        sixInch: ['center', 80],
        footlong: [[], []]
      },
      order: 10
    },
    spinach: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        sixInch: ['center', 85],
        footlong: [[], []]
      },
      order: 6
    },
    tomatoes: {
      selected: false,
      nutrition: [5, 0, 1, 0, 8],
      position: {
        sixInch: ['center', 90],
        footlong: [[], []]
      },
      order: 5
    },
    bananaPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        sixInch: ['center', 90],
        footlong: [[], []]
      },
      order: 12
    },
    jalapenos: {
      selected: false,
      nutrition: [0, 0, 0, 0, 2],
      position: {
        sixInch: ['center', 95],
        footlong: [[], []]
      },
      order: 13
    },
    blackOlives: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        sixInch: ['center', 95],
        footlong: [[], []]
      },
      order: 14
    },
    pickles: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        sixInch: ['center', 95],
        footlong: [[], []]
      },
      order: 9
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
    position: NORMAL_BREAD_TOP_POSITION
  },
  flatbread: {
    position: FLATBREAD_TOP_POSITION
  }
};