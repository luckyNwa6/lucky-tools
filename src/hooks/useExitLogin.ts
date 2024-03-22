import { useRouter } from 'vue-router'

export default function useExitLogin() {
  const $router = useRouter()

  const exitLogin = () => {
    $router.push({ path: '/login' })
  }

  return {
    exitLogin,
  }
}
