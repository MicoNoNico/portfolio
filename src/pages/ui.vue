<script>
export default {
  data() {
    return {
      images: [
        '/shot-all.jpg',
        '/shot-bossfight.jpg',
        '/shot-buttons.jpg',
        '/shot-icons.jpg',
        '/shot-mobile.jpg',
        '/shot-pixel.jpg',
      ],
    }
  },
}
</script>

<template>
  <main class="wrap">
    <div class="mt-10">
      <div class="mx-10 text-left text-xl text-light-900">
        <span class="subtitle is-3 text-violet-400">My User Interface Experience</span>
        <br>
        <br>
        This is a page dedicated to showcasing my recent experiences working with UI designing and development.
        <br>
      </div>
    </div>

    <!-- Section 1 -->
    <div class="mt-10 mb-30">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-violet-400">
          Project Materia
        </h2>
        <b>
          Engine: Unity
        </b>
        <br>
        <br>
        <!-- Youtube Link -->
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/zjwjtEVqBQc" title="YouTube video player" allowfullscreen />
        </figure>

        <br>
        <!-- Text Block -->
        Project Materia is a personal project I have been working on in my free time.
        <br>
        The game aims to become a rogue-lite bullet hell experience with customization/progression elements in the form of cards and deck building.
        <br>

        <br>
        The video above showcases the user interface of the menu and basic hud of the game.
        <br>
        All of the art and code that went into the development of the interface was created by me, with the exception of sound effects, made by Sidearm Studios and implemented by me.
        <br>
        <br>
        <!-- Figma Link -->
        <button class="button is-primary bg-teal-400">
          <a href="https://www.figma.com/proto/X341Fo4fQlTsAHlhIVkeUO/Materia-UI?type=design&node-id=4-7&t=KiEurVew7dq4DeLg-1&scaling=contain&page-id=0%3A1&starting-point-node-id=4%3A7&mode=design" class="button-text-link text-dark-500 font-bold" target="_blank">View Wireframe on Figma</a>
        </button>
        <br>
        <br>
        The wireframe of the menu aims to be as simple and convenient to use as possible for the user.
        <br>
        The objective is to display all relevant information about items and cards in the codex, and have said information to be quick to access and easy to understand.
        <br>
        <br>
        <!-- Code Snippet -->
        The following code snippet shows some of the methods used multiple times to animate and transition between menu sections.
        <br>
        These methods are called multiple times during navigation to avoid redundance in the code for buttons.
        <br>
        <br>
        To ease the process of creating animations, I created the "Animico" library with various methods to programmatically create simple sequences. I have made the library public and can be viewed <a href="https://github.com/MicoNoNico/Animico/blob/main/README.md" class="text-teal-400 text-link" target="_blank">here</a> and in the snippets that follow.
        <br>
        <br>
        <details>
          <summary style="cursor: pointer;">
            <a class="text-teal-400 text-link">Code Snippet (C#) - Menu Navigation Methods</a>
          </summary>
          <pre><code>
      <b>// This code utilizes the C# library Animico for tweening animations.</b>
      <span style="color:green;">/// &lt;summary&gt;
      /// Transitions the camera position and orthographic size.
      /// &lt;/summary&gt;
      /// &lt;param name="xPos"&gt;The desired X position.&lt;/param&gt;
      /// &lt;param name="orthoSize"&gt;The desired orthographic size.&lt;/param&gt;
      /// &lt;param name="onComplete"&gt;The action to perform once the transition is complete.&lt;/param&gt;</span>
      private void TransitionCamera(float xPos, float orthoSize, Action onComplete = null)
      {
          Animico.AniX(mainCamera.transform, xPos, cameraTransitionDuration, Animico.Linear);
          Animico.AniOrthoSize(mainCamera, orthoSize, cameraTransitionDuration, Animico.Linear, () =&gt; onComplete?.Invoke());
      }

      <span style="color:green;">/// &lt;summary&gt;
      /// Transitions the menu buttons to a specific position.
      /// &lt;/summary&gt;
      /// &lt;param name="xPos"&gt;The desired X position.&lt;/param&gt;
      /// &lt;param name="onComplete"&gt;The action to perform once the transition is complete.&lt;/param&gt;
      /// &lt;param name="panel"&gt;The panel to enable after the transition.&lt;/param&gt;</span>
      private void TransitionMenuButtons(float xPos, Action&lt;GameObject&gt; onComplete, GameObject panel)
      {
          Animico.AniX(menuButtons.transform, xPos, menuButtonTransitionDuration, null, () =&gt; onComplete.Invoke(panel));
      }

      <span style="color:green;">/// &lt;summary&gt;
      /// Enables a panel and scales it.
      /// &lt;/summary&gt;
      /// &lt;param name="panel"&gt;The panel to enable.&lt;/param&gt;</span>
      private void EnablePanel(GameObject panel)
      {
          menuButtons.SetActive(false);
          panel.SetActive(true);
          Animico.AniScale(panel, downScalePanel, panelTransitionDuration, Animico.EaseInOut);
      }

      <span style="color:green;">/// &lt;summary&gt;
      /// Disables a panel and resets it to its original scale before transitioning back to the main menu.
      /// &lt;/summary&gt;
      /// &lt;param name="panel"&gt;The panel to disable.&lt;/param&gt;</span>
      private void BackToMenu(GameObject panel)
      {
          panel.SetActive(false);
          panel.transform.localScale = downScalePanel;

          //menu transition
          menuButtons.SetActive(true);
          Animico.AniX(menuButtons.transform, 0f, menuButtonTransitionDuration);
      }

      </code></pre>
        </details>
        <br>
        <details>
          <summary style="cursor: pointer;">
            <a class="text-teal-400 text-link">Code Snippet (C#) - Animico method to move an object on an axis</a>
          </summary>
          <pre><code>
      <span style="color:green;">/// &lt;summary&gt;
      /// Animates an object along the X axis.
      /// &lt;/summary&gt;
      /// &lt;param name="target"&gt;The target object to animate (Transform (3D) or RectTransform (2D/UI).&lt;/param&gt;
      /// &lt;param name="end"&gt;The target position on the X axis.&lt;/param&gt;
      /// &lt;param name="duration"&gt;The duration of the animation in seconds.&lt;/param&gt;
      /// &lt;param name="easingFunction"&gt;An optional easing function for the animation. Defaults to null (linear interpolation).&lt;/param&gt;
      /// &lt;param name="onComplete"&gt;An optional on completion callback.&lt;/param&gt;</span>
      public static void AniX(Component target, float end, float duration, System.Func&lt;float, float&gt; easingFunction = null, Action onComplete = null)
      {
          AnimicoHelper.Instance.StartCoroutine(AniXCoroutine(target, end, duration, easingFunction, onComplete));
      }

      private static IEnumerator AniXCoroutine(Component target, float end, float duration, System.Func&lt;float, float&gt; easingFunction = null, Action onComplete = null)
      {
          if (!(target is Transform) &amp;&amp; !(target is RectTransform))
          {
              throw new ArgumentException("Target must be of type Transform or RectTransform");
          }

          float start;
          float time = 0;

          if (target is RectTransform)
          {
              RectTransform rectTransform = target as RectTransform;
              start = rectTransform.anchoredPosition.x;

              while (time &lt; duration)
              {
                  time += Time.deltaTime;
                  float t = time / duration;

                  if (easingFunction != null)
                      t = easingFunction(t);

                  float value = Mathf.Lerp(start, end, t);
                  rectTransform.anchoredPosition = new Vector2(value, rectTransform.anchoredPosition.y);

                  yield return null;
              }

              rectTransform.anchoredPosition = new Vector2(end, rectTransform.anchoredPosition.y);
          }
          else
          {
              Transform transform = target as Transform;
              start = transform.position.x;

              while (time &lt; duration)
              {
                  time += Time.deltaTime;
                  float t = time / duration;

                  if (easingFunction != null)
                      t = easingFunction(t);

                  float value = Mathf.Lerp(start, end, t);
                  transform.position = new Vector3(value, transform.position.y, transform.position.z);

                  yield return null;
              }

              transform.position = new Vector3(end, transform.position.y, transform.position.z);
          }

          // Call the completion callback, if one was provided
          onComplete?.Invoke();
      }
            </code></pre>
        </details>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="mt-10 mb-30">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-violet-400">
          VR Forge
        </h2>
        <b>
          Engine: Unity
        </b>
        <br>
        <br>
        <!-- Youtube Link -->
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/pNhJF2vmFPA" title="YouTube video player" allowfullscreen />
        </figure>

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
            VR Forge interface
          </p>
        </div>
        <br>
        Regarding the <b>user interface</b>, the design takes inspiration from management games such as Planet Zoo or Cities Skylines, in which the user can pick from a scroll list of items displayed at the bottom of the hud.
        <br>
        <br>
        The project's features are quite complex for a first time user, which is why tooltips were implemented besides the guide to aid the general experience.
        <br>
        <br>

        <!-- Code Snippet -->
        The following is a snippet from the tooltip display script.
        <br>
        <br>
        <details>
          <summary style="cursor: pointer;">
            <a class="text-teal-400 text-link">Code Snippet (C#) - Tooltip Display Logic</a>
          </summary>
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
      </div>
    </div>

    <!-- Section 3 -->
    <div class="mt-10 mb-30">
      <div class="mx-10 text-left text-xl text-light-900">
        <h2 class="subtitle is-3 text-violet-400">
          Various Assets
        </h2>
        <!-- Description -->
        <p class="text-xl mt-4">
          In this section I showcase some assets that I made available through the Unity Asset Store.
          <br>
          <br>
          <button class="button is-primary bg-teal-400">
            <a href="https://assetstore.unity.com/packages/2d/gui/roundify-gui-pack-248690" class="button-text-link text-dark-500 font-bold" target="_blank">GUI Asset Anthology</a>
          </button>
          <br>
          <br>
          The following assets were created mainly using Adobe Illustrator and occasionally with Photoshop.
          <br>
          The pixel art assets were created using Aseprite.
          <br>
          <br>
          <br>
        </p>
        <br>

        <!-- Image Carousel -->
        <div>
          <Carousel :images="images" />
        </div>
      </div>
    </div>
  </main>
</template>

    <route lang="yaml">
meta:
  layout: home
</route>

