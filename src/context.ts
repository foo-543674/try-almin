import Vue from "vue";
import { Mixin } from "vue-mixin-decorator";
import { Context, Dispatcher, StoreGroup } from "almin";
import { CounterStore } from "@/Store/CounterStore";

const context = new Context({
  dispatcher: new Dispatcher(),
  store: new StoreGroup({
    counter: new CounterStore()
  }),
  options: {
    strict: true,
    performanceProfile: true
  }
});

@Mixin
export class AppContextMixin extends Vue {
  context = context;
}
