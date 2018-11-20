<template>
  <div>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
<!--       <v-btn>
      Edit
    </v-btn> -->
    <v-alert
      v-model="alert"
      dismissible
      type="success"
      transition="slide-x-reverse-transition"
      style="margin: 10px"
    >
      <v-icon>smartphone</v-icon>
      <a :href="shortcutUrl" target="_blank" download><v-icon>save</v-icon></a>
    </v-alert>
    <v-icon class="actionIcon" :style="shortcutRgb + '; color: #FFF'" @click="">edit</v-icon>
    <v-toolbar-title>
        <v-text-field
        label="Shortcut Name"
        v-model="shortcutName"
      ></v-text-field>
    </v-toolbar-title>
    <v-btn @click.native="processShortcut()">
      Save
    </v-btn>
  </div>
</template>