var names = ["Yaarkov","John", "Jen", "Jason", "Paul","Joe","Jasmine","Robert","Peter"];

var byeSpeaker = {
  speakWord : "Good Bye ",
  speak : function(name){
    console.log(this.speakWord+name);
  }
};

var helloSpeaker = {
  speakWord : "Hello ",
  speak : function(name){
    console.log(this.speakWord+name);
  }
};

for(var i=0;i<names.length;i++){
  var firstLetter = names[i].charAt(0).toLowerCase();
  if(firstLetter==='j'){
    byeSpeaker.speak(names[i]);
  }else{
    helloSpeaker.speak(names[i]);
  }
}