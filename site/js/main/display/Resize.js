window
  .addEventListener(
    'resize', (evt) =>
    {
      if (
        document
          .body
            .contains(
              _xml.querySelector(
                `.item`
              )
            )
      ) {

        if (
          window.innerWidth <= 1024
          ) {
          _display.style.display = `none`;
          display = `legacy`;
          Legacy();
        }

        else if (
          window.innerWidth >= 769
        ) {
          display = `flexBox`;
          Flex()

        }

        else if (
          window.innerWidth >= 1280

        ) {
          _center.style.cssText = `display:inline-flex;width:0px;right:115px;`;
          _display.style.cssText = `display:inline-block;`;

        }

        else if (
          viewport[cycleViewport] == `legacy` &&
          window.innerWidth < 860
        )
          _display.style.display = `none`;

      }
    },
  {
    passive:
    true
  }
);