var stage;
var layer;
/**
 * DOCUMENT IS READY
 */
$(function() {
    console.log("Ready.");

    // Will be "full screen"
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Create Konva Stage
    stage = new Konva.Stage({
        container: 'canvas',   // id of container <div>
        width: width,
        height: height
    });


    Konva.Image.fromURL('/shirt.png', function (shirtNode) { // <- This line is for debugging locally
        
        // Create a new layer in the Stage
        layer = new Konva.Layer();

        // Add the layer to the stage
        stage.add(layer);

        // Create Shirt Node
        shirtNode.setAttrs({
            x: 5,
            y: 5,
            scaleX: 1.5,
            scaleY:1.5,
            draggable: true,
            name:"hide",
        });

        // Add the Shirt node to the layer
        layer.add(shirtNode);

        // Redraw the layer
        layer.draw();


    });

});