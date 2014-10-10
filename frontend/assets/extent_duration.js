$(function() {

  var initExtentForm = function(subform) {

    var $that = $("[name$='[extent_type]']", subform);
    if ($that.val() === 'duration') {

      var values = {};

      if ($(".extent-subform", subform).length) {
        values = $(".extent-subform", subform).serializeObject();
        $(".extent-subform", subform).remove();
      }

      var index = $that.parents("[data-index]:first").data("index");

      var template_data = {
        path: AS.quickTemplate($that.parents("[data-name-path]:first").data("name-path"), {index: index}),
        id_path: AS.quickTemplate($that.parents("[data-id-path]:first").data("id-path"), {index: index}),
        index: index
      };

      var template_name = 'template_extent_duration';

      var $extent_subform = $(AS.renderTemplate(template_name, template_data));

      $that.parents(".control-group:first").after($extent_subform);

      $extent_subform.setValuesFromObject(values);

    };


    $("[name$='[extent_type]']", subform).change(function(event) {
      var type = $(this).val();

      var values = {};

      if ($(".extent-subform", subform).length) {
        values = $(".extent-subform", subform).serializeObject();
        $(".extent-subform", subform).remove();
      }

      var index = $(this).parents("[data-index]:first").data("index");

      var template_data = {
        path: AS.quickTemplate($(this).parents("[data-name-path]:first").data("name-path"), {index: index}),
        id_path: AS.quickTemplate($(this).parents("[data-id-path]:first").data("id-path"), {index: index}),
        index: index
      };

      var template_name = (type === 'duration') ? "template_extent_duration" : "template_extent_number";

      var $extent_subform = $(AS.renderTemplate(template_name, template_data));

      $(this).parents(".control-group:first").after($extent_subform);

      $extent_subform.setValuesFromObject(values);

      $(document).triggerHandler("subrecordcreated.aspace", ["extent_type", $extent_subform]);
    });
  };


  $(document).bind("subrecordcreated.aspace", function(event, object_name, subform) {
    if (object_name === "extent") {
      initExtentForm($(subform));
    }
  });

});
