/* colormode.js v 1.0.0 */

// First check if jQuery works
if (window.jQuery) 
{
    // start colormode.js
    $.fn.mode = function (colors = { dark:"rgb(32, 33, 36)", light:"rgb(255, 255, 255)" }, mode = "similar")
    {
        if ( colors )
        {
            if ( colors.dark && colors.light )
            {
                mode = localStorage.getItem( "mode" ) ? localStorage.getItem( "mode" ): mode;
                function newMode(mode, color, boolean)
                {
                    localStorage.setItem("mode", mode);
                    $("html").attr("mode", mode);
                    $("meta[name=theme-color]").attr("content", color);
                    $('[data-target=toggleModeSwitch]').prop('checked', boolean);
                }
                if ( mode == "similar" )
                {
                    boolean = window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
    
                    newMode("similar", "rgb(255, 255, 255)", boolean);

                    $(window.matchMedia('(prefers-color-scheme: dark)')).change(function()
                    {
                        boolean = window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
                        newMode("similar", "rgb(255, 255, 255)", boolean);
                    });
                }
                else if ( mode == "dark")
                {
                    newMode(mode, colors.dark, true);
                }
                else if ( mode == "light")
                {
                    newMode(mode, colors.light, false);
                }
                else
                {
                    console.error("Mode error: Mode undefined!");
                }
                $("[data-target=toggleMode]").on("click", function ()
                {
                    if ( mode == "dark" || mode == "similar" && window.matchMedia("(prefers-color-scheme: dark)").matches )
                    {
                        mode = "light";
                        newMode(mode, colors.light, false);
                    }
                    else
                    {
                        mode = "dark";
                        newMode(mode, colors.dark, true);
                    }
                });
                $('[data-target=toggleModeSwitch]').change(function()
                {
                    if ( mode == "dark" && $('[data-target=toggleModeSwitch]').prop('checked', true) || mode == "similar" && window.matchMedia("(prefers-color-scheme: dark)").matches )
                    {
                        mode = "light";
                        newMode(mode, colors.light, false);
                    }
                    else
                    {
                        mode = "dark";
                        newMode(mode, colors.dark, true);
                    }
                });
                $("[data-target=similar]").on("click", function ()
                {
                    mode = "similar";
                    boolean = window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
                    newMode("similar", "rgb(255, 255, 255)", boolean);
                });
            }
            else
            {
                console.error("colormode.js error: Colors undefined!");
            }
        }
        else
        {
            console.error("colormode.js error: Colors undefined!");
        }
    }
    $(document).mode();
}
else
{
    console.error("colormode.js error: jQuery not loaded!");
}
