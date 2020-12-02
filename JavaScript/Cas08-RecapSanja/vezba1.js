const positivePercent = (numberOfTests, numberOfPositiveTests) => (numberOfPositiveTests / numberOfTests) * 100;
console.log('Procentot na pozitivni e : ' + positivePercent(1000, 400));