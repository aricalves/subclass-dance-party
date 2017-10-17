class Tomato extends Ingredient {
  constructor() {
    super();
    this.$node = $('<img src="imgs/tomato.png" class="ingredient tomato" alt="tomato"></img>');
    this.height = this.$node[0].clientHeight;
  }
}