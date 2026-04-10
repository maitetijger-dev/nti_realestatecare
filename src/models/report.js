export default class Report {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.address = data.address
    this.date = data.date

    this.damage = data.damage || null
    this.maintenance = data.maintenance || null
    this.installations = data.installations || null
    this.modifications = data.modifications || null
  }
}
