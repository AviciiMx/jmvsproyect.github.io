AFRAME.registerComponent('change-site', {
    schema: {
      img: {type: 'string'},
      zone: {type: 'string'},
      sound: {type: 'string'}
    },
  
    init: function () {
      var data = this.data;
      var el = this.el;
      el.addEventListener("mouseenter", () => {
         var ParentEntity = el.parentNode;
         var grandParentEntity = ParentEntity.parentNode;

         var thisAPlane= ParentEntity.querySelector("a-plane");
         thisAPlane.classList.remove("clickable");
         
         var allAPlane = grandParentEntity.querySelectorAll("a-plane");
         Object.keys(allAPlane).forEach(function(key) {
          if(allAPlane[key] != thisAPlane){
            allAPlane[key].classList.add("clickable");
          }
        });


      var allACircle = grandParentEntity.querySelectorAll("a-circle");
      Object.keys(allACircle).forEach(function(key){
        allACircle[key].setAttribute("visible", "false");
        allACircle[key].classList.remove("clickable");

      });
      var allACircleInThisZone = ParentEntity.querySelectorAll(data.zone);
      Object.keys(allACircleInThisZone ).forEach(function(key){
        allACircleInThisZone [key].setAttribute("visible", "true");
        allACircleInThisZone [key].classList.add("clickable");

      });
    }
)}
    });
  