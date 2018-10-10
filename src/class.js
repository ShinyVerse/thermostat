var Thermostat = (function () {

  function increaseTemperature (temperature, degrees, max) {
    var newTemp = temperature + degrees;
    return newTemp > max ? max : newTemp
  };

  function decreaseTemperature(temperature, degrees) {
     var newTemp = temperature - degrees;
     return newTemp < 10 ? 10 : newTemp
  };

  return function () {
    var temperature = 20;
    var isPowerSave = true;
    var maximumTemp = 25;

    return {
      stats: function () {
        return {
          temperature: temperature,
          isPowerSave: isPowerSave,
          maximumTemp: maximumTemp
        }
      },
      increase: function (degrees) {
        temperature = increaseTemperature(
          temperature,
          degrees === undefined ? 1 : degrees,
          maximumTemp
        )
        return temperature
      },
      decrease: function (degrees) {
        temperature = decreaseTemperature(
          temperature,
          degrees === undefined ? 1 : degrees
        )
        return temperature
      }
    }
  }
})()

var Clock = (function () {
  return function (thermostat) {
    var cbs = [];
    var interval = setInterval(checkTemperature, 1000);

    function checkTemperature () {
      if (thermostat.stats().temperature >= 23) {
        cbs.forEach(function (cb) {
          cb();
        })
        clearInterval(interval)
      }
    }

    return {
      onRing: function (cb) {
        cbs.push(cb)
      }
    }
  }
})()

var thermo = Thermostat()

var clock = Clock(thermo)

clock.onRing(function () {
  alert('WAKE UP!')
})


Testing AJAX ////////////////////////////
//
// function getUser () {
//   return $.get('/api/currentuser')
// }
//
// describe('getUser', function () {
//   it('should call $.get and return a user', function () {
//     var api = jest.spyOn(jQuery, 'get').mockImplementation(function () {
//       return new Promise(function (res, rej) {
//         return res({ name: 'Alan' })
//       })
//     })
//
//     return getUser().then(function (user) {
//       expect(user).toEqual({ name: 'Alan' })
//     })
//   })
// })
//
