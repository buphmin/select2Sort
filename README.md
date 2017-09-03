select2 sort allows you to sort select2 options for multiselect/tags.

In addition to sorting the ui component it will also sort the options of the native select element and thus the value array of select2. This is useful for when the order of your selection matters.

This plugin is a wrapper around select2 and jqueryUi sortable.

## Examples:

```javascript
$('#select').select2Sort();
//takes in native select2 options to pass to $.select2
$('#select').select2Sort({
    tags: true,
    multiple: true
});

var select2Options = {};
var sortableOptions = {};

//param1 is select2 options, param2 is jquery ui sortable options
$('#select').select2Sort(select2Options, sortableOptions);

//NOTE, jquery ui sortable option "update" gets overridden as it is used to 
//handle the sorting functionality

```

## Prerequisites
Jquery, Jquery Ui, Select2 v4

