export type LedSwitch = {
  "version": "0.1.0",
  "name": "led_switch",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "ledSwitch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "switch",
      "accounts": [
        {
          "name": "ledSwitch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "isOn",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "LedSwitch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isOn",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "HZM1oQFUvSP7sBLHK6Kn7AjkmeA1EZShFVhuyCTbRcYu"
  }
};

export const IDL: LedSwitch ={
  "version": "0.1.0",
  "name": "led_switch",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "ledSwitch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "switch",
      "accounts": [
        {
          "name": "ledSwitch",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "isOn",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "LedSwitch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isOn",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "HZM1oQFUvSP7sBLHK6Kn7AjkmeA1EZShFVhuyCTbRcYu"
  }
};