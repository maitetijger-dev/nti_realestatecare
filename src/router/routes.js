import MainLayout from 'layouts/MainLayout.vue'
import LoginLayout from 'layouts/LoginLayout.vue'

import DashboardPage from 'pages/DashboardPage.vue'
import AssignedReportsPage from 'pages/AssignedReportsPage.vue'
import CompletedReportsPage from 'pages/CompletedReportsPage.vue'
import KnowledgeBasePage from 'pages/KnowledgeBasePage.vue'
import SettingsPage from 'pages/SettingsPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'dashboard', component: DashboardPage },
      { path: 'assigned', name: 'assigned', component: AssignedReportsPage },
      { path: 'completed', name: 'completed', component: CompletedReportsPage },
      { path: 'knowledge', name: 'knowledge', component: KnowledgeBasePage },
      { path: 'settings', name: 'settings', component: SettingsPage },
    ]
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/LoginPage.vue')
      }
    ]
  }
]

export default routes
