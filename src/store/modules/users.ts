import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export class Users extends VuexModule {}
