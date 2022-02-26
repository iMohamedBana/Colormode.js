# Colormode.js
This is a dynamic tool for controlling the color scheme of the page, this tool can control the color scheme according to the user's preferences, once the page is loaded, it follows the same device preferences or another scheme of your choice in advance, the user can flip the colors from Darkmode to Lightmode at any time, or The user can stay relaxed and use the "Similar to device mode" to track device preferences.

هذه أداة ديناميكية للتحكم في نظام ألوان الصفحة ، ويمكن لهذه الأداة التحكم في نظام الألوان وفقًا لتفضيلات المستخدم ، بمجرد تحميل الصفحة ، فإنها تتبع نفس تفضيلات الجهاز أو مخطط آخر من اختيارك مسبقًا ، المستخدم يمكن قلب الألوان من Darkmode إلى Lightmode في أي وقت ، أو يمكن للمستخدم البقاء هادئًا واستخدام "وضع مماثل للجهاز" لتتبع تفضيلات الجهاز.

## Installation

This can be considered more an explanation of creating your own tool than an explanation of how to use it.

يمكن اعتبار ان هذا شرح لانشاء أداتك الخاصة اكثر من شرح كيفية استخدام هذه الاداه.


### html
#### In order for the add-on to function properly, you must make sure that :

لكي يعم الأداة بشكل صحيح ، يجب التاكد من التالي

1. Must include a jQuery

التاكد من استدعاء jQuery
```html 
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
or 
```html 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
2. Must include a Colormode.js

 التاكد من استدعاء Colormode.js
```html 
<script src="/dist/js/colormode.js"></script>
```
3. The theme-color ( meta tag ) must be added

التاكد من اضافة كود meta ( theme-color )
```html 
<meta name="theme-color" content="rgb(255, 255, 255)" />
```
4. Control buttons must be added

التاكد من اضافة ازرار التحكم

### Css

To make the page appear as Darkmode use this code, it applies to background, texts, buttons, scrollbar, etc.

لجعل الصفحة تظهر في وضع Darkmode ، استخدم هذا الرمز ، فهو ينطبق على الخلفية والنصوص والأزرار وشريط التمرير وما إلى ذلك.
```css
root {
    color-scheme: dark;
}
```

To make the page appear as Lightmode use this code, it applies to background, texts, buttons, scrollbar, etc.

لجعل الصفحة تظهر في وضع Lightmode ، استخدم هذا الرمز ، فهو ينطبق على الخلفية والنصوص والأزرار وشريط التمرير وما إلى ذلك.
```css
root {
    color-scheme: light;
}
```

Until this moment the code is not dynamic. I can use Darkmode or Lightmode and the user cannot choose, and now we add the following code that tracks the user's preferences on the device.

حتى هذه اللحظه الكود غير ديناميكي يمكنني استخدام الوضع المظلم او الوضع المضيئ ولا يمكن للمستخدم ان يختار ، والان نضيف الكود التالي الذي يتتبع تفضيلات المستخدم على الجهاز.

```css
@media (prefers-color-scheme: dark) {
    root {
        color-scheme: dark;
    }
}
```
This code is very similar to ``` @media screen ``` ; Actually, it's the same idea.

Now the code is working dynamically, Using ``` @media ``` rule ``` prefers-color-scheme: ``` as ``` dark ``` or ``` light ``` But user can't control the mode unless he changes his device preferences, so let's go to js.

هذا الكود مشابة جدا ل ``` @media screen ``` ، في الواقع انهم نفس الفكرة. 

الان اصبح الكود يعمل بشكل ديناميكي ، حيث نستخدم قانون ``` @media ``` ك ``` prefers-color-scheme: ``` بمعرف ``` dark ``` أو ``` light ``` لكن المستخدم لا يمكن له ان يتحكم في الوضع الا اذا قام بتغير تفضيلات جهازه لذلك لننتقل الي js .

### Js ( jQuery )



## License
[MIT](https://choosealicense.com/licenses/mit/)
