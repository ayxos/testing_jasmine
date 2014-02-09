var GameOfLife;

Cell = function() {

    var TWO_MATES = 2;
    var THREE_MATES = 3;
    var position;
    return{
      isAlive: function(mates){
        return (mates == TWO_MATES || mates == THREE_MATES);
        
      },
      revival: function(mates){
        return (mates == THREE_MATES);
      },
      setPosition: function(pos){
        position = pos;
      },
      getPosition: function(){
        return position;
      }

    };
};

Board = function(){

  return {
    countMates: function(cell){
    	return 3;
    }
  }

}