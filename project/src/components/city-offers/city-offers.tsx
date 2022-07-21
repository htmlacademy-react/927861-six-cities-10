import {OffersList, Map} from '../../components';
import {useState} from 'react';
import {Offer} from '../../types';
import {CityOfferProps} from './types';

function CityOffers({city, offers}: CityOfferProps) {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onOfferHover = (offer: Offer) => {
    setSelectedOffer(offer);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <OffersList offers={offers} onOfferHover={onOfferHover}/>
        </section>
        <div className="cities__right-section">
          <Map city={city} offers={offers} selectedOffer={selectedOffer} mode={'cities'} />
        </div>
      </div>
    </div>
  );
}

export default CityOffers;
