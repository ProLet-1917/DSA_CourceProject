export default class EdgesTable<From, To, Length> {
    private table: (ValuePair<From, To, Length>)[];
    constructor() {
      this.table = []
    }
    setEdge(from: From, to: To, length: Length) {
      if (from != null && to != null && length != null) {
        //const tableKey = <string> <unknown>from;
        this.table.push(new ValuePair(from, to, length));
        return true;
      }
      return false;
    }
    getEdge(from: From, to: To): Length {
      let value = undefined;
      for(var i = 0; i < this.table.length; i++) {
        if(this.table[i].key1 == from && this.table[i].key2 == to) {
          value = this.table[i].value;
          return value;
        }
      }
      return value;

      }
    }
    
    

export class ValuePair<K1, K2, V> {
    constructor(public key1: K1, public key2:K2, public value: V) {}

    toString() {
      return `[#${this.key1}-->${this.key2}: ${this.value}]`;
    }
  }
  