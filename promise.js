const getUser = function(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1652578);
    }, 1000);
  });
};

getUser("jimtran98")
  .then(userId => {
    console.log(userId);
  })
  .catch(err => {
    console.error(err);
  });

////
////

function onSuccess(userId) {
  console.log(userId);
}
function onError(err) {
  console.error(error);
}

getUser("getUser").then(onSuccess, onError);

// Quickly create a promise

const p = Promise.resolve(12)
  .then(result => {
    console.log(result);
  })
  .then(() => Promise.reject("An error has just been created!"))
  .catch(err => {
    console.error(err);
  });
