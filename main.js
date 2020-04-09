const Ray = function(){
  return {
    length: 0,

    push: function(val){
      this[this.length] = val
      this.length++
    },

    pop: function(){
      this.length--
      let x = this[this.length]
      delete this[this.length]
      return x
    },

    unshift: function(val){
      for (let i=this.length-1; i>=0; i--){
        let x = this[i]
        delete this[i]
        this[i+1] = x
      }
      this[0] = val
      this.length++
    },

    shift: function(){
      let y = this[0]
      delete this[0]
      for (let i=1; i<this.length; i++){
        let x = this[i]
        delete this[i]
        this[i-1] = x
      }
      this.length--
      return y
    },

    include: function(val){
      for (let i=0; i<this.length; i++){
        if (this[i]===val){
          return true
        }
      }
      return false
    },

    indexOf: function(val){
      for (let i=0; i<this.length; i++){
        if (this[i]===val){
          return i
        }
      }
      return -1
    },

    reverse: function(){
      for (let i=0; i<Math.floor(this.length/2); i++){
        let x = this[i]
        let y = this[this.length-1-i]
        delete this[i]
        delete this[this.length-1-i]
        this[i] = y
        this[this.length-1-i] = x
      }
    },

    slice: function(num1,num2){
      const newObj = Ray()
      if (num2===undefined){
        for (let i=num1; i<this.length; i++){
          newObj.push(this[i])
        }
      }
      else {
        for (let i=num1; i<num2; i++){
          newObj.push(this[i])
        }
      }
      return newObj
    },

    map: function(func){
      const newObj = Ray()
      for (let i=0; i<this.length; i++){
        newObj.push(func(this[i],i,this))
      }
      return newObj
    },

    filter: function(func){
      const newObj = Ray()
      for (let i=0; i<this.length; i++){
        if (func(this[i],i,this)===true){
          newObj.push(this[i])
        }
      }
      return newObj
    },
  }
}


module.exports = {
  Ray,
}