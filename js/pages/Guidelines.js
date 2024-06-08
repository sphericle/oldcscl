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
                <p><u><a href="#submission">Submission Requirements</a></u></p>
                <p><u><a href="#standards">Challenge Standards</a></u></p>
            </div>
            <section class="levels-container">
                <div class="levels" id="submissionReqs">
                    <h2 id="submission">Submission Requirements</h2>
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
            </section>
        </main>
    `,
    data: () => ({
        loading: false,
    }),
    
};
