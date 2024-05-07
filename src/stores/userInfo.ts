import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface UserInfo {
    name?: string;
    age?: number;
    token: string;
    // 其他属性...
  }

export const useUserInfoStore = defineStore('userInfo', () => {
const userInfo = ref<UserInfo>({
    token: '',
    age2    : 0,
})
  const token = computed(() => userInfo.value.token)
  function setUserInfo(info: UserInfo) {
    userInfo.value = {
      ...userInfo.value,
      ...info
    }
  }

  return { userInfo, token, setUserInfo }
})
