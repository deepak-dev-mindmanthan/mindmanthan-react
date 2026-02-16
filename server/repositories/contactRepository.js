/**
 * ContactRepository abstracts the data storage layer.
 * Currently, it might only log submissions, but in the future, 
 * it will interact with a database for the admin panel.
 */
class ContactRepository {
  async save(contactData) {
    // Placeholder for database save logic
    // For now, we just return the data as if it were saved
    console.log('Saving contact submission to repository:', contactData);
    
    // In a real scenario, you'd do:
    // const saved = await db.contacts.create(contactData);
    // return saved;
    
    return {
      id: Date.now(),
      ...contactData,
      createdAt: new Date(),
    };
  }
}

export default new ContactRepository();
