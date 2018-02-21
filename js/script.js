var yuntemp;
var lefttemp;
var righttemp;
var result=0;
var count=0;
var num=new Array(4);
$(function () {
    var x = 13;
    var y = 1;
    for(var i=11;i<15;i++){
        var tid="#"+i;
        num[i-11]=parseInt(Math.random() * (x - y + 1) + y);
        $(tid).text(num[i-11]);
    }
    $("#result").click(function () {
        alert("??");
        for(var i=11;i<15;i++){
            var tid="#"+i;
            $(tid).text(num[i-11]);
        }
    })
    $("#yunsuanfu button").click(function () {
        var temp=$.trim($(this).text());
        $(this).text("...");
        $(this).attr("disabled","disabled");
        $(this).siblings().attr("disabled","disabled");
        $("#center").text(temp);
        yuntemp=$(this).attr("id");
        var yunsuantemp=$.trim($("#center").text());
        if($.trim($("#left").text())==='' || $.trim($("#right").text())===''){

        }
        else{
            result=parseInt(getResult($.trim($("#left").text()),$.trim($("#right").text()),$.trim($("#center").text())));
            count--;
            if(result===24 && count===3 ){
                alert("对了");
                window.location.reload();
            }
            $("#result").text(result);
            for(var i=11;i<15;i++){
                var myid="#"+i;
                if($.trim($(myid).text())==='...'){
                    $(myid).text(result);
                    break;
                }
            }
            var yunid="#"+yuntemp;
            $(yunid).text(yunsuantemp);
            $(".shuzi").removeAttr("disabled");
            $(".yunsuan").removeAttr("disabled");
            $("#left").text("");
            $("#center").text("");
            $("#right").text("");
        }
    })
    $("#center").click(function () {
        var yun=$.trim($(this).text());
        if(yun===''){
            alert("空的")
            return;
        }
        else{
            $(".yunsuan").removeAttr("disabled");
            var t="#"+yuntemp;
            $(t).text(yun);
            $(this).text("");
        }
    })
    $("#shuzi button").click(function () {
        count++;
        var temp=$.trim($(this).text());
        var left=$.trim($("#left").text());
        $(this).text("...");
        $(this).attr("disabled","disabled");
        if(left===''){
            $("#left").text(temp);
            lefttemp=$(this).attr("id");
            $(this).attr("disabled","disabled");
        }
        else{
            $("#right").text(temp);
            righttemp=$(this).attr("id");
            $(this).siblings().attr("disabled","disabled");
            var yunsuantemp=$.trim($("#center").text());
            if($.trim($("#center").text())===''){
            }
            else{
                result=parseInt(getResult($.trim($("#left").text()),$.trim($("#right").text()),$.trim($("#center").text())));
                count--;
                if(result===24 && count===3 ){
                    alert("对了");
                    window.location.reload();
                }
                $("#result").text(result);
                for(var i=11;i<15;i++){
                    var myid="#"+i;
                    if($.trim($(myid).text())==='...'){
                        $(myid).text(result);
                        break;
                    }
                }
                var yunid="#"+yuntemp;
                $(yunid).text(yunsuantemp);
                $(".shuzi").removeAttr("disabled");
                $(".yunsuan").removeAttr("disabled");
                $("#left").text("");
                $("#center").text("");
                $("#right").text("");
            }
        }
    })
    $("#left").click(function () {
        count--;
        var left=$.trim($(this).text());
        if(left===''){
            alert("空的")
            return;
        }
        else{
            $(".shuzi").removeAttr("disabled");
            var t="#"+lefttemp;
            var tr="#"+righttemp;
            $(t).text(left);
            if($.trim($("#right").text())===''){
            }
            else{
                $(tr).attr("disabled","disabled");
            }
            $(this).text("");
        }
    })
    $("#right").click(function () {
        count--;
        var right=$.trim($(this).text());
        if(right===''){
            alert("空的")
            return;
        }
        else{
            $(".shuzi").removeAttr("disabled");
            var t="#"+righttemp;
            var tl="#"+lefttemp;
            $(t).text(right);
            if($.trim($("#left").text())===''){
            }
            else{
                $(tl).attr("disabled","disabled");
            }
            $(this).text("");
        }
    })
    function getResult(num1,num2,yunsuanfu) {
        if(yunsuanfu==='+'){
            return parseInt(num1)+parseInt(num2);
        }
        else if(yunsuanfu==='-'){
            return parseInt(num1)-parseInt(num2);
        }
        else if(yunsuanfu==='×'){
            return parseInt(num1)*parseInt(num2);
        }
        else if(yunsuanfu==='/'){
            return parseInt(num1)/parseInt(num2);
        }
    }
})