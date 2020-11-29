document.getElementById('bookcancel').addEventListener('submit', submitForm);
    // Submit form
    function submitForm(e){
      e.preventDefault();
      // Show alert
      document.querySelector('.alert').style.display = 'block';
      // Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
      // Clear form
      document.getElementById('bookcancel').reset();
    }


        // navbar
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
    // end

    // for signout 
    function signOut() {
        firebase.auth().signOut().then(function () {
          console.log("you logged off");    
      window.location.href = '../index.html';
        }).catch(function (error) {
          alert(error);
        });
      }
    // end

    var preload=document.getElementById('loading');
      mainpage.style.display='none';
      setTimeout(function(){
        loading.style.display ='none';
        mainpage.style.display='block';
      },2000);