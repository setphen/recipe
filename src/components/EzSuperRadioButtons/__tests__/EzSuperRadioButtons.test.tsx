import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render, fireEvent, act, screen} from '@testing-library/react';
import markdown from './EzSuperRadioButtons.test.md';
import EzSuperRadioButtons from '../EzSuperRadioButtons';

const deliveryImg = `data:image/svg+xml;charset=UTF-8,%3csvg width='60' height='51' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23565A5C'%3e%3cpath d='M17.705 41.311a2.95 2.95 0 1 0 0 5.902 2.95 2.95 0 0 0 0-5.902zm0 3.935a.984.984 0 1 1 0-1.967.984.984 0 0 1 0 1.967zm28.525-3.935a2.95 2.95 0 1 0 0 5.902 2.95 2.95 0 0 0 0-5.902zm0 3.935a.984.984 0 1 1 0-1.967.984.984 0 0 1 0 1.967zM2.951 15.738h1.967v1.967H2.951zM0 19.672h1.967v1.967H0zm48.197-13.77h5.902v1.967h-5.902zm-3.935 0h1.967v1.967h-1.967zM31.475 0h9.836v1.967h-9.836zm-3.934 0h1.967v1.967h-1.967z'/%3e%3cpath d='M59.016 50.164v-1.967h-8.4a5.876 5.876 0 0 0 1.486-3.345l6.423-3.67c.045-.032.088-.067.128-.106a.913.913 0 0 0 .099-.077.969.969 0 0 0 .179-.267c.005-.009.012-.015.016-.023a.984.984 0 0 0 .07-.35c0-.011.006-.02.006-.031v-8.853a.824.824 0 0 0-.017-.085.68.68 0 0 0 0-.077L57.038 19.51a.383.383 0 0 0-.015-.043v-.034l-.984-3.934a.984.984 0 0 0-.957-.745H43.151a2.931 2.931 0 0 0-.737-1.272l-6.716-6.716a2.93 2.93 0 0 0-2.086-.864H9.836a.984.984 0 0 0-.984.983v3.935H0v1.967h8.852v2.95H6.885v1.968h1.967v1.967H3.934v1.967h4.918v8.853a.984.984 0 0 0-.983.983v8.853c0 .02.01.038.012.06a.984.984 0 0 0 .053.26c.009.032.02.063.032.093.046.103.11.197.188.278l3.667 3.667a5.874 5.874 0 0 0 1.497 3.51H0v1.968h59.016zm-18.344-7.869h-17.41a5.837 5.837 0 0 0-.454-.984h18.319a5.837 5.837 0 0 0-.455.984zm-17.065 1.967h16.72a5.875 5.875 0 0 0 1.516 3.935H22.092a5.871 5.871 0 0 0 1.515-3.935zm18.688 0a3.934 3.934 0 1 1 7.869 0 3.934 3.934 0 0 1-7.869 0zm9.618-1.573a5.848 5.848 0 0 0-.58-1.378h2.996l-2.416 1.378zm4.958-12.197h-9.658v-9.836h8.02l1.638 9.836zm-2.065-11.803H46.23a.984.984 0 0 0-.984.983v11.803c0 .544.44.984.984.984h10.82v1.967h-2.952v1.967h2.951v2.951h-7.564a5.88 5.88 0 0 0-6.511 0H20.96a5.88 5.88 0 0 0-6.512 0H9.836V35.41h3.934v-1.967H9.836v-.984h32.46c.542 0 .983-.44.983-.984V16.721h11.035l.492 1.968zm-43.986 2.95h7.869v-1.967h-7.87v-1.967h8.853v-1.967H10.82v-2.951h4.918V10.82H10.82V7.869h22.792c.26 0 .51.104.695.288l6.716 6.716a.984.984 0 0 1 .288.697v14.922H10.82v-8.853zm1.782 19.672c-.174.3-.32.613-.438.938l-.937-.938h1.375zm1.168 2.951a3.934 3.934 0 1 1 7.87 0 3.934 3.934 0 0 1-7.87 0z'/%3e%3c/g%3e%3c/svg%3e`;
const clockImg = `data:image/svg+xml;charset=UTF-8,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M29.868.593C13.516.593.198 13.913.198 30.263c0 16.352 13.318 29.671 29.67 29.671 16.352 0 29.67-13.319 29.67-29.67 0-16.352-13.252-29.67-29.67-29.67zm0 58.022c-15.626 0-28.352-12.725-28.352-28.351 0-15.627 12.726-28.352 28.352-28.352 15.627 0 28.352 12.725 28.352 28.352 0 15.626-12.725 28.351-28.352 28.351zm0-53.802C15.824 4.813 4.352 16.22 4.352 30.33c0 14.044 11.406 25.516 25.516 25.516 14.11 0 25.517-11.538 25.517-25.582S43.978 4.814 29.868 4.814zm0 49.649C16.55 54.462 5.67 43.648 5.67 30.264c0-13.319 10.814-24.198 24.198-24.198 13.385 0 24.198 10.88 24.198 24.198S43.253 54.462 29.868 54.462zm-.198-39.957c.396 0 .66-.263.66-.659V9.231c0-.396-.264-.66-.66-.66-.395 0-.659.264-.659.66v4.615c0 .396.264.66.66.66zm-8.175 2.308c.131 0 .197 0 .33-.066.329-.198.395-.593.263-.923l-2.308-4.022c-.198-.33-.593-.395-.923-.264-.33.198-.395.594-.264.924l2.308 4.022c.132.197.33.33.594.33zm-5.605 4.88l-4.022-2.308c-.33-.198-.725-.066-.923.263-.198.33-.066.726.264.923l4.022 2.308c.132.066.198.066.33.066a.787.787 0 0 0 .593-.33c.132-.33.066-.725-.264-.923zm-2.044 8.637c0-.396-.264-.66-.66-.66H8.572c-.395 0-.659.264-.659.66 0 .395.264.659.66.659h4.615c.395 0 .66-.264.66-.66zm1.253 7.78l-4.022 2.308c-.33.197-.396.593-.264.923.132.197.33.33.594.33.131 0 .197 0 .33-.067l4.021-2.307c.33-.198.396-.594.264-.923-.198-.33-.593-.462-.923-.264zm6.791 6.066c-.33-.198-.725-.066-.923.264l-2.308 4.022c-.197.33-.066.725.264.923.132.066.198.066.33.066a.787.787 0 0 0 .593-.33l2.308-4.022c.198-.33.066-.725-.264-.923zm7.78 1.978c-.395 0-.659.264-.659.66v4.615c0 .395.264.659.66.659.395 0 .659-.264.659-.66v-4.615c0-.395-.264-.66-.66-.66zm8.835-1.78c-.197-.33-.593-.396-.923-.264-.33.198-.395.593-.263.923l2.307 4.022c.132.198.33.33.594.33.132 0 .198 0 .33-.066.33-.198.395-.594.263-.923l-2.308-4.022zm9.89-3.89l-4.021-2.308c-.33-.198-.726-.066-.923.264-.198.33-.066.725.263.923l4.022 2.307a.594.594 0 0 0 .33.066.787.787 0 0 0 .593-.33c.198-.33.066-.725-.263-.922zM50.77 29.67h-4.615c-.396 0-.66.264-.66.66 0 .395.264.659.66.659h4.615c.396 0 .66-.264.66-.66 0-.395-.264-.659-.66-.659zm-6.791-6.79c.132 0 .198 0 .33-.067l4.022-2.308c.33-.197.395-.593.263-.923-.197-.33-.593-.395-.923-.263l-4.022 2.307c-.33.198-.395.594-.263.923.197.198.395.33.593.33zm-3.297-11.21c-.33-.197-.725-.066-.923.264l-2.307 4.022c-.198.33-.066.725.263.923.132.066.198.066.33.066a.787.787 0 0 0 .593-.33l2.308-4.022c.198-.33.066-.725-.264-.923zm-6.197 4.418c-.33-.132-.726.066-.858.396l-3.692 11.472h-.066c-.593 0-1.12.264-1.516.593l-6.528-3.89c-.33-.197-.725-.066-.923.198-.198.33-.066.725.198.923l6.527 3.89c-.066.198-.066.33-.066.528 0 1.253.99 2.307 2.308 2.307 1.319 0 2.308-.989 2.308-2.307 0-.791-.396-1.45-.99-1.846l3.76-11.407c.065-.396-.133-.725-.462-.857z' fill='%23565A5C'/%3e%3c/svg%3e`;
const potImg = `data:image/svg+xml;charset=UTF-8,%3csvg width='60' height='44' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23565A5C'%3e%3cpath d='M57.511 10.35l-5.8 1.2a8.079 8.079 0 0 0-.734-.61c-.257-3.853-8.966-5.297-13.194-5.77-.681-1.719-3.028-2.803-5.638-3.183C31.826 1.259 31.007.74 30.04.74s-1.787.52-2.107 1.246c-2.61.38-4.956 1.465-5.637 3.183C18.064 5.643 9.35 7.09 9.1 10.945a8.34 8.34 0 0 0-.749.617L2.49 10.348l-2 4.708 3.565 1.293.782-2.133 2.003.4c0 .014-.003.028-.003.041 0 1.24.65 2.346 1.779 3.316v19.543c0 3.747 12.492 5.742 21.51 5.742s21.511-1.995 21.511-5.742v-19.69c1.024-.933 1.605-1.991 1.605-3.168 0-.019-.004-.037-.004-.057l1.926-.384.782 2.133 3.566-1.293-2-4.708zM28.095 3.608c.39.571 1.11.96 1.944.96.834 0 1.554-.389 1.944-.96 2.923.408 4.708 1.676 4.708 2.6 0 1.115-2.592 2.734-6.652 2.734-4.06 0-6.652-1.62-6.652-2.734 0-.924 1.785-2.192 4.708-2.6zm-5.923 3.227c.555 2.438 4.31 3.749 7.866 3.749 3.557 0 7.313-1.31 7.867-3.749 8.119.938 11.792 3.044 11.792 4.278 0 1.923-7.658 4.718-19.658 4.718-12.001 0-19.659-2.796-19.659-4.719 0-1.234 3.675-3.339 11.792-4.277zM50.344 37.49c-.436 1.46-8.414 4.129-20.219 4.129-11.827 0-19.814-2.679-20.217-4.101v-18.61c4.275 2.607 12.37 3.981 20.131 3.981 7.871 0 16.08-1.414 20.305-4.093V37.49zM30.039 21.248c-12.912 0-21.91-3.473-21.91-6.59 0-.664.492-1.406 1.392-2.125 2.26 3.591 13.015 4.938 20.518 4.938s18.256-1.346 20.517-4.937c.9.718 1.393 1.455 1.393 2.124 0 3.118-8.998 6.59-21.91 6.59z'/%3e%3cpath d='M13.289 34.387v-9.31c0-.454-.29-.82-.647-.82-.357 0-.646.366-.646.82v9.844c0 .303.131.58.341.723.18.121 4.521 2.968 17.653 3.241H30c.353 0 .641-.359.647-.806.006-.455-.279-.828-.636-.835-10.757-.223-15.489-2.225-16.722-2.857z'/%3e%3c/g%3e%3c/svg%3e`;

const scope = {EzSuperRadioButtons, deliveryImg, clockImg, potImg};

describe('EzSuperRadioButtons', () => {
  visualSnapshots({markdown, scope});

  it('triggers onChange when segment is clicked', () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    render(
      <EzSuperRadioButtons
        label="Delivery issues"
        options={[
          {
            label: 'first',
            value: 'firstValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'second',
            value: 'secondValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'third',
            value: 'thirdValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
        ]}
        value="cant-deliver"
        onChange={onChangeSpy}
      />
    );

    screen.getByLabelText(/third/).click();

    expect(onChangeSpy).toHaveBeenCalledWith('thirdValue');
  });

  it('should meet accessibility guidelines', async () => {
    const onChangeSpy: (value: string) => void = jest.fn();

    const {container} = render(
      <EzSuperRadioButtons
        label="Delivery issues"
        options={[
          {
            label: 'first',
            value: 'firstValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'second',
            value: 'secondValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
          {
            label: 'third',
            value: 'thirdValue',
            imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
          },
        ]}
        value="cant-deliver"
        onChange={onChangeSpy}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
