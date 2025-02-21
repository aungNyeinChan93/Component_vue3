<script setup>
import { anc } from '@/stores/anc';
import { book } from '@/stores/book';

const { name, email, skill, position, avatar, getName, filterSkillByLevel } = anc;
const [firstSkill, secondSkill, thirdSkill, ...otherSkills] = skill;

const overfifty = filterSkillByLevel('50%', '<');
// console.log(overfifty);

// book
// const { bookName, bestSeller } = book;

// const { name: bestSellerName, cover } = bestSeller;

</script>

<template>
    <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ getName() }}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">{{ email }}</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <img alt="" :src="avatar" class="size-16 rounded-lg object-cover shadow-xs" />
            </div>
        </div>

        <div class="mt-4">
            <p class="text-lg capitalize  text-pretty text-green-500">
                {{ position }}
            </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{{ firstSkill.name }}</dt>
                <dd class="text-xs text-gray-500">{{ firstSkill.level }}</dd>
            </div>

            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{{ secondSkill.name }}</dt>
                <dd class="text-xs text-gray-500">{{ secondSkill.level }}</dd>
            </div>

            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{{ thirdSkill.name }}</dt>
                <dd class="text-xs text-gray-500">{{ thirdSkill.level }}</dd>
            </div>
        </dl>

        <div>
            <p class="text-xs mt-4 text-red-600">Other Skills</p>
            <div class="flex gap-2 pt-2">
                <template v-for="skill in otherSkills" :key="skill">
                    <span class=" text-xs text-white px-2 py-1 bg-gray-400 rounded">{{ skill.name }}</span>
                </template>
            </div>
        </div>
    </a>
</template>