export default class KnowledgeItem {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.category = data.category
    this.content = data.content
    this.updated = data.updated
  }
}