function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('.ranked-list');
  for(let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
} 

function deepestChild() {
  let deepestChild = document.querySelectorAll('div#grand-node');
    if(!deepestChild.length) { return false; }
    else {return deepestChild[deepestChild.length-1];
  } 
}
