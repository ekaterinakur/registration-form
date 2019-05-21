# Registration Form

1) Create an input field for entering the full name of a person. The background of the control should be one of the three colors:
    - white, if the user hasn’t yet once focused on the field or the field is currently in focus (the user hasn’t finished typing);
    - green if the field is not currently in focus and the name provided by the user consists of exactly 2 or 3 words (after trimming);
    - red otherwise (indicating incorrect input).

2) Create an input field for phone numbers. The background of the field must also be either white, green, or red, guided by the rules described above. The only correct input in this case is valid Ukrainian phone numbers including an area code (a few valid examples: `+380123456789`, `012 345-67-89`, `380 345-6789`, etc.). You can use regular expressions to simplify validation.

3) Provide a select box to choose what region of Ukraine the user is from: either Kyiv, Center (Cherkasy, Dnipro, Kropyvnytskyi, Poltava, Vinnytsia, Zhytomyr), North (Chernihiv, Sumy), East (Donetsk, Kharkiv, Luhansk), South (Kherson, Mykolaiv, Odesa, Zaporizhzhia), or West (Chernivtsi, Ivano-Frankivsk, Khmelnytskyi, Lutsk, Lviv, Rivne, Ternopil, Uzhhorod). The very first option of the select box must be blank (corresponding to no selection).

4) Provide another select box that would show up only after a selection is made in #3 (if the selection is not `Kyiv`) and disappear otherwise. This control will allow the user to pick their home city. Only cities from the area selected in #3 should be available for selection. The first option must be blank (no selection is made). The last option, however, should read `Not in the list` and is also considered a valid choice.

5) Place a checkbox above #2 with the label `I would prefer not to specify my phone number and home town`. When this control is checked, hide #2, #3, and #4 altogether.

6) Put a submit button below the controls. It should be enabled only when all necessary fields are filled out: a valid full name is provided and either the option in #5 is checked or a valid phone number is entered as well as a region and a city (or the `Not in the list` option) are picked.
