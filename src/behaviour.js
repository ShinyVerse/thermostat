$(document).ready(function(){

  var thermo = new Thermostat;
  function updateThermostat(){
    $('#temp').text(thermo.temperature);
    // $('#usage').text(thermo.getCurrentEnergyUsage());
    $('#usage').attr('class', thermo.getCurrentEnergyUsage());
  }

  $('#increase').on('click',function(){
      thermo.up();
      updateThermostat();
  });

  $('#decrease').on('click',function(){
      thermo.down();
      updateThermostat();
  });

  $('#reset').on('click',function(){
      thermo.reset();
      updateThermostat();
  });

  $('#powersave').on('click',function(){
      thermo.togglePowerSave();
      $('#powersave').text(thermo.isPowerSave ? "ON" : "OFF");
      updateThermostat();
  });

});
