 
<script>
var data = [
        {
         image: '../IMG2103.jpg',
         image: '../IMG2214.jpg',
         image:  '../IMG2217.jpg',
         image: '../IMG_2238.jpg',
        }
];

Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
Galleria.configure({
    thumbnails: false,
    showCounter: false
});

Galleria.run('#galleria', {
        datasource: data 
});
</script>