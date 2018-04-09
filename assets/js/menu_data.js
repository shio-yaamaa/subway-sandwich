/* global SIX_INCH_STANDARD_SIZE */
/* global FOOTLONG_STANDARD_SIZE */

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
      position: {
        top: {
          six_inch: [],
          footlong: []
        },
        bottom: {
          six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
          footlong: []
        }
      }
    },
    multiGrainFlatbread: {
      selected: false,
      nutrition: [220, 5, 3, 8, 8],
      position: {
        top: {
          six_inch: [],
          footlong: []
        },
        bottom: {
          six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 527) / 2, SIX_INCH_STANDARD_SIZE[1] - 107],
          footlong: [0, 0]
        }
      }
    },
    italian: {
      selected: false,
      nutrition: [200, 2.5, 3, 7, 0],
      position: {
        top: {
          six_inch: [],
          footlong: []
        },
        bottom: {
          six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
          footlong: [0, 0]
        }
      }
    },
    italianHerbsAndCheese: {
      selected: false,
      nutrition: [240, 5, 3, 9, 0],
      position: {
        top: {
          six_inch: [],
          footlong: []
        },
        bottom: {
          six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
          footlong: [0, 0]
        }
      }
    },
    flatbread: {
      selected: false,
      nutrition: [230, 4.5, 2, 7, 8],
      position: {
        top: {
          six_inch: [],
          footlong: []
        },
        bottom: {
          six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 527) / 2, SIX_INCH_STANDARD_SIZE[1] - 107],
          footlong: [0, 0]
        }
      }
    }
  },
  meat: { // いっぱいあったけどよくわからんからsub of the dayにあるやつしか載せてない
    sweetOnionChickenTeriyaki: {
      selected: false,
      nutrition: [100, 2.0, 2, 16, 8],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    ovenRoastedChicken: {
      selected: false,
      nutrition: [90, 2.5, 1, 15, 10],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    turkeyBreast: {
      selected: false,
      nutrition: [50, 1.0, 1, 9, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    italianBmt: {
      selected: false,
      nutrition: [180, 14.0, 2, 11, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    tuna: {
      selected: false,
      nutrition: [250, 23.0, 0, 12, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    blackForestHam: {
      selected: false,
      nutrition: [60, 2.0, 2, 9, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    meatballMarinara: {
      selected: false,
      nutrition: [260, 15.5, 6, 13, 14],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    }
  },
  cheese: {
    american: {
      selected: false,
      nutrition: [40, 3.5, 0, 2, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    montereyCheddar: {
      selected: false,
      nutrition: [50, 4.5, 0, 3, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    }
  },
  toast: {
    yes: {
      selected: false
    },
    no: {
      selected: true
    }
  },
  sauce: {
    chipotleSouthwest: {
      selected: false,
      nutrition: [100, 10, 1, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    mayonnaise: {
      selected: false,
      nutrition: [110, 12, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    ranch: {
      selected: false,
      nutrition: [110, 11, 1, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    oil: {
      selected: false,
      nutrition: [45, 5, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    vinaigrette: {
      selected: false,
      nutrition: [40, 4, 1, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    mustard: {
      selected: false,
      nutrition: [5, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    vinegar: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    sweetOnion: {
      selected: false,
      nutrition: [40, 0, 8, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    }
  },
  veggie: {
    cucumbers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    greenPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 10],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    lettuce: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    redOnions: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    spinach: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    tomatoes: {
      selected: false,
      nutrition: [5, 0, 1, 0, 8],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    bananaPeppers: {
      selected: false,
      nutrition: [0, 0, 0, 0, 4],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    jalapenos: {
      selected: false,
      nutrition: [0, 0, 0, 0, 2],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    blackOlives: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    },
    pickles: {
      selected: false,
      nutrition: [0, 0, 0, 0, 0],
      position: {
        six_inch: [(SIX_INCH_STANDARD_SIZE[0] - 479) / 2, SIX_INCH_STANDARD_SIZE[1] - 124],
        footlong: [[], []]
      }
    }
  }
};