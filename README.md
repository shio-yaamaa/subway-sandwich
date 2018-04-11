🥪 🥪 🥪

Amber500
```#FFC107```

# Next

Set offsets (Italian herbs and cheese top, sauce, peppers)

Menu -> Ingredient

Completely separate bread bottom and bread top. Only bread bottom has its nutrition facts. Bread top is just for "Done" display.

# Todo

- Make the background color of the bread images pure white

- Window resize event

- Total nutrition facts -> background: half-transparent white, some blur

- If ingredientData's structure becomes like following,

```javascript
bread: [
  {
    name: 'italian_herbs_and_cheese',
    selected: false,
    ...
  }
]
```

  then I no longer have to convert camel to snake or vice versa

- Change the values of the nutrition balloon when breadSize is hovered

# Note

- 6 inch -> footlong: Shift + -> * 22 on Inkscape

- Monterey Cheddar individual -> 6 inch: Shift + -> * 5 on Inkscape

- Tomatoes: Shift + -> * 7 + -> * 5

- Pickes: Big right * 4 + Small right * 4

- Cucumber: Big * 4 - Small * 5

- Green Peppers, Red Onions, Lettuce, Chicken Teriyaki, Pepperoni/Salami, Tuna: Big * 7

- Black Forest Ham, Turkey Breast: Big * 10 + Small * 4

# 6 jQuery functions

- ```show```, ```hide```: nutrition balloon

- ```hover```: nutrition balloon

- ```click```: selection

- ```css```: the border of selection

- ```text```: nutrition balloon

🥪 🥪 🥪