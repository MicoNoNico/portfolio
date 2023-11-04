<template>
  <main class="wrap mt-30">
    <div class="mt-10 mb-30">
      <div class="text-xl text-light-900">
        <h2 class="title is-1 text-violet-400 text-center">
          Project Materia
        </h2>
        <br>
        <br>
        Project Materia is a personal project I have been working on in my free time.
        <br>
        The game aims to become a rogue-lite bullet hell experience with customization/progression elements in the form of cards and deck building.
        <br>

        <br>
        The video showcases the user interface of the menu and basic hud of the game.
        <br>
        <br>
        <br>
        All of the art and code that went into the development of the interface was created by me, with the exception of sound effects, made by Sidearm Studios and implemented by me.
        <br>
        <br>
        <br>
        <!-- Youtube Link -->
        <figure class="image is-16by9 mb-10">
          <iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/zjwjtEVqBQc" title="YouTube video player" allowfullscreen />
        </figure>
        <br>
        <br>
        The wireframe of the menu aims to be as simple and convenient to use as possible for the user.
        <br>
        The objective is to display all relevant information about items and cards in the codex, and have said information to be quick to access and easy to understand.
        <br>
        <br>
        <button class="button is-primary bg-teal-400">
          <a href="https://www.figma.com/proto/X341Fo4fQlTsAHlhIVkeUO/Materia-UI?type=design&node-id=4-7&t=KiEurVew7dq4DeLg-1&scaling=contain&page-id=0%3A1&starting-point-node-id=4%3A7&mode=design" class="button-text-link text-dark-500 font-bold" target="_blank">View Wireframe on Figma</a>
        </button>
        <br>
        <br>
        <br>
        <!-- Code Snippet -->
        The following code snippet shows some of the methods used multiple times to animate and transition between menu sections.
        <br>
        These methods are called multiple times during navigation to avoid redundance in the code for buttons.
        <br>
        <br>
        To ease the process of creating animations, I created the "Animico" library with various methods to programmatically create simple sequences. I have made the library public and can be viewed <a href="https://github.com/MicoNoNico/Animico/blob/main/README.md" class="text-teal-400 text-link" target="_blank">here</a> and in the snippet that follows.
        <br>
        <br>
        <details>
          <summary style="cursor: pointer;">
            <a class="text-teal-400 text-link">Code Snippet (C#) - Animico method to move an object on an axis</a>
          </summary>
          <pre class="text-left"><code>
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
      <div class="my-10 p-10 bg-gray-300 is-hidden-touch rounded-2xl">
        <h1 class="py-2 title is-2 text-violet-400 centered">
          DETAILS
        </h1>
        <h2 class="subtitle is-6 text-dark-900 font-semibold centered">
          <ul>
            <li>Year: 2023</li>
            <li>Genre: Rogue-lite</li>
            <li>Engine: Unity</li>
          </ul>
        </h2>
      </div>

      <div class="my-10 p-10 bg-gray-300 is-hidden-desktop rounded-2xl">
        <div class="column text-left">
          <h1 class="py-2 title is-3 text-violet-400">
            DETAILS
          </h1>
          <h2 class="subtitle is-6 text-dark-900 font-semibold">
            <ul>
              <li>Genre: Rogue-lite</li>
              <li>Engine: Unity</li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
