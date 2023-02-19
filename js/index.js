


displayAccounts().then(
    function (accountsArray)
    {
        for (let i = 0; i < accountsArray.length; i++)
        {
            let row = document.getElementById("allAccountsTableBody").insertRow(i);

            let numberCell = row.insertCell(0);
            let accountNumberCell = row.insertCell(1);
            let accountTypeCell = row.insertCell(2);
            let balanceCell = row.insertCell(3);
            let accountOwnerFirstNameCell = row.insertCell(4);
            let accountOwnerLastNameCell = row.insertCell(5);
            let accountOwnerEmailCell = row.insertCell(6);
            let accountOwnerIdCell = row.insertCell(7);

            numberCell.innerHTML= i+1;
            accountNumberCell.innerHTML = accountsArray[i].accountNumber;
            accountTypeCell.innerHTML = accountsArray[i].accountType;
            balanceCell.innerHTML = accountsArray[i].balance;
            accountOwnerFirstNameCell.innerHTML = accountsArray[i].accountOwnerFirstName;
            accountOwnerLastNameCell.innerHTML = accountsArray[i].accountOwnerLastName;
            accountOwnerEmailCell.innerHTML = accountsArray[i].accountOwnerEmail;
            accountOwnerIdCell.innerHTML = accountsArray[i].accountOwnerId;

        }
    }, // doesn't run
    function (error)
    {
        alert(error);
    }

);





async function displayAccounts()
{
    const getAllAccountsUrl = 'https://accountcontainer-26726uhbra-uc.a.run.app/api/v1/account/getaccounts';
    let getAccountsOptions = {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    };

    try
    {
        const getAllAccountsResponse = await fetch(getAllAccountsUrl, getAccountsOptions);

        if(!getAllAccountsResponse.ok)
        {
              const message = `An error has occurred: ${depositResponse.status} `;
              throw new Error(message);
        }

        let allAccounts = getAllAccountsResponse.json();
        return allAccounts;
    }
    catch(err)
    {
           alert(err); // Failed to fetch
    }

}