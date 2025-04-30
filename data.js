var APP_DATA = {
  "scenes": [
    {
      "id": "0-house_yard_01",
      "name": "House_Yard_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.0794677756324589,
        "pitch": 0.00842086394012398,
        "fov": 1.431065198280666
      },
      "linkHotspots": [
        {
          "yaw": -3.0906017215312325,
          "pitch": 0.05569624581896626,
          "rotation": 0,
          "target": "1-house_yard_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-house_yard_02",
      "name": "House_Yard_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11204090798638866,
          "pitch": 0.1361547165694148,
          "rotation": 0,
          "target": "0-house_yard_01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
