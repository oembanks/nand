var Append = function (id) {
  if (
    document
      .body
        .contains(
          _center
            .querySelector(
              `#bottom`
            )
        )
  )
    _center
      .querySelector(
        `#bottom`
      )
        .remove();
  const has =
    exclude.map((a) => a.toLowerCase());
    for (i = 0; i < pub.length - 1; i++) {
      if (
        has.filter(function (obj) {
          return pub[i].title.toLowerCase().match(obj);
        }).length > 0
      )
        continue;
    if (
      omitGuide &&
      i != local
    ) {
        _channel.append(pub[i].post)
        images.push(
          {
            element: pub[i].element,
            src: pub[i].src
          }
        );
    } else if (
      !omitGuide
    ) {
        _channel.append(pub[i].post)
        images.push(
          {
            element: pub[i].element,
            src: pub[i].src
          }
        );
    }
  }
    for (
      let i = 0;
      i <= images.length - 1;
      i++
    ) {
      Attributes(
        false,
        id,
        images[i].element,
        images[i].src
      );
    }
    if (
      !Reader &&
      !first &&
      document.body.contains(
        _channel.querySelector(`.item`)
      )
    ) {
      setTimeout(
        function () {
          touchmove = true
          scrollToElm(
            touchmove,
            _main,
            _channel.querySelector(`[aria-object='${id}']`),
            250
          );
        }, 250
      )
    } else if (
      !Reader &&
      first
    ) {
      _channel.scrollTop = 0;
      _center.scrollTop = 0;
      _main.scrollTop = 0;
    }
  if (pub.length > 1) {
    if (pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (pub[pub.length - 1]) var posts = pub.length - 1;
    if (pub[0]) var recent = pub[0].dst;
  }
  if (
    !Reader
  )
    _channel.append(
      footerBuild(id)
    );

  if (
    display == `flexBox`
  )
    Flex();

  else if (
    display == `legacy`
  )
    Legacy();
  if (
    showSplash
  )
    _check.style.display = `none`;
  Status(id, recent, oldest, posts);
  Sidebar(guideOnScreen);
  Topbar(topBar);
  Suggest();
  local = null;
  stop = false;
  images = [];
  post = null;
  unloading();
  first = false;
}
