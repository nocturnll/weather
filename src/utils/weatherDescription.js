/* eslint-disable import/prefer-default-export */
export const describe = weather => {
  const thisWeather = weather
  let descriptor
  switch (thisWeather) {
    case 'Thunderstorm':
      descriptor = [
        'Stay indoors.',
        'Do you know how to measure the distance of a thunderstorm?',
        "Don't get struck by lightning.",
      ]
      break
    case 'Drizzle':
      descriptor = [
        "You probably wouldn't need an umbrella.",
        "It's a bit of a light rain.",
        "It's trying to rain.",
      ]
      break
    case 'Rain':
      descriptor = [
        'Do you have an umbrella?',
        'I wish I had a bright yellow raincoat.',
        'The flowers like the rain.',
      ]
      break
    case 'Snow':
      descriptor = [
        'Do you want to build a snowman?',
        'Let it snow, let it snow, let it snow...',
        'Climate change is real.',
      ]
      break
    case 'Clouds':
      descriptor = [
        'I saw a cloud shaped like a cat once.',
        'Clouds can be nice, too.',
        "At least it's not raining.",
      ]
      break
    case 'Clear':
      descriptor = [
        "Clear skies. Full hearts. Can't lose.",
        'You can see for miles.',
        'Not a cloud in the sky.',
      ]
      break
    case 'Mist':
      descriptor = [
        'Visibility will be low.',
        "Don't venture too far into the mist.",
        'Like a scene from an old detective movie.',
      ]
      break
    case 'Smoke':
      descriptor = [
        'It might be best to stay indoors.',
        'Do you have a mask to wear?',
        'Is it caused by a fire? I hope everyone is ok.',
      ]
      break
    case 'Haze':
      descriptor = [
        'Visibility might be low.',
        'This city is in a haze, just like my teenage years.',
        "At least it's now snowing.",
      ]
      break
    case 'Dust':
      descriptor = [
        'Do you have a dust mask?',
        'It might be hard to breathe outside.',
        "I bet that'll require a lot of clean-up.",
      ]
      break
    case 'Fog':
      descriptor = [
        'Drive carefully; visibility will be low.',
        'Sounds spooky.',
        "Foggy weather is a lighthouse's time to shine.",
      ]
      break
    case 'Sand':
      descriptor = [
        'A sandstorm? Doo doo doo doo doo.',
        'Do you have a mask to wear?',
        "I hate sand. It's coarse and rough and irritating and it gets everywhere.",
      ]
      break
    case 'Ash':
      descriptor = [
        "That doesn't sound safe.",
        "It's Pompeii all over again.",
        'Did a volcano blow up?',
      ]
      break
    case 'Squall':
      descriptor = [
        'That sounds very windy.',
        'Maybe you should stay indoors?',
        'An umbrella would just blow away in the wind.',
      ]
      break
    case 'Tornado':
      descriptor = [
        "I hope you're staying safe.",
        'That sounds scary. Be careful.',
        "Don't get swept away.",
      ]
      break
    default:
      descriptor = ''
  }
  return descriptor[Math.floor(Math.random() * descriptor.length)]
}
