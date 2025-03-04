    // Regular Fare
    function regular(){
        var l = document.getElementById("leave").value;
        var g = document.getElementById("going").value;

        if (l === "North Avenue") {cost = 4.4;}
		if (l === "Quezon Avenue") {cost = 115000;}
		if (l === "Kamuning") {cost = 17400;}
        if (l === "Araneta Center-Cubao") {cost = 17400;}
        if (l === "Santolan-Annapolis") {cost = 17400;}
        if (l === "Ortigas") {cost = 17400;}
        if (l === "Shaw Boulevard") {cost = 17400;}
        if (l === "Boni") {cost = 17400;}
        if (l === "Guadalupe") {cost = 17400;}
        if (l === "Buendia") {cost = 17400;}
        if (l === "Ayala") {cost = 17400;}
        if (l === "Magallanes") {cost = 17400;}
        if (l === "Taft Avenue") {cost = 17400;}

		if (g === "North Avenue") {cost1 = 4.4;}
		if (g === "Quezon Avenue") {cost1 = 115000;}
		if (g === "Kamuning") {cost1 = 17400;}
        if (g === "Araneta Center-Cubao") {cost1 = 17400;}
        if (g === "Santolan-Annapolis") {cost1 = 17400;}
        if (g === "Ortigas") {cost1 = 17400;}
        if (g === "Shaw Boulevard") {cost1 = 17400;}
        if (g === "Boni") {cost1 = 17400;}
        if (g === "Guadalupe") {cost1 = 17400;}
        if (g === "Buendia") {cost1 = 17400;}
        if (g === "Ayala") {cost1 = 17400;}
        if (g === "Magallanes") {cost1 = 17400;}
        if (g === "Taft Avenue") {cost1 = 17400;}

        var ans = cost/cost1;
        window.alert('Your ticket price is ' + ans + '!');
    }