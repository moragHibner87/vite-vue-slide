<template>
     <header :class="{'dark' : isDark}">
            <div class="head-in flex items-center justify-between relative">
              <a class="logo" href="">
				<img src="../../assets/images/yoplay-logo.svg" alt="main-logo"/>
            </a>
            <button @click="ToggleMenu" class="bt-menu mobile-only" aria-controls="primary-nav" 
			:aria-expanded="`${is_expanded ? 'true' : 'false'}`"
			:class="`${is_expanded ? 'active' : ''}`"
			>
            	<span class="sr-only">open menu</span>
				<span class="bt-menu-sep"></span>
            </button>
            <ul id="primary-nav" class="nav" :data-visible="`${is_expanded ? 'true' : 'false'}`"
			:class="`${is_expanded ? 'open-nav' : ''}`"
			>
                <li>
                  <a href="javascript:void(0);">ראשי</a>
                </li>
                <li>
                  <a href="javascript:void(0);">שירותים</a>
                </li>
                <li>
                  <a href="javascript:void(0);">אודותינו</a>
                </li>
                <li>
                  <a href="javascript:void(0);">דברו איתנו</a>
                </li>
            </ul>
			<div class="toggle-container">
				<input type="checkbox" id="switch" name="theme" @change="toggleDark()"/>
				<label for="switch"></label>
			</div>
        </div>
    </header>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue';

const is_expanded = ref(false)
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
}

const isDark = useDark({
	onChanged(isDark){
		if(isDark){
			document.documentElement.style.setProperty('--theme-bg', '#1b1925')
			document.documentElement.classList.add('dark')
		} else{
			document.documentElement.style.setProperty('--theme-bg', 'white')
			document.documentElement.classList.remove('dark')
		}
	}
})
const toggleDark = useToggle(isDark)

</script>
