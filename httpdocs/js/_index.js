(function () {
  const projects = [
    {
      title: "HTML標籤小工具",
      image: "./img/projects/html_tags.webp",
      imageAlt: "HtmlTagTool",
      description:
        "剛開始學HTML時總是要記一大堆的語法，來設計自己的網頁，這個小工具能讓初學者不用記一大堆HTML的語法，進而減少製作網頁的時間。",
      badgeCaption: "HTML&JavaScript",
      links: {
        github: "https://github.com/sky0966548546/HtmlTagTool",
      },
      accomplishments: [
        "可以自訂HTML的標籤並且顯示自訂的標籤代碼",
        "包含了大中小標題、段落、換行區域...等等標籤",
        "並且可以任意更改字體大小以及顏色",
        "自訂完後可察看自訂的樣式 以及輸出代碼",
      ],
    },
    {
      title: "簡易網頁產生器",
      image: "./img/projects/html.webp",
      imageAlt: "SimpleHTML",
      description:
        "如果不會網頁設計，但想要一個簡單又好看的個人網頁，這個程式只要輸入你喜歡的顏色，以及你想要呈現的資料，即可完成一個簡單的個人網頁。",
      badgeCaption: "Python&CSS",
      links: {
        github: "https://github.com/sky0966548546/SimpleHTML",
      },
      accomplishments: [
        "可任意更改網頁顏色/字體",
        "輸入個人基本資料",
        "即可快速完成一個簡單又好看的個人網頁",
      ],
    },
    {
      title: "小破站漫畫下載器",
      image: "./img/projects/manga.webp",
      imageAlt: "MangaDownload",
      description:
        "在網站上看到喜歡的漫畫，或是看到別人傳的車牌又不知道那是什麼，沒關係，這個程式可以幫助你，輸入號碼即可下載整本漫畫。",
      badgeCaption: "Python",
      links: {},
      accomplishments: [
        "可輸入網路上看到的漫畫編號",
        "或著沒靈感的時候會隨機找一本給你",
        "利用Python爬蟲來下載整本漫畫",
      ],
    },
  ];

  const blogPosts = [
    {
      name: "我的Github",
      image: "./img/about-me/about-me-1.webp",
    },
    {
      name: "兔子波卡",
      image: './img/about-me/about-me-2.webp"',
    },
    {
      name: "興趣-組模型",
      link: "https://bit.ly/2Oxf8ax",
      image: "./img/about-me/about-me-3.webp",
    },
    {
      name: "偶像-桐谷和人",
      link: "https://www.instagram.com/weii_0504/",
      image: "./img/about-me/about-me-4.webp",
    },
  ];

  const nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight;
  const skillOffsetHeight = document.getElementById("skill").offsetTop;
  const projectOffsetHeight = document.getElementById("project").offsetTop;
  const actionBtn = document.querySelector(".fixed-action-btn a:first-of-type");
  let skillsAnimated = false;
  let aboutCardPlaced = false;
  let projectPlaced = false;
  let learnMoreAnimated = false;

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations);
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) {
      return nav.classList.add("blue-grey", "lighten-3", "shadow");
    }
    nav.classList.remove("blue-grey", "lighten-3", "shadow");
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) {
      return actionBtn.classList.remove("scale-out");
    }
    actionBtn.classList.add("scale-out");
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) {
      return;
    }
    // switch status to placed
    aboutCardPlaced = true;
    // get about section
    const aboutSection = document.querySelector(".section-about .row");
    // generate html for each blog post
    blogPosts.forEach((post) => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  <br>${post.name}
                </span>
              </div>
          </div>
        </div>
      `;
    });
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) {
      return;
    }
    const firstSkillSection = document.getElementById(
      "front-end-carousel-item"
    );
    const animations = ["animated", "slideInRight"];
    skillsAnimated = true;
    firstSkillSection.classList.add(...animations);
    firstSkillSection.addEventListener("animationend", () =>
      handleAnimationEnd(event.target, animations)
    );
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``;
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`;
    }
    return icons;
  }

  function getAccomplishments(accomplishments) {
    return accomplishments
      .map((point) => `<li><i class="fas fa-caret-right"></i>${point}</li>`)
      .join("");
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) {
      return;
    }
    // get elements
    const projectSection = document.querySelector(".section-project .row");
    // switch status to placed
    projectPlaced = true;
    // generate html for each project
    projects.forEach((project) => {
      // Get all icon links
      const icons = getIconLinks(project.links);
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments);

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">功能<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `;
    });
  }

  window.addEventListener("scroll", () => {
    animateNav();
    showFloatingActionButton();
    if (!aboutCardPlaced) {
      animateAboutCards();
    }
    if (!skillsAnimated) {
      animateSkills();
    }
    if (!projectPlaced) {
      placeProjects();
    }
    if (!learnMoreAnimated && projectPlaced) {
      animateLearnMore();
    }
  });
})();