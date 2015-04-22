var mammal = function (spec) {
    var self = {};
    self.getName = function () {
        return spec.name;
    };
    self.says = function () {
        return spec.saying || '';
    };
    return self;
};

var myMammal = mammal({name: 'Herb'});

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var self = mammal(spec);
    self.purr = function (n) {
        var s = '';
        for (var i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    self.getName = function () {
        return self.says() + ' ' + spec.name +
            ' ' + self.says();
    };
    return self;
};

var myCat = cat({name: 'Henrietta'});
