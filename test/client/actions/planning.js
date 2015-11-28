/* eslint no-unused-expressions: 0 */
/* global before, describe, it, expect, sinon */
import { setPlanningDate } from 'app/client/actions/planning';
import moment from 'moment';

describe('actions', () => {
  describe('planning', () => {
    describe('setPlanningDate', () => {
      it('should dispatch an history pushState action for the new date route', () => {
        const dateSelected = new Date();
        const dateFormatted = moment(dateSelected).format('YYYY-MM-DD');
        const dispatch = sinon.spy();
        setPlanningDate(dateSelected)(dispatch);

        expect(dispatch).to.have.been.calledWith({
          avoidRouterUpdate: false,
          path: `/planning/${dateFormatted}`,
          type: '@@router/UPDATE_PATH',
        });
      });

      it('should dispatch an history pushState action for the new date route with specified user', () => {
        const dateSelected = new Date();
        const dateFormatted = moment(dateSelected).format('YYYY-MM-DD');
        const dispatch = sinon.spy();
        setPlanningDate(dateSelected, 'userId', 'userName')(dispatch);

        expect(dispatch).to.have.been.calledWith({
          avoidRouterUpdate: false,
          path: `/planning/userId/userName/${dateFormatted}`,
          type: '@@router/UPDATE_PATH',
        });
      });
    });
  });
});
