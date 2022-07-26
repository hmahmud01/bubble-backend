'use strict';

exports.modifierWord = function(req, res){
    var data_get = req.body;

    var input = data_get.word;
    var eraser = data_get.remover;

    var output = input.replaceAll(eraser, '');
    console.log(output);

    var data = {
        'output' : output,
    }

    console.log(data);

    res.json(data);
}