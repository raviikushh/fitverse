import MainPageNav from '@/pages/MainPageNav';
import DynamicEventForm from './DynamicEventForm'; // Adjust the path as needed
import Footer from '@/pages/Footer';

const ContactForm = () => {
  return (
    <>
      <MainPageNav />
    <DynamicEventForm eventId="Transformation_Event" />
      <Footer />
    </>
  )
}

export default ContactForm