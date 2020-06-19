const app = angular.module(`momntApp`, []);
app.controller(`MainController`, [
  `$http`,
  function ($http) {
    this.message = `Marking MOMNTS since 2020`;
    this.createdMomnt = "";

    this.editMomnt = (m) => {
      $http({
        method: `PUT`,
        url: `/momnt/` + m._id,
        data: {
          brand: this.updateBrand,
          type: this.updatedType,
          abv: this.updatedABV,
        },
      }).then(
        (res) => {
          console.log(this.res);
          this.getMomnts();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.deleteMomnt = (m) => {
      $http({
        method: `DELETE`,
        url: `/momnt/` + m._id,
      }).then(
        (res) => {
          console.log(res);
          this.getMomnts();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    //declare moments index function
    this.getMomnts = () => {
      $http({
        url: `/momnts`,
        method: `GET`,
      }).then(
        (response) => {
          this.momnts = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    this.addNewMomnt = () => {
      $http({
        url: `/momnts`,
        method: `POST`,
        data: {
          momnt: this.updatedMomnt,
          date: this.updatedDate,
          description: this.updatedDescription,
          image: this.updatedImage,
        },
      }).then(
        (response) => {
          console.log(response);
          this.createdMomnt = response.data;
          this.getMomnts();
        },
        (error) => {
          console.log(error);
        }
      );
    };
    this.getMomnts();
  },
]);
