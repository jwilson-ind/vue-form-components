# Vue Form Components

This is a package of Vue input and form components

## Install

The most flexible way to uses the components is to clone this repository locally and copy-paste the `/src/Components` into your own project.

### CSS

#### The Copy

Again the most flexible way to implement the css for these components is to copy the css from `src/main.css` and modify it in your own css file.

#### The Import Method

This package uses tailwind css. If your project also uses tailwind you'll have to set up how this package's css is loaded in a specific way.

Include the `style.css` in the `app.js` file. Making sure it is imported before the app's css.

```javascript
// app.js
import './bootstrap';
import '../../node_modules/vue-form-components/dist/style.css'; // <-- this sould come before the app.css import
import '../css/app.css';

//...
```

Make sure the components from the package are nested in an element with the class `.vue-form-components`
```html
<div class="vue-form-components">
    <ModelForm v-model="form" :sections="[{field: 'name'}]"/>
</div>
```

---

***The following is something you can try if the styles still aren't rendering right***

Add an `important` directive id in the `tailwind.config.js`

```javascript
// tailwind.config.js
//...
module.exports = {
    important: '#html-body',
    //...
};
```

Add the `important` id to the layout `<body>` element

```html
<body id="html-body">
...
</body>
```
