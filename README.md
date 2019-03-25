# img-defer
The idea is to make use of the defer attribute on external scripts to "defer" images as well. No dependencies.
Effect is that we load real images when page says it's ready, not hindering it from render. Since the script is small and stand alone, we also do not have to wait for any bundled files to be decompiled, evaluated etc. When page is ready, it starts loading our images.

Script loop all img tags on page, replacing src on those which have a "data-src" attribute. Let's you load those important billboards and have the rest follow later.

```html
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/650x655.png/cc0000/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/609x621.jpg/5fa2dd/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/561x554.png/ff4444/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/750x899.jpg/ff4444/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/674x503.jpg/cc0000/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/818x825.png/5fa2dd/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/877x884.png/5fa2dd/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/752x629.png/ff4444/ffffff"/>
  <img src="https://dummyimage.com/20x20/ff00ff/3740c4.jpg" data-src="http://dummyimage.com/826x689.bmp/5fa2dd/ffffff"/>

  <script src="img-defer.min.js" defer></script>
</body>
```
