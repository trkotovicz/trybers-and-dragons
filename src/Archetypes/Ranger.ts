import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.createdInstances += 1;
  }

  public get energyType(): EnergyType { return this._energyType; }

  public static createdArchetypeInstances(): number {
    return this.createdInstances;
  }
}