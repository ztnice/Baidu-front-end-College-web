//保存网站
function save(){
    var site = new Object;
    site.keyName =document.getElementById("siteKey").value;
    site.siteName = document.getElementById("siteName").value;
    site.siteUrl = document.getElementById("siteUrl").value;
    //将对象转换为json
    var jsonStr = JSON.stringify(site);
    localStorage.setItem(site.keyName,jsonStr);
    alert("保存成功！");
    loadAll();
}
//查找网站
function find(){
    var findKey = document.getElementById("findSite").value;
    var jsonStr = localStorage.getItem(findKey);
    var findResult = JSON.parse(jsonStr);
    alert(findKey+"的网站名称是:"+findResult.siteName+",网址是："+findResult.siteUrl);
}
//删除网站
function del(){
    console.log(111);
    var deleteKey = document.getElementById("deleteSite").value;
    var jsonStr = localStorage.getItem(deleteKey);
    var result = JSON.parse(jsonStr);
    alert("要删除的网站是"+result.siteName+",网址是"+result.siteUrl);
    localStorage.removeItem(deleteKey);
    loadAll();
}
//将所有的以保存的网址展示在页面上
function loadAll() {
    var siteList = document.getElementById("findResult");
    if(localStorage.length>0){
        result = "<tr><td>别名</td><td>网站</td><td>网址</td></tr>";
        for(var i=0;i<localStorage.length;i++){
            var siteKey = localStorage.key(i);
            var jsonStr = localStorage.getItem(siteKey);
            console.log(jsonStr);
            var jsonResult = JSON.parse(jsonStr);
            console.log(jsonResult);
            result+="<tr><td>"+jsonResult.keyName+"</td><td>"+jsonResult.siteName+"</td><td>"+jsonResult.siteUrl+"</td></tr>";
        }
        siteList.innerHTML = result;
    }else{
        siteList.innerHTML="<tr><td>数据为空...</td></tr>"
    }
}
