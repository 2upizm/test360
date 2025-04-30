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
        },
        {
          "yaw": -1.3408311320220712,
          "pitch": 0.11060849928649574,
          "rotation": 0,
          "target": "2-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3246201188975473,
          "pitch": -0.014770563225745548,
          "title": "Inside",
          "text": "corridor"
        },
        {
          "yaw": -0.013514835410045833,
          "pitch": 0.27329841020100964,
          "title": "garden",
          "text": "plants"
        }
      ]
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
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
          "yaw": -1.6018748320012683,
          "pitch": -0.08812947835984986,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.2556341116295116,
          "pitch": -0.12702670451241538,
          "rotation": 0,
          "target": "1-house_yard_02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8881645985505671,
          "pitch": 0.03996532227446892,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
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
          "yaw": -0.39387461625562814,
          "pitch": -0.06650063105427861,
          "rotation": 0,
          "target": "2-corridor"
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
