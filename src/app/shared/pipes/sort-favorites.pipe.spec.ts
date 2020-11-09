import { SortContactsPipe } from './sort-favorites.pipe';
import { mockContact } from '../../../unit/mock-contact';

describe('SortFavoritesPipe', () => {
  let pipe: SortContactsPipe;

  beforeEach(() => {
    pipe = new SortContactsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('shod create an instance', () => {
    const sortedContacts = pipe.transform([mockContact, {...mockContact, isFavorite: false}, mockContact]);
    expect(sortedContacts).toEqual([mockContact, mockContact, {...mockContact, isFavorite: false}]);
  });
});
