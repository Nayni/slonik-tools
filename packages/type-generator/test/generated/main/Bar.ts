/* eslint-disable */
// tslint:disable
// this file is generated by a tool; don't change it manually.

export interface Bar_QueryTypeMap {
  ["select * from bar"]: {
    /** undefined (oid: 18020) */
    dir: unknown
  }
}

export type Bar_UnionType = Bar_QueryTypeMap[keyof Bar_QueryTypeMap]

export type Bar = {
  [K in keyof Bar_UnionType]: Bar_UnionType[K]
}

export const Bar_meta_v0 = [{"properties":[{"name":"dir","value":"unknown","description":"undefined (oid: 18020)"}],"description":"select * from bar"}]