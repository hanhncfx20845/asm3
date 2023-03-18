"use strict";
const projectObj = {
  1: {
    name: "CV CÁ NHÂN",
    goals: [
      {
        title: "Giao diện CV 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Giao diện CV 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Giao diện CV 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        title: "Member 1",
        desc: "Trần Du A",
      },
      {
        title: "Member 2",
        desc: "Trần Du B",
      },
      {
        title: "Member 3",
        desc: "Trần Du C",
      },
      {
        title: "Member 4",
        desc: "Trần Du D",
      },
    ],
    scopes: [
      {
        title: "IN",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "OUT",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        title: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  2: {
    name: "TRANG WEB QUẢN LÝ THÚ CƯNG",
    goals: [
      {
        title: "Quản lý thú 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Quản lý thú 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Quản lý thú 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        title: "Member 1",
        desc: "Phan Thị A",
      },
      {
        title: "Member 2",
        desc: "Phan Thị B",
      },
      {
        title: "Member 3",
        desc: "Phan Thị C",
      },
      {
        title: "Member 4",
        desc: "Phan Thị D",
      },
    ],
    scopes: [
      {
        title: "IN",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "OUT",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        title: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  3: {
    name: "TRANG WEB XEM TIN TỨC",
    goals: [
      {
        title: "Dựng web 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Dựng web 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        title: "Dựng web 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        title: "Member 1",
        desc: "Lý Văn A",
      },
      {
        title: "Member 2",
        desc: "Lý Văn B",
      },
      {
        title: "Member 3",
        desc: "Lý Văn C",
      },
      {
        title: "Member 4",
        desc: "Lý Văn D",
      },
    ],
    scopes: [
      {
        title: "IN",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "OUT",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        title: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
};

// Get projectid param value from url
const url_str = window.location.href;
const url = new URL(url_str.toLowerCase());
const projectId = url.searchParams.get("projectid");

// Function to replace content of section
const replaceProjectSection = function (element, objName) {
  // Clone the first child of the element as a template
  const tempEl = element.querySelector(".section-item").cloneNode(true);
  // Remove the content before appending the new ones
  element.innerHTML = "";
  for (let i = 0; i < projectObj[projectId][objName].length; i++) {
    // Clone it to append multiple times
    const item = tempEl.cloneNode(true);
    if (objName === "primary") {
      item.querySelector(".desc").innerHTML = projectObj[projectId][objName][i];
    } else {
      item.querySelector(".title").innerHTML =
        projectObj[projectId][objName][i].title;
      item.querySelector(".desc").innerHTML =
        projectObj[projectId][objName][i].desc;
      if (objName === "timeline") {
        // Create string number, which is index+1, and displaying "0" if it's less than 10
        const numString = (i + 1 < 10 ? "0" : "") + (i + 1);
        item.querySelector(".title-number").innerHTML = numString;
      }
    }
    element.appendChild(item);
  }
};
// Check if the project exists
if (projectObj[projectId]) {
  // Replace project name
  document.querySelector(".pj-name > *").innerHTML = projectObj[projectId].name;

  // Declare an array list of sections to be replaced
  const sectionArray = ["goals", "team", "scopes", "primary", "timeline"];
  sectionArray.forEach(function (i) {
    // Select the desc element of the section
    const sectionEl = document.querySelector("#" + i + " .section-description");
    // Replace its content with the corresponding object name in projectObj
    replaceProjectSection(sectionEl, i);
  });

  // Display error if projectid does not exist in projectObj
} else {
  document.querySelector(".pj-name > *").innerHTML = "(Không tìm thấy dự án)";
  document.querySelector(".pj-description").classList.add("d-none");
}

// By default, scroll to the project name after page loads
document.querySelector("#project-charter").scrollIntoView();
