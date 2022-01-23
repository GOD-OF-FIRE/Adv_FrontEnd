let r = fetch("http://universities.hipolabs.com/search?country=India");

let s = r.then(function (response) {
  return response.json();
});

s.then(function (info) {
  //   console.log(info);
  let displayData = info;
  for (let i = 0; i < displayData.length; i++) {
    var name = displayData[i].name;
    let website = displayData[i].web_pages;
    console.log(displayData[i].web_pages);
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = "<td>" + name + "</td>" + "<td>" + website + "</td>";
    table.appendChild(tableRow);
  }
});
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let country = document.querySelector("input").value;
  let a = fetch(`http://universities.hipolabs.com/search?country=${country}`);

  let b = a.then(function (response) {
    return response.json();
  });

  b.then(function (info) {
    //   console.log(info);
    let displayData = info;
    for (let i = 0; i < displayData.length; i++) {
      var name = displayData[i].name;
      let website = displayData[i].web_pages;
      console.log(displayData[i].web_pages);
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = "<td>" + name + "</td>" + "<td>" + website + "</td>";
      table.appendChild(tableRow);
    }
  });
});
