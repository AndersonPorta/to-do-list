// Module that returns today's date. Ex: Monday, July 29
exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // Format date. Ex: Monday, July 29
    return today.toLocaleDateString("en-US", options);
};

// Module that returns today's day. Ex: Monday
exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long",
    };

    // Format date. Ex: Monday
    return today.toLocaleDateString("en-US", options);
}

