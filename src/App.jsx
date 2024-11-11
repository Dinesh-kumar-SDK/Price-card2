import PropTypes from 'prop-types';
import './App.css';

const PricingCard = ({ title, price, features }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <div className="pricing-card">
        <h3>{title}</h3>
        <h1>{price}</h1>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.available ? 'enabled' : 'disabled'}>
              {feature.name}
            </li>
          ))}
        </ul>
        <button>BUTTON</button>
      </div>
    </div>);
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const App = () => {
  const pricingData = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', available: true },
        { name: '500GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: false },
        { name: 'Dedicated Phone Support', available: false },
        { name: 'Free Subdomain', available: false },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', available: true },
        { name: '500GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', available: true },
        { name: '500GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: true },
      ],
    },
  ];

  return (
    <div className="pricing-container">
      {pricingData.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default App;