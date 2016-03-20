import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'sort_on',
    'sort_direction',
    'per_page',
    'page'
  ],
  sort_on: 'name',
  sort_direction: 'asc',
  per_page: 5,
  page: 1,
  sortFields: [
    {id: 'name', label: 'Name'},
    {id: 'updated_at', label: 'Updated'},
    {id: 'founding_year', label: 'Year Founded'}
  ],
  sortDirections: [
    {id: 'asc', label: 'Ascending'},
    {id: 'desc', label: 'Descending'},
  ],
  actions: {
    sortBy(sort_on){
      this.set('sort_on', sort_on);
    },
    sortDirection(sort_direction){
      this.set('sort_direction', sort_direction);
    }
  }
});
