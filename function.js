// 处理类名兼容性问题
function getClass(classname){
   if(document.getElementsByClassName){
     return document.getElementsByClassName(classname)
   }else{
     var tags=document.getElementsByTagName('*');
     var arr=[];
     for(var i=0;i<tags.length;i++){
     	if(tags[i].className==classname){
            arr.push(tags[i])
     	}
     }
     return arr;
   }
}
// 兼容的更改、获取、设置某个属性的值 
function cssrule(a,b){
  var a=a||0;
  var b=b||0;
  if(document.getElementsByClassName){
    return document.styleSheets[a].cssRules[b].style;
  }else{
    return document.styleSheets[a].rules[b].style;
  }
}
// 用来获得实际的样式属性
function getstyle(obj){
  if(document.getElementsByClassName){
    return getComputedStyle(obj,null)
  }else{
    return obj.currentStyle
  }
}

//通过节点获取所有的子元素
function getChilds(obj){
  var childs=obj.childNodes;
  var arr=[];
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==3&&/^\s+$/.test(childs[i].nodeValue)){
      continue;
    }else{
      arr.push(childs[i])
    }
  }
  return arr;
}

// 获得第一个子节点
function getFirst(obj){
   return getChilds(obj)[0]
}

// 获得最后一个子节点
function getLast(obj){
  return getChilds(obj)[getChilds(obj).length-1]
}

// 获得下一个兄弟节点的引用
function getNext(obj){
  var next=obj.nextSibling;
  if(next==null){
      return null;
     }
  while(next.nodeType!=1){
     next=next.nextSibling;
     if(next==null){
      return null;
     }
  } 
  return next;
}

// 获得上一个兄弟节点的引用
function getPrevious(obj){
  var previous=obj.previousSibling;
  if(previous==null){
      return null;
     }
  while(previous.nodeType!=1){
     previous=previous.previousSibling;
     if(previous==null){
      return null;
     }
  } 
  return previous;
}

//创建元素节点
function createObj(obj){
  return document.createElement(obj);
}

//将a添加到父对象中
function appendObj(obj,parent){
  parent.appendChild(obj);
}

//将a添加到b的前面
function addBefore(a,b){
  var parent=b.parentNode;
  parent.insertBefore(a,b)
}

//将a添加到b的后面
function addAfter(a,b){
  var parent=b.parentNode;
  var next=getNext(b);
  if (next==null) {
    parent.appendChild(a)
  }else{
    parent.insertBefore(a,next)
  }
}

//删除某个元素
function removerObj(obj){
  var parent=obj.parentNode;
  parent.removeChild(obj)
}

//将newobj替换成oldobj
function replaceObj(newobj,oldobj){
  var parent=oldobj.parentNode;
  parent.replaceChild(newobj,oldobj);
}

//克隆obj
function cloneObj(obj,bull){
  bull=false||bull;
  return obj.cloneNode(bull)
}