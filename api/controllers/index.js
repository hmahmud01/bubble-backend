'use strict';

exports.modifierWord = function(req, res){
    var data_get = req.body;

    console.log(data_get.remover);
    var word = "woooody";

    var remover = "o";

    var newword = word.replaceAll(remover, '');

    console.log(newword);

    var data = {
        'output' : newword,
    }

    console.log(data);

    res.json(data);
}