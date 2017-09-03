(function ($) {
    $.fn.select2Sort = function (select2Options, sortableOptions) {
        if(select2Options === undefined) {
            select2Options = {};
        }

        if(sortableOptions === undefined) {
            sortableOptions = {};
        }

        var $this = $(this);
        $this = $('#' + this[0].id);
        //init select2 with given options
        $this.select2(select2Options);
        //find the select2 container for this select element
        var $selectionList = $this.next('.select2-container').find('.select2-selection__rendered');

        //handle the sorting
        var sort = function (event, ui) {
            var orderedOptions = [];
            //create an array with the new options in order
            $selectionList.find('li.select2-selection__choice').each(function () {
                var text = $(this).text().replace('×', '');
                var search = 'option:contains("' + text + '")';
                $option = $this.find(search);
                var orderedOption = {
                    text: $option.text(),
                    value: $option.val()
                };
                orderedOptions.push(orderedOption);
            });

            var optionString = '';
            //create the new options html
            for (var i = 0; i < orderedOptions.length; i++) {
                var option = orderedOptions[i];
                optionString += '<option selected value="' + option.value + '">' + option.text + '</option>';
            }

            //set the new options
            $this.html(optionString);
        };

        sortableOptions = $.extend(sortableOptions, {
            update: sort
        });
        //init jquery ui sortable
        $selectionList.sortable(sortableOptions);

        return this;
    };

}(jQuery));