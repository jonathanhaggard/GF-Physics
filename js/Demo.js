/**
* The Matter.js development demo and testing tool.
*
* This demo uses MatterTools, you can see the wiki for a simple example instead:
* https://github.com/liabru/matter-js/wiki/Getting-started
*
* NOTE: For the actual example code, refer to the source files in `/examples/`.
*
* @class Demo
*/

(function() {
    var examples = [

        { name: 'Concave SVG Paths', id: 'svg' }

    ];

    var sourceLinkRoot = 'https://github.com/liabru/matter-js/blob/master/examples';

    for (var i = 0; i < examples.length; i += 1) {
        var example = examples[i];
        example.sourceLink = sourceLinkRoot + '/' + example.id + '.js';
        example.init = window.Example[example.id];

        if (!example.init) {
            console.warn('Example not loaded:', example.id);
        }
    }



    var demo = MatterTools.Demo.create({
        toolbar: {
            title: 'matter-js',
            url: 'https://github.com/liabru/matter-js',
            reset: false,
            source: false,
            inspector: false,
            tools: false,
            fullscreen: false,
            exampleSelect: false
        },
        tools: {
            inspector: false,
            gui: false
        },
        inline: false,
        preventZoom: true,
        resetOnOrientation: false,
        routing: false,
        startExample: 'svg',
        examples: examples
    });



    MatterTools.Demo.start(demo);
})();
