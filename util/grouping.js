class Grouping {
    static groupBy(array, groupBy) {
        const test = {};
        array.forEach((element) => {
            test[element[groupBy]] = test[element[groupBy]] || [];
            test[element[groupBy]].push(element);
        });
        return test;
    }
}

module.exports = Grouping;