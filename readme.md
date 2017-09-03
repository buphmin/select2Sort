select2 sort allows you to sort select2 options for multiselect/tags.

In addition to sorting the ui component it will also sort the options of the native select element and thus the value array of select2. This is useful for when the order of your selection matters.

This plugin is a wrapper around select2 and jqueryUi sortable.

##examples:

```javascript
$('#select').select2Sort();
//takes in native select2 options to pass to $.select2
$('#select').select2Sort({
    tags: true,
    multiple: true
});
```

##Prerequisites
Jquery, Jquery Ui, Select2 v4

