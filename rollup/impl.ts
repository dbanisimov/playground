class BrowserPersistence {
    type = 'PersistenceType.LOCAL';
  
    constructor(private readonly storage: Storage) {}
  
    async isAvailable(): Promise<boolean> {
      try {
        if (!this.storage) {
          return false;
        }
        this.storage.setItem('STORAGE_AVAILABLE_KEY', '1');
        this.storage.removeItem('STORAGE_AVAILABLE_KEY');
        return true;
      } catch {
        return false;
      }
    }
  
    async set(key: string, value: {}): Promise<void> {
      this.storage.setItem(key, JSON.stringify(value));
    }
  
    async get<T extends {}>(key: string): Promise<T | null> {
      const json = this.storage.getItem(key);
      return json ? JSON.parse(json) : null;
    }
  
    async remove(key: string): Promise<void> {
      this.storage.removeItem(key);
    }
  }
  
export const browserLocalPersistence = new BrowserPersistence(
    localStorage
);

export function bar() {

}