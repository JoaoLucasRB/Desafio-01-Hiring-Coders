import Swal from 'sweetalert2';
import { FormEvent } from 'react';
import { useState } from 'react';
import './styles.scss';

interface SubscriptionObject {
  name: string,
  email: string,
  interests: string[],
}

export function SubscriptionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');

  function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name) {
      Swal.fire({
        title: 'Oops..',
        text: "The field 'Name' can't be empty",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EBA417"
      });
      return;
    }

    if (!email || !validateEmail(email)) {
      Swal.fire({
        title: 'Oops..',
        text: "The field 'Email' can't be empty, and must be a valid email",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EBA417"
      });
      return;
    }

    if (!interests) {
      Swal.fire({
        title: 'Oops..',
        text: "The field 'Interests' can't be empty",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EBA417"
      });
      return;
    }

    const interestsList = interests.split(',');
    const subscription: SubscriptionObject = {
      name,
      email,
      interests: interestsList,
    }

    const currentSubscriptions = JSON.parse(localStorage.getItem("subscriptions") || '{}');
    if (currentSubscriptions[email]) {
      Swal.fire({
        title: 'Oops..',
        text: "This email is already registered in our newsletter",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EBA417"
      });
      return;
    } else {
      currentSubscriptions[email] = subscription;
    }
    localStorage.setItem("subscriptions", JSON.stringify(currentSubscriptions));
    Swal.fire({
      title: 'Success..',
      text: "You've successfully subscribed to our newsletter",
      icon: "success",
      confirmButtonText: "Cool!",
      confirmButtonColor: "#EBA417"
    });
    setName("");
    setEmail("");
    setInterests("");
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <div>
        <textarea
          placeholder="What you are looking for (e.g: CPU, Rtx 2070)"
          value={interests}
          onChange={event => setInterests(event.target.value)}
        ></textarea>
        <p>Separeted by <span>,</span></p>
      </div>
      <button type="submit">Subscribe now</button>
    </form>
  )
}