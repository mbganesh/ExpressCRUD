

## ROUTER

Hit to open router.js file  [Here](https://github.com/mbganesh/ExpressCRUD/blob/main/routes/netcom.js).



##CODE

```

// Show Message
router.get("/show-message", (req, res) => {
  MessageModel.find((err, listOfObject) => {
    res.json(listOfObject);
  });
});


```

