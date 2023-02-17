
async function deposit()
{

    const jsonDeposit = {
        "depositAccount": "", "depositorFirstName": "", "depositorLastName": "","depositAmount":""
    };

    jsonDeposit.depositAccount = document.getElementById("depositAccountId").value;
    if (jsonDeposit.depositAccount == "")
    {
        alert("Enter Account Number");
        return false;
    }

    jsonDeposit.depositorFirstName = document.getElementById("depositorFirstNameId").value;
    if (jsonDeposit.depositorFirstName == "")
    {
         alert("Enter First Name");
         return false;
    }

    jsonDeposit.depositorLastName = document.getElementById("depositorLastNameId").value;
    if (jsonDeposit.depositorLastName == "")
    {
          alert("Enter Last Name");
          return false;
    }

    jsonDeposit.depositAmount = document.getElementById("depositAmountId").value;
    if (jsonDeposit.depositAmount == "")
    {
          alert("Enter Amount");
          return false;
    }


    document.getElementById("depositActiveButton").style.display = "none";
    document.getElementById("depositDisabledButton").style.display = "block";

    const url = 'https://accountcontainer-26726uhbra-uc.a.run.app/api/v1/account/deposit';
    let depositOptions = {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(jsonDeposit) // body data type must match "Content-Type" header
    };

   try
   {

            const depositResponse = await fetch(url, depositOptions);

            if(!depositResponse.ok)
            {
                document.getElementById("depositActiveButton").style.display = "block";
                document.getElementById("depositDisabledButton").style.display = "none";
                const message = `User exist An error has occurred: ${depositResponse.status} `;
                throw new Error(message);
            }

            let depositDataResponse = depositResponse.json();
            depositDataResponse.then(
                function (results)
                {
                   alert("successful");
                   alert(JSON.stringify(results));
                   window.location.reload();
                },
                function (error)
                {
                    alert(error);
                    document.getElementById("depositActiveButton").style.display = "block";
                    document.getElementById("depositDisabledButton").style.display = "node";
                }
            );
    }
   catch(err)
   {
       alert(err); // Failed to fetch
       document.getElementById("depositActiveButton").style.display = "block";
       document.getElementById("depositDisabledButton").style.display = "node";
   }

}