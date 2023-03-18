"use strict";
const projectObj = {
  1: {
    name: "CV CÁ NHÂN",
    goals: [
      {
        name: "Giao diện CV 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Giao diện CV 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Giao diện CV 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        member: "Member 1",
        name: "Trần Du A",
      },
      {
        member: "Member 2",
        name: "Trần Du B",
      },
      {
        member: "Member 3",
        name: "Trần Du C",
      },
      {
        member: "Member 4",
        name: "Trần Du D",
      },
    ],
    scopes: {
      in: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      out: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        date: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  2: {
    name: "TRANG WEB QUẢN LÝ THÚ CƯNG",
    goals: [
      {
        name: "Quản lý thú 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Quản lý thú 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Quản lý thú 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        member: "Member 1",
        name: "Phan Thị A",
      },
      {
        member: "Member 2",
        name: "Phan Thị B",
      },
      {
        member: "Member 3",
        name: "Phan Thị C",
      },
      {
        member: "Member 4",
        name: "Phan Thị D",
      },
    ],
    scopes: {
      in: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      out: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        date: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  3: {
    name: "TRANG WEB XEM TIN TỨC",
    goals: [
      {
        name: "Dựng web 1",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Dựng web 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
      {
        name: "Dựng web 3",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in ipsam veniam vitae earum totam.",
      },
    ],
    team: [
      {
        member: "Member 1",
        name: "Lý Văn A",
      },
      {
        member: "Member 2",
        name: "Lý Văn B",
      },
      {
        member: "Member 3",
        name: "Lý Văn C",
      },
      {
        member: "Member 4",
        name: "Lý Văn D",
      },
    ],
    scopes: {
      in: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      out: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    primary: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam?",
    ],
    timeline: [
      {
        date: "Project Start",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        date: "Project Date",
        desc: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
};
// Get projectid param value from url
const url_str = window.location.href;
const url = new URL(url_str.toLowerCase());
const projectId = url.searchParams.get("projectid");
if (projectObj[projectId]) {
  // -- Replace some contents
  // Replace project name
  document.querySelector(".pj-name > *").innerText = projectObj[projectId].name;

  // Replace goals name
  const goalsEls = document.querySelectorAll("#goals strong");
  for (let i = 0; i < goalsEls.length; i++) {
    goalsEls[i].innerText = projectObj[projectId].goals[i].name;
  }

  // Replace team name
  const nameEls = document.querySelectorAll("#team p span");
  for (let i = 0; i < nameEls.length; i++) {
    nameEls[i].innerText = projectObj[projectId].team[i].name;
  }

  // Display error if projectid does not exist in projectObj
} else {
  document.querySelector(".pj-name > *").innerText = "(Không tìm thấy dự án)";
  document.querySelector(".pj-description").classList.add("d-none");
}

// Scroll to the project name
document.querySelector(".pj-name").scrollIntoView();
