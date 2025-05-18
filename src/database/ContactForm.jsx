import MainPageNav from '@/pages/MainPageNav';
import DynamicEventForm from './DynamicEventForm'; // Adjust the path as needed
import Footer from '@/pages/Footer';

const ContactForm = () => {
  return (
    <>
      <MainPageNav />
    <DynamicEventForm eventId="event9" />
      <Footer />
    </>
  )
}

export default ContactForm