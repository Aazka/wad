
var AccountDetail={
    AccountTitle:"aazka",
    AvalibleBalance:962155,
    AccountCurrency:"PKRS",
    IBAN:"PKN1234654321",
    deposit : function (event,value) {
        //var D=document.getElementById("deposit");
        if(!isNaN(value))
        {
            AccountDetail.AvalibleBalance=AccountDetail.AvalibleBalance+parseInt(value);
            //var balance = document.getElementById("deposit").innerText = AccountDetail.AvalibleBalance;
            if(event.key=="enter" || event.keyCode==13) {
               // AccountDetail.AvalibleBalance=AccountDetail.AvalibleBalance+parseInt(value);
                var balance = document.getElementById("deposit").innerText = AccountDetail.AvalibleBalance;
                //transction();
                var tran = document.getElementById("transaction - table");
                tran.innerHTML += '<tr>'
                    + '<td align="left" valign="middle" scope="col">+new Date()+</td>'
                    + '<td align="left" valign="middle" scope="col">+"credit"+</td>'
                    + '<td align="left" valign="middle" scope="col">+ AccountDetail.AvalibleBalance +</td>'
                    + '</tr>';
            }
        }
        else
        {
            var error=document.getElementById("deposit-msg").innerText="enter the vaild number";
        }
    },
    withDraw: function (event,value) {
        //var W=document.getElementById("withdraw");
        if(!isNaN(value))
        {
            if(event.key=="enter") {
                AccountDetail.AvalibleBalance=AccountDetail.AvalibleBalance-parseInt(value);
                var balance = document.getElementById("withdraw").innerText = AccountDetail.AvalibleBalance;
                //transction();
                var tran = document.getElementById("transaction - table");
                tran.innerHTML += '<tr>'
                    + '<td align="left" valign="middle" scope="col">+new Date()+</td>'
                    + '<td align="left" valign="middle" scope="col">+"withdraw"+</td>'
                    + '<td align="left" valign="middle" scope="col">+AccountDetail.AvalibleBalance+</td>'
                    + '</tr>';
            }
        }
        else
        {
            var error=document.getElementById("withdraw-msg").innerText="enter the vaild number";
        }
    }
}
function ShowInputUSerDetail()
{
    var name=document.getElementById("title").innerText=AccountDetail.AccountTitle;
    var balance=document.getElementById("balance").innerText=AccountDetail.AvalibleBalance;
    var currency=document.getElementById("currency").innerText=AccountDetail.AccountCurrency;
    var foren=document.getElementById("IBAN").innerText=AccountDetail.IBAN;
}
ShowInputUSerDetail();

/*function transction(var b)
{
    var tran=document.getElementById(transaction-table);
    tran.innerHTML+='<tr>'
        +'<td align="left" valign="middle" scope="col">+new Date()+</td>'
        +'<td align="left" valign="middle" scope="col"></td>'
        +'<td align="left" valign="middle" scope="col">+AccountDetail.AvalibleBalance+</td>'
        +'</tr>';
}*/
