# Validation Rules

## Parameters:

- ***Left-Side***:
    - **Title** :: *label--string*
        - **Title-input** :: *input--string*
    - **Offer Header** :: *label--string*
        **Header-input** :: *input--string, max-input-length--(24)*
    - **Products** :: *select--objects* :: 
        - **Single**
            - **Amount** :: *input--number*
            - **Term** :: *select--month, default-value::(day)*
            - **Duration** :: *input--number, default-value::(1)*
        - **Bundle**: 
            - **name-field** :: *span--string*
            - **Split** :: *label--string*
            - **Split-amount** :: *input--number*
                - **Error-messege** :: *paragraph--string, color::red*
            - **Amount** :: *input--number*
            - **Term** :: *select--month, default-value::(day)*
            - **Duration** :: *input--number, default-value::(1)*
    - **Auto-Renewal** :: *span--slide(visual), default-color::none, active-color:: green*
- ***Right-Side***:
    - **Offer-Type** :: *label--string*
        - **Self-Offer** :: *label--string*
            - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
        - **Gift-Offer** :: *label--string*
            - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
    - **Is-this-offer-promoted-?** :: *label--string*
      - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
    - **Is-this-offer-an-iCare-default-offer-?** :: *label--string*
      - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
    - **Trail-offer-?** :: *label--string*
      - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
      - **Free-trail** :: *label--string*
        - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
      - **Reduced-price-trail** :: *label--string*
        - **Slider(no-text/visual)** :: *span--silde(visual), default-color::none, active-color:: green*
- ***Top-Right-Side***:
    - **Have-Saved-Draft**:
        **Draft-Saved** :: *span--string*
    - **Don't-Have-Saved-Draft**:
        **Save-Draft** :: *button--string, functionality::Save-form-data*

## Required Fields:

- *Title--input*
- *Header--input*
- *Products--select*


## Special Conditions:

- "**Untitled Offer**" header should change on key stocks entered in the "**Title**" field.
- If product "**single**" render normal data (*Amount*, *Term*, *Duration*).
- If product "**bundle**" render data of each product in the bundle and their spit + noraml data.
- "**Auto-Renewal**" is **ON** if "**Trail Offer**" is **ON**.
- "**Amount**" field would be locked if "**Free Trail**" is toggled (***visible lock***).
- "**Self Offer**" is **ON** then "**Auto-Renewal**" is allowed to be **toggled**.
- "**Gift Offer**" is **ON** then "**Auto-Renewal**" is not allowed to be **toggled**.
- "**Self Offer**" and "**Gift Offer**" can be **ON** in the same time.
- If "**Self Offer**" and "**Gift Offer**" are **ON** then "**Auto-Renewal**" is not allowed to be **toggled**.
- When pressing "**Save-Draft**" button, "**Draft-Saved**" span must be rendered in it's place.
- After rendering "**Draft-Saved**", if any new data is entered, "**Save-Draft**" should be rendered back.
    