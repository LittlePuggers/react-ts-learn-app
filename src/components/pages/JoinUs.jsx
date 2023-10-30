import { FeatHori } from './common/FeatHor';
import joinTrainer from '../assets/images/join-trainer.png';
import joinStudent from '../assets/images/join-student.png';

export function JoinUs() {
    const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid ipsam beatae esse ducimus, illo inventore odit iure deserunt quasi. Doloremque molestias expedita recusandae nostrum et nesciunt temporibus sit. Numquam?';

  return (
    <section className='join'>
        <h1>Join Us</h1>
        <FeatHori title='Register as Trainer' text={lorem} img={joinTrainer} />
        <FeatHori title='Register as Student' text={lorem} img={joinStudent} />
    </section>
  )
}
