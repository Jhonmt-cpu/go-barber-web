import { shade } from 'polished';
import styled from 'styled-components';

// import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
// import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 3.2rem 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 8rem;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8rem;

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 112rem;
  margin: 6.4rem auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 12rem;

  h1 {
    font-size: 3.6rem;
  }

  p {
    margin-top: 0.8rem;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 0.1rem;
      height: 1.6rem;
      background: #ff9000;
      margin: 0 0.8rem;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 6.4rem;

  > strong {
    color: #999591;
    font-size: 2rem;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 1rem;
    margin-top: 2.4rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 0.1rem;
      left: 0;
      top: 10%;
      background: #ff9000;
    }

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 2.4rem;
      color: #fff;
      font-size: 1.8rem;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Section = styled.div`
  margin-top: 4.8rem;

  > strong {
    color: #999591;
    font-size: 2rem;
    line-height: 2.6rem;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 1.6rem;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;
    width: 7rem;

    svg {
      color: #ff9000;
      margin-right: 0.8rem;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 1rem;
    margin-left: 2.4rem;

    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 2.4rem;
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export const Calendar = styled.aside`
  width: 38rem;

  .DayPicker {
    border-radius: 1rem;
    font-size: 1.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 1rem;
  }

  .DayPicker,
  .DayPicker-Month {
    /* width: 100%; */
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 0.8rem;
    margin: 1.6rem 0 0 0;
    padding: 1.6rem;
    background-color: #28262e;
    border-radius: 0 0 1rem 1rem;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 4rem;
    height: 4rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 1rem;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 1rem;
    color: #232129 !important;
  }
`;
