export default {
  fields: {
    password: {
      title: {
        default: 'Password',
      },
      placeholder: {
        your: 'Your password',
        new: 'New password',
        'repeat-new': 'Repeat new password',
      },
    },
    'repeat-password': {
      title: 'Repeat password',
      placeholder: {
        your: 'Repeat your password',
      },
    },
    phone: {
      title: {
        default: 'Phone number',
      },
    },
    'phone-or-email': {
      title: 'Your Phone number or Email',
      placeholder: {
        your: 'Your email or phone number',
      },
    },
    'enter-code': {
      title: 'Secret code',
      placeholder: {
        your: 'Your secret code',
      },
    },
  },

  actions: {
    continue: 'Continue',
  },

  game: {
    messages: {
      'chose-bet': 'Select the denomination and click here for the bet amount',
      'you-lose': {
        title: 'You Lose 😒',
        message: 'The next chance is yours 🔥',
      },
      'you-win': {
        title: 'You Win 🤑 {0}',
        message: 'Keep it up 🔥',
      },
      wrong: {
        title: 'You were wrong 😒',
        message: 'But you had no opponent, your money saved 🤑',
      },
      right: {
        title: 'You were right 💪🏼',
        message: 'But you had no opponent 😒',
      },
    },
    bet: {
      'predict-up': {
        title: 'Predict up',
      },
      'predict-down': {
        title: 'Predict down',
      },
    },
    'make-bet': {
      title: 'Make your bet',
      'off-title': 'All bets are off',
    },
  },

  bets: {
    title: 'Bets',
  },

  wallet: {
    title: 'Wallet',
  },

  chat: {
    title: 'Chat',
    placeholder: 'Write message',
  },

  referral: {
    title: 'Referral',
    empty: {
      title: 'You have no referrals',
    },
  },

  balance: {
    title: {
      referral: 'Referral balance',
      demo: 'Demo wallet',
      main: 'My wallet',
    },
  },

  notifications: {
    title: 'Notifications',
  },

  profile: {
    title: 'Profile',
  },

  settings: {
    title: 'Settings',
    alternativeTitle: 'Menu',
  },

  auth: {
    'log-in': {
      title: 'Log In',
    },
    'sign-in': {
      title: 'Sign In',
      'alternative-title': 'Already have an account?',
    },
    register: {
      title: 'Registration',
      'alternative-title': 'Register',
    },
    'sign-up': {
      title: 'Sign Up',
      'alternative-title': 'Create new account',
      fields: {
        age: {
          title: 'Age agreement',
          label: 'I am over 21 years of age',
        },
        politics: {
          title: 'Politics agreement',
          accept: 'I accept',
          terms: 'Legal Terms and Conditions',
          and: 'and',
          policy: 'Privacy Policy',
        },
      },
    },
    'forgot-password': {
      title: 'Forgot password',
      button: {
        reset: 'Reset password',
        link: 'Send link',
        code: 'Send code',
      },
    },
    'enter-code': {
      title: 'Enter code',
      subtitle: 'Code has been sent on your phone',
      'send-again': `Didn't get the code? Send again`,
      sent: 'Code has been sent on your phone',
    },
  },
}
