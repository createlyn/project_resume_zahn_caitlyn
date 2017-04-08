/* this is tabs */
 $('#resume-layout ul').idTabs();


/* this is text rotator */
 $('.rotate').textrotator({
     animation: 'dissolve', // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
     separator: ',', // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
     speed: 2000 // How many milliseconds until the next word show.
 });

 /* this is jquery hover effect on info section*/

 $('table').hover(
   function () {
       $(this).addClass('hover');
   }, function () {
     $(this).removeClass('hover');
 }
 );

 $('.resume-image').hover(
   function () {
       $(this).addClass('hover');
   }, function () {
     $(this).removeClass('hover');
 }
 );
