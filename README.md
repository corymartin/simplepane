simplepane
==========

Pane view plugin for jQuery/Zepto. Kept really simple.



HTML Setup
----------
The buttons and panes can be placed anywhere within the containing element,
however their order within the HTML is significant. The first button will
activate the first pane, the second button the second pane, etc.

Buttons must have `class="simple-pane-button"`
Panes   must have `class="simple-pane"`

See example.html


Config Options
--------------

- __*buttonHighlightClass*__ `String` CSS class added to the currently active button.
  Default is "simple-pane-button-highlight"
- __*activationEvent*__ `String` Event(s) that triggers the buttons.
  Default is "click"

