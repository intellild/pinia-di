import { InjectionKey, getCurrentInstance } from 'vue';
import Injector from './injector';

export const injectorKey: InjectionKey<Injector> = Symbol('Injector Key');

export const instanceInjectorKey = Symbol('Instance Injector Key');

export type InstanceWithInjector = ReturnType<typeof getCurrentInstance> & {
  [instanceInjectorKey]: Injector;
};