// questão 01
function Vector(x,y){
    this.width = x
    this.heigth = y
}
Vector.prototype.plus = function(vector){
    var newWidth = this.width + vector.width
    var newHeigth = this.heigth + vector.heigth
    return new Vector(newWidth,newHeigth)
}
Vector.prototype.minus = function(vector){
    var newWidth = this.width - vector.width
    var newHeigth = this.heigth - vector.heigth
    return new Vector(newWidth,newHeigth)
}
Object.defineProperty(Vector.prototype,"length",{get: function(){
    return Math.sqrt(this.heigth*this.heigth + this.width*this.width)}
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

//questão 02
function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
      result += string;
    return result;
}
  
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }
    return result;
};
// my code
function StretchCell(inner,widht,heigth){
    this.inner = inner
    this.widht = widht
    this.height = heigth
}
StretchCell.prototype.minWidth = function(){
    if(this.inner.minWidth() >= this.widht){
        return this.inner.minWidth()
    }else{
        return this.widht
    } 
}
StretchCell.prototype.minHeight = function(){
    if(this.inner.minHeight() >= this.height){
        return this.inner.minHeight() + 1
    }else{
        return this.height
    }
}
StretchCell.prototype.draw = function(width,height){
    return this.inner.draw(width,height - 1).concat([repeat(" ",width)])
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

// questão 03

// entendi nada