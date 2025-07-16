<template>
  <h1><span v-for="x in 7" :style="{ animationDelay: (x-1) * 0.3 + 's' }">{{'Welcome'.charAt(x-1)}}</span></h1>
  <p>I am Lucas Demaimay.<br>I am an IT student at Université Grand Ouest Normandie, located in Ifs, in France.</p>
</template>
