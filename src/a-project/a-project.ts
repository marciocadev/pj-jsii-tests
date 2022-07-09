import { BaseProject, BaseProjectOptions } from '../base-project';

/**
 * Options for AProject
 */
export interface AProjectOptions extends BaseProjectOptions {
  /**
   * aaaa
   *
   * @default aaa
   */
  readonly aname: string;
}

/**
 * A Project
 */
export class AProject extends BaseProject {
  /**
   * A name
   */
  public readonly aname: string;

  constructor(options: AProjectOptions) {
    super(options);

    this.aname = options.aname;
  }
}