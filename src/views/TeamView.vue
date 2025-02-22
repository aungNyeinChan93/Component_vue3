<script setup>
import Header from '@/components/team/Header.vue';
import Table from '@/components/team/Table.vue';
import Footer from '@/components/team/Footer.vue';
import CreateMember from '@/components/team/CreateMember.vue';
import { useTeamStore } from '@/stores/team';
import { ref } from 'vue';

const { teams: members, form, teamName, changeTeamName } = useTeamStore();

const createMemberStatus = ref(false);

const handleAddMember = () => {
    createMemberStatus.value = !createMemberStatus.value;
}

setTimeout(() => {
    changeTeamName('the change !')
}, 4000);

</script>

<template>
    <section class="mt-4 w-full min-h-screen ">
        <div class="createMember" v-show="createMemberStatus">
            <CreateMember v-model="form" />
        </div>
        <header>
            <div class="my-2 px-10">
                <Header @add-member="handleAddMember" :status="createMemberStatus" :teamName="teamName" />
            </div>
        </header>
        <main>
            <div class="my-4 px-10" v-show="Object.keys(members).length">
                <Table :members="members" />
            </div>
        </main>
        <footer class="">
            <div class="px-10 mt-2">
                <Footer :totalMember="members.length" />
            </div>
        </footer>
    </section>
</template>
