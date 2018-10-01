describe("thermostat", function() {

    var thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe("thermostat starts", function() {
        it("at 20 degrees", function() {
            expect(thermostat.GetCurrentTemperature()).toEqual(20);
        });
    }); 
});