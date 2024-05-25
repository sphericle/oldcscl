export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            required: true,
        },
        verifier: {
            type: String,
            required: true,
        },
    },
    template: `
        <div class="level-authors">
            <template v-if="selfVerified">
                <div class="type-title-sm">Creator & Verifier</div>
                <p class="type-body">
                        <span> {{ verifier }}</span>
                </p>
            </template>
            <template v-else-if="creators.length === 1"> <!-- Check if there is only one creator -->
                <div class="type-title-sm">Creator</div>
                <p class="type-body">
                        <span> {{ creator }}</span>
                </p>
                <div class="type-title-sm" v-if="verifier !== creators[0]">Verifier</div> <!-- Only display verifier title if verifier is different -->
                <p class="type-body" v-if="verifier !== creators[0]">
                    <span>{{ verifier }}</span>
                </p>
            </template>
            <template v-else> <!-- If there are multiple creators or no creators -->
                <div class="type-title-sm">Creators</div>
                <div class="type-body">
                    <template v-for="(creator, index) in creators" :key="\`creator-\$\{creator\}\`">
                        <span> {{ creator }}</span>
                        <span v-if="index < creators.length - 1">, </span>
                    </template>
                </p>
                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>
            <div class="type-title-sm" v-if="creators.length < 2 && author != creators">Publisher</div>
            <p class="type-body" v-if="creators.length < 2 && author != creators">
                <span>{{ author }}</span>
            </p>
        </div>
    `,

    computed: {
        selfVerified() {
            return (this.creators.length === 0 && this.verifier !== '') || 
                   (this.creators.length === 1 && this.creators[0] === this.verifier);
        },
    },
};