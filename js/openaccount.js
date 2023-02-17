
async function createAccount()
{

    const jsonAccount = {
        "accountOwnerId": "", "accountOwnerFirstName": "", "accountOwnerLastName": "","accountOwnerEmail":""
    };

    jsonAccount.accountOwnerFirstName = document.getElementById("accountOwnerFirstNameId").value;
    if (jsonAccount.accountOwnerFirstName == "")
    {
        alert("FirstName is NULL");
        return false;
    }

    jsonAccount.accountOwnerLastName = document.getElementById("accountOwnerLastNameId").value;
    if (jsonAccount.accountOwnerLastName == "")
    {
         alert("LastName is NULL");
         return false;
    }

    jsonAccount.accountOwnerId = document.getElementById("accountOwnerIdId").value;
    if (jsonAccount.accountOwnerId == "")
    {
          alert("Id is NULL");
          return false;
    }

    jsonAccount.accountOwnerEmail = document.getElementById("accountOwnerEmailId").value;
    if (jsonAccount.accountOwnerEmail == "")
    {
          alert("Email is NULL");
          return false;
    }


    document.getElementById("activeButton").style.display = "none";
    document.getElementById("disabledButton").style.display = "block";

    const url = 'https://accountcontainer-26726uhbra-uc.a.run.app/api/v1/account/createaccount';
    let options = {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(jsonAccount) // body data type must match "Content-Type" header
    };

   try
   {

            const response = await fetch(url, options);

            if(!response.ok)
            {
                document.getElementById("activeButton").style.display = "block";
                document.getElementById("disabledButton").style.display = "none";
                const message = `User exist An error has occurred: ${response.status} `;
                throw new Error(message);
            }

            let dataResponse = response.json();
            dataResponse.then(
                function (results)
                {
                   alert("successful");
                   alert(JSON.stringify(results));
                   window.location.reload();
                },
                function (error)
                {
                    alert(error);
                    document.getElementById("activeButton").style.display = "block";
                    document.getElementById("disabledButton").style.display = "node";
                }
            );
    }
    catch(err)
    {
            alert(err); // Failed to fetch
    }

}