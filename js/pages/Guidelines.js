import Spinner from '../components/Spinner.js';
import Btn from '../components/Btn.js';

export default {
    components: { Spinner, Btn },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-roulette">
            <div class="sidebar" style="margin: 15px;">
                <div id="discord">
                    <p class="type-label-md" style="color: #aaa">
                        If you have any questions, please join the <a href="https://discord.gg/87QtEZv5kp" target="_blank">Discord Server</a>.
                    </p>
                </div>
                <a @click.native.prevent="(submissionReqs) => onLinkClick"><u>Submission Requirements</u></a>
                <p @click="onLinkClick"><u>Challenge Standards</u></p>
            </div>
            <section class="levels-container">
                <div class="levels" id="submissionReqs">
                    <h2 >Submission Requirements</h2>
                    <p>
                        Achieved the record without using hacks (however, Click Between Frames is allowed.) A list of allowed hacks in Mega Hack can be found <a href="https://docs.google.com/spreadsheets/d/1evE4nXATxRAQWu2Ajs54E6cVUqHBoSid8I7JauJnOzg/edit#gid=0"><u>here.</u></a>
                    </p>
                    <p>
                        FPS Bypass is allowed, but Physics Bypass is banned.
                    </p>
                    <p>
                        You must have Cheat Indicator enabled in your completion, including the Show on Endscreen setting. Unmodded versions of GD are exempt from this.
                    </p>
                    <p>
                        If you do not have any mods installed (including MegaHack, Geode), please enable the Show Info Label setting.
                    </p>
                    <p>
                        Achieved the record on the level that is listed on the site - please check the level ID before you submit a record
                    </p>
                    <p>
                        Achieved the record on the main GD servers, not a private server.
                    </p>
                    <p>
                        Have audible, unedited clicks or taps in the video.
                    </p>
                    <p>
                        The recording must have a previous attempt and entire death animation shown before the completion, unless the completion is on the first attempt.
                    </p>
                    <p>
                        Do not use secret routes or bug routes
                    </p>
                    <p>
                        You cannot have another person help you with 2 player levels. You also must show a handcam in your completion if the level is 2p.
                    </p>
                    <p>
                        Recording must capture entire game window.
                    </p>
                </div>
                <div class="levels" id="challengeReqs">
                    <h2 id="standards">Challenge Standards</h2>
                    <p>
                        <b>Most clicks in the level should be well-synced to the level’s song or a part of the song, however there can be a small amount of clicks that do not sync.</b>
                    </p>
                    <p>
                        Levels must be 30 seconds or less.
                    </p>
                    <p>
                        Levels must have decent gameplay and decoration/structuring. Basic or lazy structuring can be okay if the overall decoration is good.
                    </p>
                    <p>
                        Level must not include stolen gameplay.
                    </p>
                    <p>
                        Level must not have crash triggers.
                    </p>
                    <p>
                        Level must not break in Practice Mode/StartPos.
                    </p>
                    <p>
                        No Spam Based or Straight-Fly challenges. (Ex. Final Flight, Garbanzo, etc.)
                    </p>
                    <p>
                        Levels cannot be found from other lists and added here.
                    </p>
                    <p>
                        Levels cannot start with the word "Walmart".
                    </p>
                    <p style="margin-top: 20px;">
                        More things will be added here in the future, so stay tuned!
                    </p>
                </div>
                <div class="levels">
                    <h2 id="tidalwave">title wave</h2>
                        <p>The level starts with a fast-paced cube section, switching between various game-modes. At 9%, the level decelerates into a cube segment, then a brief straight-fly before returning to another fast-paced cube section with tricky timings. A difficult ship section with fake orbs follows at 18%, transitioning to a brief UFO segment. Just before the drop, simple cube clicks appear, followed by the level's title. The first drop features a tough big-wave section with tight gaps and anti-gravity portals. At 30%, the player starts alternating sizes, increasing difficulty with periodic darkening and brightening effects. At 39%, a half-speed break offers simpler cube, wave, and robot sequences in the midst of darker visuals. At 42%, the level brightens with a beach cutscene, leading to a challenging cube-UFO-spider segment and a quadruple-speed dual. Before the second drop, there is a double-speed wave segment followed by a slower cube part with occasional mini-wave clicks intertwined. The second drop is at quadruple-speed, beginning with a wave section that goes on until 62%, where game modes start rapidly alternating. Subsequently, at 72%, another wave segment appears, arguably the hardest of the level. The following finale, with an orange sunset palette, includes fast cube clicks, a challenging ship section, and a final wave segment with tight spaces. The level ends at 95%, displaying "THANKS FOR PLAYING" alternating with "WATCHING", followed by verification info and credits.</p>
                        </div>
            </section>
        </main>
    `,
    data: () => ({
        loading: false,
    }),

    methods: {
        onLinkClick(element) {
            document.getElementById(element)[3].scrollIntoView();
          }
        
        
    },
    
};
