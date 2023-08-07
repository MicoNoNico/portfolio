<template>
  <main class="wrap">
    <div class="mt-10">
      <div class="mx-10 text-left text-xl text-light-900">
        <span class="subtitle is-3 text-light-900">My User Interface Experience</span>
        <br>
        <br>
        This is a page dedicated to showcasing my recent experiences working with UI designing and development.
        <br>
      </div>
    </div>

    <!-- Section 1 -->
    <div class="mt-10 mb-40">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-light-900">
          Project Materia
        </h2>
        <!-- Youtube Link -->
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zjwjtEVqBQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <br>
        <!-- Text Block -->
        Project Materia is a personal project I have been working on in my free time.
        <br>
        The game aims to become a rogue-lite bullet hell experience with customization/progression elements in the form of cards and deck building.
        <br>
        <br>
        <b>
          engine: Unity
        </b>
        <br>
        <br>
        The video above showcases the user interface of the menu and basic hud of the game.
        <br>
        All of the art and code that went into the development of the interface was created by me, with the exception of sound effects, made by Sidearm Studios and implemented by me.
        <br>
        <br>
        <br>
        <!-- Figma Link -->
        <a href="https://www.figma.com/proto/X341Fo4fQlTsAHlhIVkeUO/Materia-UI?type=design&node-id=4-7&t=KiEurVew7dq4DeLg-1&scaling=contain&page-id=0%3A1&starting-point-node-id=4%3A7&mode=design" target="_blank">View Wireframe on Figma</a>
        <br>
        <br>
        The wireframe of the menu aims to be as simple and convenient to use as possible for the user.
        <br>
        The objective is to display all relevant information about items and cards in the codex, and have said information to be quick to access and easy to understand.
        <br>
        <br>
        <br>
        <!-- Code Snippet -->
        This code snippet shows some of the methods used multiple times to animate and transition between menu sections.
        <br>
        These methods are called multiple times during navigation to avoid redundance in the code for buttons.
        <details>
          <summary><b>Code Snippet (C#) - Menu Navigation Methods (Click to Expand)</b></summary>
          <pre><code>
        <b>// This code utilizes the C# library DoTween for tweening animations.</b>
        <span style="color:green;">/// &lt;summary&gt;</span>
        <span style="color:green;">/// Transitions the camera position and orthographic size.</span>
        <span style="color:green;">/// &lt;/summary&gt;</span>
        <span style="color:green;">/// &lt;param name="xPos"&gt;The desired X position.&lt;/param&gt;</span>
        <span style="color:green;">/// &lt;param name="orthoSize"&gt;The desired orthographic size.&lt;/param&gt;</span>
        <span style="color:green;">/// &lt;param name="onComplete"&gt;The action to perform once the transition is complete.&lt;/param&gt;</span>
        private void TransitionCamera(float xPos, float orthoSize, Action onComplete = null)
        {
            mainCamera.transform.DOMoveX(xPos, cameraTransitionDuration);
            mainCamera.DOOrthoSize(orthoSize, cameraTransitionDuration).OnComplete(() =&gt; onComplete?.Invoke());
        }
        <span style="color:green;">/// &lt;summary&gt;</span>
        <span style="color:green;">/// Transitions the menu buttons to a specific position.</span>
        <span style="color:green;">/// &lt;/summary&gt;</span>
        <span style="color:green;">/// &lt;param name="xPos"&gt;The desired X position.&lt;/param&gt;</span>
        <span style="color:green;">/// &lt;param name="onComplete"&gt;The action to perform once the transition is complete.&lt;/param&gt;</span>
        <span style="color:green;">/// &lt;param name="panel"&gt;The panel to enable after the transition.&lt;/param&gt;</span>
        private void TransitionMenuButtons(float xPos, Action&lt;GameObject&gt; onComplete, GameObject panel)
        {
            menuButtons.transform.DOMoveX(xPos, menuButtonTransitionDuration).OnComplete(() =&gt; onComplete.Invoke(panel));
        }
        <span style="color:green;">/// &lt;summary&gt;</span>
        <span style="color:green;">/// Enables a panel and scales it.</span>
        <span style="color:green;">/// &lt;/summary&gt;</span>
        <span style="color:green;">/// &lt;param name="panel"&gt;The panel to enable.&lt;/param&gt;</span>
        private void EnablePanel(GameObject panel)
        {
            menuButtons.SetActive(false);
            panel.SetActive(true);
            panel.transform.DOScale(downScalePanel, panelTransitionDuration).SetEase(panelEaseType);
        }
        <span style="color:green;">/// &lt;summary&gt;</span>
        <span style="color:green;">/// Disables a panel and resets it to its original scale before transitioning back to the main menu.</span>
        <span style="color:green;">/// &lt;/summary&gt;</span>
        <span style="color:green;">/// &lt;param name="panel"&gt;The panel to disable.&lt;/param&gt;</span>
        private void BackToMenu(GameObject panel)
        {
            panel.SetActive(false);
            panel.transform.localScale = downScalePanel;

            <span style="color:green;">//menu transition</span>
            menuButtons.SetActive(true);
            menuButtons.transform.DOMoveX(0f, menuButtonTransitionDuration);
        }
          </code></pre>
        </details>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="mt-10 mb-40">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-light-900">
          VR Forge
        </h2>
        <!-- Youtube Link -->
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pNhJF2vmFPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <br>
        <!-- Text Block -->
        VR Forge is a project I worked on during my employment at my university's research group, the Lectoraat Digital Transformation.
        <br>
        <br>
        The project consists of a level designer (video above) and a VR level loader. Its main purpose lies in creating levels with timed events and being able to view them in VR.
        <br>
        <br>
        <div class="mb-5">
          <a href="/vrforge-ui.png" data-title="VR Forge UI"><img src="/vrforge-ui.png" alt="VR Forge UI"></a>
          <p class="text-base mt-2">
            VR Forge interface without map
          </p>
        </div>
        <br>
        Regarding the <b>user interface</b>, the design takes inspiration from management games such as Planet Zoo or Cities Skylines, in which the user can pick from a scroll list of items displayed at the bottom of the hud.
        <br>
        <br>
        The project's features are quite complex for a first time user, which is why tooltips were implemented besides the guide to aid the general experience.
        <br>
        <br>
        <br>

        <!-- Code Snippet -->
        The following are two snippets from the tooltip display script.
        <details>
          <summary><b>Code Snippet (C#) - Tooltip Display Logic (Click to Expand)</b></summary>
          <pre><code>
    private void Update() {
        if (!_isHovering) return; <span style="color:green;">// If mouse is not hovering over trigger, do nothing</span>
        _timer += Time.deltaTime; <span style="color:green;">// Increment timer</span>

        <span style="color:green;">// If mouse has been hovering over trigger for HoverTime, display tooltip</span>
        if (!(_timer &gt;= HoverTime)) return;
            if (displayAtMousePosition)
            {
            var mouseCoords = GetMousePosition();
            DesignerManager.Instance.DesignerUIManager.TooltipManager.DisplayTooltip(textToDisplay, mouseCoords[0], mouseCoords[1]);
            }
            else
            {
            DesignerManager.Instance.DesignerUIManager.TooltipManager.DisplayTooltip(textToDisplay, tooltipPosition);
            }
            _isHovering = false;
            _timer = 0f;
        }
    }
          </code></pre>
        </details>

        <details>
          <summary><b>Code Snippet (C#) - Mouse Interaction Handling (Click to Expand)</b></summary>
          <pre><code>
    <span style="color:green;">// Start timer when mouse enters trigger</span>
    public void OnPointerEnter(PointerEventData eventData)
    {
        _isHovering = true;
    }

    // <span style="color:green;">Reset timer when mouse exits trigger</span>
    public void OnPointerExit(PointerEventData eventData)
    {
        _isHovering = false;
        DesignerManager.Instance.DesignerUIManager.TooltipManager.RemoveTooltip();
    }
          </code></pre>
        </details>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="mt-10 mb-40">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-light-900">
          Various Assets
        </h2>
        <!-- Description -->
        <p class="text-xl mt-4">
          In this section I showcase some assets that I made available through the Unity Asset Store.
          <br>
          <b><a href="https://assetstore.unity.com/packages/2d/gui/roundify-gui-pack-248690" target="_blank">GUI Asset Anthology</a></b>
          <br>
          <br>
          The following assets were created mainly using Adobe Illustrator and occasionally with Photoshop.
          <br>
          The pixel art assets were created using Aseprite.
          <br>
          <br>
          <br>
        </p>
        <p class="text-lg">
          Click on any image to expand it.
        </p>

        <br>

        <!-- Image Block -->
        <div class="grid grid-cols-2 gap-7">
          <div class="mb-5">
            <a href="/shot-all.jpg" data-title="Various UI components"><img src="/shot-all.jpg" alt="All roundify elements"></a>
            <p class="mt-2">
              Various UI components
            </p>
          </div>
          <div class="mb-5">
            <a href="/shot-bossfight.jpg" data-title="An example of the assets for a boss fight scene"><img src="/shot-bossfight.jpg" alt="Boss fight demo scene"></a>
            <p class="mt-2">
              An example of the assets for a boss fight scene
            </p>
          </div>
          <div class="mb-5">
            <a href="/shot-buttons.jpg" data-title="A shot of all the buttons of the pack"><img src="/shot-buttons.jpg" alt="All buttons"></a>
            <p class="mt-2">
              A shot of all the buttons of the pack
            </p>
          </div>
          <div class="mb-5">
            <a href="/shot-mobile.jpg" data-title="An example of the assets for mobile use"><img src="/shot-mobile.jpg" alt="Mobile shots"></a>
            <p class="mt-2">
              An example of the assets for mobile use
            </p>
          </div>
          <div class="mb-5">
            <a href="/shot-icons.jpg" data-title="List of a few of the icons"><img src="/shot-icons.jpg" alt="Icons"></a>
            <p class="mt-2">
              List of a few of the icons
            </p>
          </div>
          <div class="mb-5">
            <a href="/shot-pixel.jpg" data-title="Various Assets used for Project Materia"><img src="/shot-pixel.jpg" alt="Pixel art"></a>
            <p class="mt-2">
              Various pixel assets used for Project Materia
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

  <route lang="yaml">
meta:
  layout: home
    </route>

