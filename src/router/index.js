import { createRouter, createWebHistory } from "vue-router"
import LandingPage from '@/pages/LandingPage.vue'
import Training from '@/pages/Training.vue'
import Talent from '@/pages/Talent.vue'

const routes = [
  {
    path: '/',
    name: 'ZuriTeam',
    component: LandingPage
  },
  {
    path: '/training',
    name: 'TrainingZuriTeam',
    component: Training
  },
  {
    path: '/talent',
    name: 'TalentZuriTeam',
    component: Talent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router