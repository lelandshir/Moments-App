const app = angular.module(`momntApp`, []);
app.controller(`MainController`, [`$http`, function($http) {
    this.message = `Marking MOMNTS since 2020`;
    this.createdMomnt = "";

    this.editMomnt = (m) => {
      $http({
        method: `PUT`,
        url: `/momnt/` + m._id,
        data: {
          moment: this.updatedMoment,
          location: this.updatedLocation,
          description: this.updatedDescription,
          image: this.updatedImage,
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
        url: `/momnt`,
        method: `GET`,
      }).then(
        (res) => {
          this.moments = res.data; //changed to moments (from momnt)
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.addMomnt = () => {
      $http({
        url: `/momnt`,
        method: `POST`,
        data: {
          moment: this.moment,
          location: this.location,
          description: this.description,
          image: this.image,
        }
      }).then(
        (res) => {
          console.log(res.data);
          this.getMomnts();
        },
        (err) => {
          console.log(err);
        }
      );
    };
    this.getMomnts();
  },
]);
