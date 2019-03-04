describe('plane', function() {
  it('should change airborne status to false when instructed to land', function() {
    var plane = new Plane()
    plane.land()
    expect(plane.airborneStatus).toEqual(false)
  })
})