import { SubscriptionForm } from '../SubscriptionForm';
import './styles.scss';

export function Body() {
  return (
    <main className="bodyContainer">
      <section className="hero">
        <span>👏 Hey, welcome!</span>
        <h1>
          Interested in finding <br />
          the best offers to <br />
          <span>upgrade your pc</span>?
        </h1>
        <p>
          Subscribe to our newsletter and stay inside our <br />
          <span>best deals this black friday</span>
        </p>
      </section>
      <SubscriptionForm />
    </main>
  );
}