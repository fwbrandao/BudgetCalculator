draw = function (chartType, transportation, accom, meals, act, spending, misc, total) {
    
    if (transportation === "0" && accom === "0" && meals === "0" && act === "0" && spending === "0" && misc === "0") {
        document.getElementById("lblChartType").style.display = "none";
        document.getElementById("DropDownList1").style.display = "none";
        document.getElementById("chartPlaceholder").style.display = "none";
        document.getElementById("noDataPlaceholder").textContent = "Not enough data to draw chart";
    } else {
        var chart = new CanvasJS.Chart("chartContainer", {
            backgroundColor: "rgba(160, 32, 240, 0)",
            title: {
                fontColor: "#000066",
                text: "Total Budget: £" + total,
            },
            animationEnabled: true, //disable here

            data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: chartType,
            dataPoints: [
                    { label: "Transportation", y: parseFloat(transportation), indexLabelFontColor: "#000066" },
                    { label: "Accomodation", y: parseFloat(accom), indexLabelFontColor: "#000066" },
                    { label: "Meals", y: parseFloat(meals), indexLabelFontColor: "#000066" },
                    { label: "Activities", y: parseFloat(act), indexLabelFontColor: "#000066" },
                    { label: "Spending Money", y: parseFloat(spending), indexLabelFontColor: "#000066" },
                    { label: "Miscellaneous", y: parseFloat(misc), indexLabelFontColor: "#000066" }
            ]
        }
            ]
        });

        chart.render();
    }
}