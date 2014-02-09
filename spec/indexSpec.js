describe("GameOfLife", function() {

  beforeEach(function() {
    cell = Cell();
    board = Board();
  });

  describe("Celdas", function(){

    describe("Devolver posicion", function(){
      it("Puede devolver la posicion", function() {
        cell.setPosition([2,3]);
        var pos = cell.getPosition();
        expect(pos).toEqual([2,3]);
      });
    });

    describe("Debe estar vivo", function(){
      it("Debe estar vivo si tiene 2  vecinos", function() {
        expect(cell.isAlive(2)).toBe(true);
      });
      it("Debe estar vivo si tiene 3 vecinos", function() {
        expect(cell.isAlive(3)).toBe(true);
      });
    });

    describe("Debe estar muerto", function(){
      it("Debe estar muerto si no tiene vecinos", function() {
        expect(cell.isAlive(0)).toBe(false);
      });
      it("Debe estar muerto si tiene un vecino", function() {
        expect(cell.isAlive(1)).toBe(false);
      });
      it("Debe estar muerto si tiene 4 vecinos", function() {
        expect(cell.isAlive(4)).toBe(false);
      });
      it("Debe estar muerto si tiene 8 vecinos", function() {
        expect(cell.isAlive(8)).toBe(false);
      });
    });

    describe("Debe revivir", function(){
      it("No debe revivir si estando muerto tiene cuatro vecinos", function() {
        expect(cell.revival(4)).toBe(false);
      });
      it("No debe revivir si estando muerto tiene tres vecinos", function() {
        expect(cell.revival(3)).toBe(true);
      });
    });
  });

  describe("Board", function(){
    it("El tablero debe devolver cúantos vecinos vivos tiene una célula", function(){
      expect(board.countMates(cell)).toBe(3);
    });
  });
});