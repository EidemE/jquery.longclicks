/*

Author: EidemE
From an original plugin by untill (Till Halbach)

Description : This jQuery plugin adds capability to short and long clicks on selected elements.

License :

MIT License

Copyright (c) 2015 Till Halbach
Copyright (c) 2024 EidemE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

(
    function($) {
    // Default settings
    const defaults = {
        NS: 'jquery.longclicks-',
        shortDelay: 300,
        longDelay: 800
    };

    $.fn.mayTriggerLongClicks = function(options) {
        // Override the default settings with the options provided
        let settings = $.extend(defaults, options);
        // Declaring timers
        let timerShort;
        let timerLong;
        // Declaration of levels
        let haveShortClick;
        let haveLongClick;
        
        return $(this).on('mousedown', function() {
            haveShortClick = false;
            haveLongClick = false;
            
            timerShort = setTimeout(function(elm) {
                haveShortClick = true;
                $(elm).trigger('shortClickReached');
            }, settings.shortDelay, this);
            
            timerLong = setTimeout(function(elm) {
                clearTimeout(timerShort);
                haveLongClick = true;
                $(elm).trigger('longClick');
            }, settings.longDelay, this);
        }).on('mouseup', function() {
            clearTimeout(timerShort);
            clearTimeout(timerLong);
      
            if (haveShortClick && !haveLongClick)
                $(this).trigger('shortClick');
        }).on('click', function(evt) {
            if (haveShortClick || haveLongClick)
                evt.stopImmediatePropagation();
        });
    };  // $.fn.mayTriggerLongClicks
}
)
(jQuery);