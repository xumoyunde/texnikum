function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}

const courseCards = document.querySelectorAll('.course-card button');

courseCards.forEach(button => {
  button.addEventListener('click', () => {
    alert('Kurs haqida ko\'proq ma\'lumot olish uchun tez orada siz bilan bog\'lanamiz!');
  });
});

// COURSES 

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.course-card button');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const courseName = this.parentElement.querySelector('h3').innerText;
          alert(`More information about: ${courseName}`);
      });
  });
});

// OUR TEACHERS

document.addEventListener('DOMContentLoaded', function () {
  const teachers = [
    {
      img: 'images/1.png',
      name: "O'ktamjon Turg'unov",
      direction: 'Senior C# Developer @ CAFU, Noon & Super Unlimited Inc.',
      info: 'He has over 10 years of experience in C# development and has worked on numerous high-profile projects. He is known for his deep understanding of software architecture and his ability to mentor junior developers.'
    },
    {
      img: 'images/2.png',
      name: 'Xumoyun Xakimjonov',
      direction: 'Flutter Software Engineer @ Google, Ex-Amazon, Ex-Facebook',
      info: 'Xumoyun Xakimjonov is a Flutter Software Engineer currently working at Google. With his past experiences at Amazon and Facebook, he brings a wealth of knowledge in mobile application development. He is known for his ability to create highly responsive and user-friendly mobile applications.'
    },
    {
      img: 'images/3.png',
      name: 'Akobir Xushvaqtov',
      direction: 'Senior Web Developer @ Affirm, Meta, Google, Ex-Facebook',
      info: 'Akobir Xushvaqtov is a Senior Web Developer at Affirm. Having worked at Google and Facebook, Akobir has a diverse tech background and is skilled in various web technologies. He is known for his ability to develop scalable and efficient web applications.'
    },
    {
      img: 'images/4.png',
      name: 'Qudratillo Xamidjonov',
      direction: 'Graphic Designer @ Landor Associates, Apple, Ex-Canva',
      info: 'Qudratillo Xamidjonov is a Graphic Designer at Landor Associates. With his past experiences at Apple and Canva, Qudratillo brings a unique perspective to design. He is known for his ability to create visually appealing and user-friendly designs.'
    },
    {
      img: 'images/5.png',
      name: 'Samandar Abdurahmonov',
      direction: 'Software Engineer, Android Developer, @ Microsoft, Apple, NVIDIA',
      info: 'Samandar Abdurahmonov is a Software Engineer and Android Developer currently working at Microsoft. With his past experiences at Apple and NVIDIA, Samandar brings a wealth of knowledge in software development and Android platform. He is known for his ability to develop efficient and user-friendly Android applications.'
    },
  ];

  const containers = document.querySelectorAll('.teacher-container');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let currentIndex = 0;

  function updateContainers() {
    containers.forEach((container, index) => {
      const teacher = teachers[(currentIndex + index) % teachers.length];
      container.querySelector('.teacher-img').src = teacher.img;
      container.querySelector('.teacher-info h3').innerText = teacher.name;
      container.querySelector('.teacher-info p:nth-of-type(1)').innerText = `${teacher.direction}`;
      container.querySelector('.teacher-info p:nth-of-type(2)').innerText = `${teacher.info}`;
      container.style.display = 'block';
    });
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + teachers.length) % teachers.length;
    updateContainers();
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % teachers.length;
    updateContainers();
  });
  updateContainers();
});