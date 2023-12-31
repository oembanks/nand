let Progress = function (done) {
  let width;
  let length;
  let complete;
  if (
    !done &&
    loading == `percent`
  ) {
    complete =
      setInterval(
        function () {
          if (
            !width ||
            width == `Infinity` &&
            count.length <= 0
          )
            width = _container.clientWidth / 12;
          if (
            _progress.clientWidth >= _container.clientWidth
          ) {
            _progress.style.transition = `0`;
            _progress.style.width = `100%`;
            setTimeout(
              function() {
                _progress.style.transition = `all 1600ms ease-in-out`;
                _progress.style.opacity = `0`;
              },
            350)
            setTimeout(
              function () {
                _progress.style.transition = `none`;
                _progress.style.width = `0%`;
              },
            1600);
            clearInterval(complete);
          } else {
            _progress.style.width = _progress.clientWidth + width;
            _progress.style.transition = `all 750ms ease-in-out`;
            _progress.style.opacity = `1`;
          }
        },
    500);
  }
  if (
    document.body.contains(
      _channel.querySelector(
        `.item`
      )
    )
  ) {
    if (
      first &&
      scrollIntoView
    ) {
      _channel.classList.add(`scroll-into-view`)
      setTimeout(
        function () {
          _channel.classList.remove(`scroll-into-view`);
        }, 1750
      )
    }

    if (
      showSplash
    )
      _check.style.display = `none`;

    if (
      fadeIntoView
    ) {
      (function () {
        function checkPosition() {
          let elements = _channel.querySelectorAll(`.image`);
          for (
            let i = 0;
            i < elements.length;
            i++) {
            if (
              display !== `sideScroll` &&
              elements[i].querySelector(`.img`) &&
              !elements[i].querySelector(`.img`).classList.contains(`guide`) &&
              elements[i].getBoundingClientRect().top -
              _main.clientHeight <=
              0
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            } else if (
              display == `sideScroll` &&
              elements[i].querySelector(`.img`) &&
              elements[i].getBoundingClientRect().left -
              _channel.clientWidth
              <= _channel.clientWidth
            ) {
              elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
              elements[i].querySelector(`.img`).classList.remove(`hidden`);
            }
          }
        }
        if (
          scrollIntoView
        )
          setTimeout(
            function() {
              checkPosition();
            },
          1000)
        else checkPosition();
      })();
    }
  }
  else if (
    document
      .body
        .contains(
          _group
            .querySelector(
              `.populate`
            )
        )
  ) {
    if (
      scrollIntoView
    ) {
      _group.classList.add(`scroll-into-view`)
      if (
        !onlyImages
      )
        setTimeout(
          function() {
            _main.scrollTop = _air.clientHeight;
          }, 75
        )
    }
  }
  if (
    showSplash
  )
    _check.style.display = `none`;
};
