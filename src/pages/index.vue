<template>
  <div class="home">
    <v-container>
      <v-layout>{{ counter.count }}</v-layout>
      <v-btn @click="increment()">Increment</v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-mixin-decorator";
import { AppContextMixin } from "@/context";
import { CounterStore } from "../Store/CounterStore";
import { CounterState } from "../Store/CounterState";
import { IncrementalCounterUseCase } from "../usecases/IncrementalCounterUseCase ";

@Component
export default class extends Mixins<AppContextMixin>(AppContextMixin) {
  counter: CounterState | null = null;

  created() {
    this.counter = this.context.getState().counter;
    this.context.onChange(() => {
      this.counter = this.context.getState().counter;
    });
  }

  increment() {
    this.context.useCase(new IncrementalCounterUseCase()).execute();
  }
}
</script>
