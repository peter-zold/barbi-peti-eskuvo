

// document.addEventListener("DOMContentLoaded", function() {
//   showSection('about');
// });


// function showSection(id) {
//   const sections = document.querySelectorAll('main > section');
//   sections.forEach(section => {
//     if (section.id === id) {
//       section.style.display = 'block';
//     } else {
//       section.style.display = 'none';
//     }
//   });

//   // görgess az adott szekcióhoz, ha szükséges
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' });
//   }
//   // window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// document.querySelectorAll('.navbar a').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();

//     const targetId = this.getAttribute('data-target');
//     const sections = document.querySelectorAll('main section');

//     // Elrejt minden szekciót
//     sections.forEach(sec => {
//       sec.style.display = 'none';
//     });

//     // Megjeleníti a kiválasztott szekciót
//     const targetSection = document.getElementById(targetId);
//     if (targetSection) {
//       targetSection.style.display = 'block';
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  showSection('about');
  // első betöltéskor a lap tetejére
  window.scrollTo(0, 0);
});

function showSection(id) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
}

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-target');
    const sections = document.querySelectorAll('main section');

    sections.forEach(sec => {
      sec.style.display = 'none';
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';

      // Görgessen a main elem tetejére, hogy a navbar ne takarjon ki
      const main = document.querySelector('main');
      const offsetTop = main.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
