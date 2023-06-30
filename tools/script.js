window.addEventListener('load', function() {
  var cards = document.querySelectorAll('.card');
  
  cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseout', function() {
    card.style.transform = 'none';
  });
  });
  
  
  //phần how to use//

  var howToUseBtns = document.querySelectorAll('.how-to-use-btn');
  var closeBtns = document.querySelectorAll('.close-btn');
  var popup1 = document.getElementById('popup1');
  var popup2 = document.getElementById('popup2');

  howToUseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var popupId = btn.getAttribute('data-popup');
      if (popupId === 'popup1') {
        openPopup(popup1);
      } else if (popupId === 'popup2') {
        openPopup(popup2);
      }
    });
  });

  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var popup = btn.parentNode.parentNode;
      closePopup(popup);
    });
  });

  function openPopup(popup) {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  }

  function closePopup(popup) {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
  }
});

/**/
