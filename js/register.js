/**
 * Created by zb on 2016/6/23.
 */

    $(function(){
        createCode()
    })

var code ; //��ȫ�� ������֤��
function createCode() {
    code = "";
    var codeLength = 4;//��֤��ĳ���
    var checkCode = document.getElementById("checkCode");
    var selectChar = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//���к�ѡ�����֤����ַ�����ȻҲ���������ĵ�
    for(var i=0;i<codeLength;i++)
    {
        var charIndex = Math.floor(Math.random()*26);
        code +=selectChar[charIndex];
    }
    if(checkCode)
    {
        checkCode.className="code";
        checkCode.innerHTML = code;
    }

}