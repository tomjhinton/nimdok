const rapidLib = RapidLib()



var myRegression = new rapidLib.Regression()

const myClassification = new rapidLib.Classification()

const mySeriesClassification  = new rapidLib.SeriesClassification()

var myData = [
          {
            input:  [48],
            output: [130.81]
          },
          {
            input:  [54],
            output: [185.00]
          },
          {
            input:  [60],
            output: [261.63]
          },
          {
            input:  [66],
            output: [369.994]
          },
          {
            input:  [72],
            output: [523.25]
          }
        ];

myRegression.train(myData)

console.log(myRegression.run([64]))
