import Spinner from '../components/Spinner.js';
import Btn from '../components/Btn.js';

export default {
    components: { Spinner, Btn },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-roulette">
            <div class="sidebar">
                <div id="discord">
                    <p class="type-label-md" style="color: #aaa">
                        If you have any questions, please join the <a href="https://discord.gg/87QtEZv5kp" target="_blank">Discord Server</a>.
                    </p>
                </div>
                
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
            <section class="levels-container">
                <div class="levels">
                    
                </div>
            </section>
        </main>
    `,
    data: () => ({
        loading: false,
    }),
    
};
