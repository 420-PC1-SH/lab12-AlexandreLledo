function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let id = Number(parts[0]);
    let rawData = parts[1];
    return {
        id: id,
        rawData: rawData
    };
}


module.exports = processor;
