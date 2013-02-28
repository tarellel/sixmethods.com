$(document).ready(function() {
  /*
   * Basin Home Health Preview
   */
  $("#fancybox-bhh").click(function() {
    $.fancybox.open([
      {
        href : 'images/work/full/bhh/preview.png',
        title : 'Basin Home Health - General Preview'
      }, {
        href : 'images/work/full/bhh/jobs_board.png',
        title : 'Basin Home Health - Jobs Board'
      }
    ]);
  });

  /*
   * Glide CMS
   */
  $("#fancybox-glide").click(function() {
    $.fancybox.open([
      {
        href : 'images/work/full/glide/login.png',
        title : 'Glide CMS - Login'
      }, {
        href : 'images/work/full/glide/users.png',
        title : 'Glide CMS - Basic CRUD Setup'
      }
    ]);
  });

  /*
   * Virboos
   */
  $("#fancybox-virboos").click(function() {
    $.fancybox.open([
      {
        href : 'images/work/full/virboos/preview.png',
        title : 'Virboos - Distraction free writing'
      }
    ]);
  });
});