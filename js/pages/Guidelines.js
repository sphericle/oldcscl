import Spinner from '../components/Spinner.js';

export default {
    components: { Spinner },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-roulette">
            <div class="sidebar" style="margin: 15px;">
                <div id="discord" style="text-align: left;">
                    <p class="type-label-md" style="color: #aaa">
                        If you have any questions, please join the <a href="https://discord.gg/87QtEZv5kp" target="_blank">Discord Server</a>.
                    </p>
                </div>
              <div style="font-size:33px">
                <p style="cursor:pointer"><a @click="selected = 0"><b>Home</b></a></p>
                <p style="cursor:pointer"><a @click="selected = 1"><b>Record Guidelines</b></a></p>
                <p style="cursor:pointer"><a @click="selected = 2"><b>Challenge Standards</b></a></p>
                <p style="cursor:pointer"><a @click="selected = 4"><b>Reliable System</b></a></p>
                </div>
            <section style="margin:13px;" class="levels-container">
                <div style="text-align: center;" class="levels" v-if="selected === 0">
                    <h1>Clicksync Challenge List Guidelines</h1>
                    <h2>
                        Hi!
                    </h2>
                    <p>
                        This page details everything you need to know about the list, from <a style="cursor:pointer;" @click="selected = 2"><u>submitting your own challenges</u></a> to <a style="cursor:pointer;" @click="selected = 1"><u>recording and submitting records.</u></a> Please read through these before trying to submit a challenge or record because, chances are, it will get denied due to some easily avoidable reason detailed here. 
                    </p>
                </div>
                <div class="levels" v-if="selected === 1">
                    <h2>Record Guidelines</h2>
                    <p>
                        Achieved the record without using hacks (however, Click Between Frames is allowed.) A list of allowed hacks in Mega Hack can be found <a href="https://docs.google.com/spreadsheets/d/1cDye-bCkyKu9TH4g4pxKSYr1bk8BFJzzWW1YcfB5uvE/view" target="_blank"><u>here.</u></a>
                    </p>
                    <p>
                        FPS Bypass is allowed, but Physics Bypass is banned.
                    </p>
                    <p>
                        You must have Cheat Indicator enabled in your completion, including the <a href="./assets/example screenshots/cheat indi.png" target="_blank"><u>Show on Endscreen setting.</u></a> Unmodded versions of GD are exempt from this.
                    </p>
                    <p>
                        If you do not have any mods installed (including MegaHack, Geode), please enable the <a href="./assets/example screenshots/info label.png" target="_blank"><u>Show Info Label setting.</u></a>
                    </p>
                    <p>
                        Achieved the record on the level that is listed on the site - please check the level ID before you submit a record
                    </p>
                    <p>
                        Achieved the record on the main GD servers, not a private server.
                    </p>
                    <p>
                        Have audible, unedited clicks or taps in the video. If your clicks are obviously too quiet, your record will be rejected.
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
                        Recording must capture your entire game window.
                    </p>
                </div>
                <div class="levels" v-else-if="selected === 2">
                    <h2>Challenge Standards</h2>
                  <p style="color: #aaa;margin-top: -20px;font-size:15px;">More things will be added here in the future, so stay tuned!</p>
                    <p>
                        <b>Most clicks in the level should be obviously well-synced to the level’s song or a part of the song, however there can be a small amount of clicks that do not sync.</b>
                    </p>
                    <p><b>
                        Levels must have decent gameplay and decoration/structuring. Basic or lazy structuring can be okay if the overall decoration is good, and vice versa. Read the <a style="cursor:pointer;" @click="selected = 4"><u>Reliable System</u></a> docs for more info on how we decide if a level is list worthy.
                    </b></p>
                    <p>
                        Levels must be 30 seconds or less.
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
                        No Spam Based or Straight-Fly challenges. (Ex. <a href="https://youtu.be/Nwy9t3gMYQ4" target="_blank"><u>Final Flight</u></a>, <a href="https://www.youtube.com/watch?v=U5OOany-jCs" target="_blank"><u>Garbanzo,</u></a> etc.)
                    </p>
                    <p>
                        Levels cannot be found from other lists and added here. This does not mean that if a level is already on one list, it can't be added here, but you can't just go to the challenge list, for example, and submit every level that has clicksync.
                    </p>
                    <p>
                        Levels cannot start with the word "Walmart" (long story).
                    </p>
                    
                </div>
                <div class="levels" v-else-if="selected === 3">
                    <h2>auto submission syntax placeholder</h2>
                    <p>auto submission syntax placeholder</p>
                         </div>
                <div class="levels" v-else-if="selected === 4">
                    <h2>Reliable System</h2>
                    <p>
                        The Reliable system (almost entirely copied from <a href="https://laylist.pages.dev" target="_blank"><u>The Layout List</u></a>) is how we decide whether a challenge meets all <a style="cursor:pointer;" @click="selected = 2"><u>standards</u></a> for the list. When levels are submitted, they are given to "Reliable" members to play and vote on whether the level is list worthy in its decoration, gameplay, and sync. A member is given reliable by being active and showing that they are trustworthy. Every month or so, the list team promotes and demotes people from the reliable system. Reliables also vote on the difficulty of a level, and give their opinion as to where on the list it should go. This entire process happens through our <a href="https://discord.gg/87QtEZv5kp" target="_blank">Discord Server</a>.
                    </p>
                    <h3 style="margin-top:1em;">Rules reliables must follow:</h3>
                    <p>
                        They can only vote on levels after playing them, unless it obviously does not meet <a style="cursor: pointer;" @click="selected = 2"><u>decoration standards.</u></a>
                    </p>
                    <p>
                        They are not allowed to vote on a level's list worthiness if they are a creator or verifier of (or otherwise would have a bias towards) the level.
                    </p>
                    <p>
                        Levels are accepted when there are 4 yeses than nos, and vice versa. For example, a level with 5 yeses and 1 no would be accepted and ready to place, while one with 4 yeses and 2 nos would still need to be voted on.
                    </p>
                </div>
            </section>
        </main>
    `,
    data: () => ({
        loading: false,
        selected: 0,

    }),
    
};
