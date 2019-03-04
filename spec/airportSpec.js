describe('airport', function() {
  it('should add plane to airport when instructed to land there', function() {
    var plane = 'plane'
    var airport = new Airport()
    airport.land(plane)
    
    expect(airport.planes).toEqual([plane])
  })
})