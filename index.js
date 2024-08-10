document.addEventListener('DOMContentLoaded', () => {
  const d = document;
  const menuBtns = d.querySelectorAll(".menubtn");
  const row = d.querySelector(".row"); // Ensure .row exists in the DOM
  const scrlbtn = d.querySelectorAll(".btnc");
  const boxes = d.querySelectorAll(".box"); // All boxes in the row
  

  // Toggle menu button content
  menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("tg")) {
        btn.innerHTML = "&#10006;"; // X symbol
        btn.classList.remove("tg");
      } else {
        btn.innerHTML = "&#9776;"; // Hamburger symbol
        btn.classList.add("tg");
      }
    });
  });
  
  

  // Dragging functionality
  let dragState = false,
      prevpagex,
      scrollleft;

  const dragstop = () => {
    dragState = false;
  };

  const dragcheck = e => {
    dragState = true;
    prevpagex = e.pageX;
    scrollleft = row.scrollLeft;
  };

  const dragging = e => {
    if (!dragState) return;
    e.preventDefault();
    let posdiff = e.pageX - prevpagex;
    row.scrollLeft = scrollleft - posdiff;
  };

  row.addEventListener("mousedown", dragcheck);
  row.addEventListener("mousemove", dragging);
  row.addEventListener("mouseleave", dragstop);
  row.addEventListener("mouseup", dragstop);

  // Calculate box width
  let boxwidth = boxes[0].clientWidth + 18; // Adjust according to your layout (padding, margin)

  // Scroll buttons
  scrlbtn.forEach(e => {
    e.addEventListener("click", () => {
      row.scrollLeft += e.id === "scrlbtnL" ? -boxwidth : boxwidth;
    });
  });
});
