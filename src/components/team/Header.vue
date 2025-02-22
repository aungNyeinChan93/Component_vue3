<script setup>

const props = defineProps({
    status: Boolean,
    teamName: String,
});

const emit = defineEmits(['addMember']);

const addMember = () => {
    emit('addMember');
}
</script>
<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <img src="@/assets//images/coffees//logo/logo2.jpg" alt="logo" class="w-[50px] h-[50px] rounded-full" />
            <p class="text-pink-400 text-lg font-bold font-mono">
                {{ teamName }}
            </p>
        </div>
        <div>
            <button type="button" class="btn" @click="addMember">
                <span v-if="!status">Create Team Member</span>
                <span v-else>Hide Create Form</span>
            </button>
        </div>
    </div>
</template>