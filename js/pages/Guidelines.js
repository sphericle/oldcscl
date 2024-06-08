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
                <p class="type-label-md" style="color: #aaa">
                    If you have any questions, please join the <a href="https://discord.gg/87QtEZv5kp" target="_blank">Discord Server</a>.
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
