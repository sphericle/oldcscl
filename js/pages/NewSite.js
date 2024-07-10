import Spinner from '../components/Spinner.js';

export default {
    components: { Spinner },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-roulette" id="page-guidelines">
            <section id="all-docs" style="margin:13px;" class="levels-container">
                <div style="text-align: center;" class="levels" v-if="selected === 0">
                    <h1>Clicksync Challenge List Guidelines</h1>
                    <h2>
                        We've moved!
                    </h2>
                    <p>
                        <b>This is the old CSCL website.</b> We've moved to a <a href="https://cscl.shuttleapp.rs/list/"><u>new, much cleaner</u></a> one as of July 10th, 2024. Check it out!  
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
