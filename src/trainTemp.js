function trainTempCallback(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
};

const a = trainTempCallback(1000);
