/**
 * Options for BaseProject
 */
export interface BaseProjectOptions {
  /**
   * something
   *
   * @default whatever
   */
  readonly name: string;
}

/**
 * Base Project
 */
export class BaseProject {
  /**
   * Project name.
   */
  public readonly name: string;

  constructor(options: BaseProjectOptions) {
    this.name = options.name;
  }
}