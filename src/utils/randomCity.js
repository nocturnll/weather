const cityList = [
  {
    name: 'Abidjan',
    detail: 'Ivory Coast',
  },
  {
    name: 'Abu Dhabi',
    detail: 'United Arab Emirates',
  },
  {
    name: 'Abuja',
    detail: 'Nigeria',
  },
  {
    name: 'Accra',
    detail: 'Ghana',
  },
  {
    name: 'Addis Ababa',
    detail: 'Ethiopia',
  },
  {
    name: 'Ahmedabad',
    detail: 'India',
  },
  {
    name: 'Ahvaz',
    detail: 'Iran',
  },
  {
    name: 'Alexandria',
    detail: 'Egypt',
  },
  {
    name: 'Algiers',
    detail: 'Algeria',
  },
  {
    name: 'Almaty',
    detail: 'Kazakhstan',
  },
  {
    name: 'Ankara',
    detail: 'Turkey',
  },
  {
    name: 'Astana',
    detail: 'Kazakhstan',
  },
  {
    name: 'Auckland',
    detail: 'New Zealand',
  },
  {
    name: 'Baghdad',
    detail: 'Iraq',
  },
  {
    name: 'Baku',
    detail: 'Azerbaijan',
  },
  {
    name: 'Bandung',
    detail: 'Indonesia',
  },
  {
    name: 'Bangkok',
    detail: 'Thailand',
  },
  {
    name: 'Barcelona',
    detail: 'Spain',
  },
  {
    name: 'Barranquilla',
    detail: 'Colombia',
  },
  {
    name: 'Basra',
    detail: 'Iraq',
  },
  {
    name: 'Beijing',
    detail: 'China',
  },
  {
    name: 'Belgrade',
    detail: 'Serbia',
  },
  {
    name: 'Belo Horizonte',
    detail: 'Brazil',
  },
  {
    name: 'Bengaluru',
    detail: 'India',
  },
  {
    name: 'Berlin',
    detail: 'Germany',
  },
  {
    name: 'Bhopal',
    detail: 'India',
  },
  {
    name: 'Birmingham',
    detail: 'United Kingdom',
  },
  {
    name: 'Bogotá',
    detail: 'Colombia',
  },
  {
    name: 'Brasília',
    detail: 'Brazil',
  },
  {
    name: 'Brazzaville',
    detail: 'Congo Republic',
  },
  {
    name: 'Brisbane',
    detail: 'Australia',
  },
  {
    name: 'Bucharest',
    detail: 'Romania',
  },
  {
    name: 'Budapest',
    detail: 'Hungary',
  },
  {
    name: 'Buenos Aires',
    detail: 'Argentina',
  },
  {
    name: 'Bulawayo',
    detail: 'Zimbabwe',
  },
  {
    name: 'Busan',
    detail: 'South Korea',
  },
  {
    name: 'Cairo',
    detail: 'Egypt',
  },
  {
    name: 'Calgary',
    detail: 'Canada',
  },
  {
    name: 'Cali',
    detail: 'Colombia',
  },
  {
    name: 'Caloocan',
    detail: 'Philippines',
  },
  {
    name: 'Campinas',
    detail: 'Brazil',
  },
  {
    name: 'Cape Town',
    detail: 'South Africa',
  },
  {
    name: 'Caracas',
    detail: 'Venezuela',
  },
  {
    name: 'Casablanca',
    detail: 'Morocco',
  },
  {
    name: 'Changchun',
    detail: 'China',
  },
  {
    name: 'Changsha',
    detail: 'China',
  },
  {
    name: 'Chaozhou',
    detail: 'China',
  },
  {
    name: 'Chengdu',
    detail: 'China',
  },
  {
    name: 'Chennai',
    detail: 'India',
  },
  {
    name: 'Chicago',
    detail: 'United States',
  },
  {
    name: 'Chittagong',
    detail: 'Bangladesh',
  },
  {
    name: 'Chongqing',
    detail: 'China',
  },
  {
    name: 'Köln',
    detail: 'Germany',
  },
  {
    name: 'Curitiba',
    detail: 'Brazil',
  },
  {
    name: 'Córdoba',
    detail: 'Argentina',
  },
  {
    name: 'Daegu',
    detail: 'South Korea',
  },
  {
    name: 'Daejeon',
    detail: 'South Korea',
  },
  {
    name: 'Dakar',
    detail: 'Senegal',
  },
  {
    name: 'Dalian',
    detail: 'China',
  },
  {
    name: 'Dallas',
    detail: 'United States',
  },
  {
    name: 'Dar es Salaam',
    detail: 'Tanzania',
  },
  {
    name: 'Davao City',
    detail: 'Philippines',
  },
  {
    name: 'Delhi',
    detail: 'India',
  },
  {
    name: 'Dhaka',
    detail: 'Bangladesh',
  },
  {
    name: 'Dongguan',
    detail: 'China',
  },
  {
    name: 'Douala',
    detail: 'Cameroon',
  },
  {
    name: 'Dubai',
    detail: 'United Arab Emirates',
  },
  {
    name: 'Durban',
    detail: 'South Africa',
  },
  {
    name: 'Ekurhuleni',
    detail: 'South Africa',
  },
  {
    name: 'Faisalabad',
    detail: 'Pakistan',
  },
  {
    name: 'Fez',
    detail: 'Morocco',
  },
  {
    name: 'Fortaleza',
    detail: 'Brazil',
  },
  {
    name: 'Foshan',
    detail: 'China',
  },
  {
    name: 'Fukuoka',
    detail: 'Japan',
  },
  {
    name: 'Fuzhou',
    detail: 'China',
  },
  {
    name: 'Giza',
    detail: 'Egypt',
  },
  {
    name: 'Guadalajara',
    detail: 'Mexico',
  },
  {
    name: 'Guangzhou',
    detail: 'China',
  },
  {
    name: 'Guatemala City',
    detail: 'Guatemala',
  },
  {
    name: 'Guayaquil',
    detail: 'Ecuador',
  },
  {
    name: 'Gujranwala',
    detail: 'Pakistan',
  },
  {
    name: 'Hamburg',
    detail: 'Germany',
  },
  {
    name: 'Hangzhou',
    detail: 'China',
  },
  {
    name: 'Hanoi',
    detail: 'Vietnam',
  },
  {
    name: 'Harare',
    detail: 'Zimbabwe',
  },
  {
    name: 'Harbin',
    detail: 'China',
  },
  {
    name: 'Havana',
    detail: 'Cuba',
  },
  {
    name: 'Hefei',
    detail: 'China',
  },
  {
    name: 'Hiroshima',
    detail: 'Japan',
  },
  {
    name: 'Ho Chi Minh City',
    detail: 'Vietnam',
  },
  {
    name: 'Hong Kong',
    detail: 'China',
  },
  {
    name: 'Houston',
    detail: 'United States',
  },
  {
    name: 'Hyderabad',
    detail: 'India',
  },
  {
    name: 'Hyderabad',
    detail: 'Pakistan',
  },
  {
    name: 'Ibadan',
    detail: 'Nigeria',
  },
  {
    name: 'Incheon',
    detail: 'South Korea',
  },
  {
    name: 'Isfahan',
    detail: 'Iran',
  },
  {
    name: 'Islamabad',
    detail: 'Pakistan',
  },
  {
    name: 'Istanbul',
    detail: 'Turkey',
  },
  {
    name: 'İzmir',
    detail: 'Turkey',
  },
  {
    name: 'Jaipur',
    detail: 'India',
  },
  {
    name: 'Jakarta',
    detail: 'Indonesia',
  },
  {
    name: 'Jeddah',
    detail: 'Saudi Arabia',
  },
  {
    name: 'Jinan',
    detail: 'China',
  },
  {
    name: 'Johannesburg',
    detail: 'South Africa',
  },
  {
    name: 'Kabul',
    detail: 'Afghanistan',
  },
  {
    name: 'Kampala',
    detail: 'Uganda',
  },
  {
    name: 'Kano',
    detail: 'Nigeria',
  },
  {
    name: 'Kanpur',
    detail: 'India',
  },
  {
    name: 'Kaohsiung',
    detail: 'Taiwan',
  },
  {
    name: 'Karachi',
    detail: 'Pakistan',
  },
  {
    name: 'Karaj',
    detail: 'Iran',
  },
  {
    name: 'Kathmandu',
    detail: 'Nepal',
  },
  {
    name: 'Kawasaki',
    detail: 'Japan',
  },
  {
    name: 'Kharkiv',
    detail: 'Ukraine',
  },
  {
    name: 'Khartoum',
    detail: 'Sudan',
  },
  {
    name: 'Kiev',
    detail: 'Ukraine',
  },
  {
    name: 'Kinshasa',
    detail: 'DR Congo',
  },
  {
    name: 'Kobe',
    detail: 'Japan',
  },
  {
    name: 'Kolkata',
    detail: 'India',
  },
  {
    name: 'Kuala Lumpur',
    detail: 'Malaysia',
  },
  {
    name: 'Kwangju',
    detail: 'South Korea',
  },
  {
    name: 'Kyoto',
    detail: 'Japan',
  },
  {
    name: 'Lagos',
    detail: 'Nigeria',
  },
  {
    name: 'Lahore',
    detail: 'Pakistan',
  },
  {
    name: 'Lanzhou',
    detail: 'China',
  },
  {
    name: 'Lima',
    detail: 'Peru',
  },
  {
    name: 'London',
    detail: 'United Kingdom',
  },
  {
    name: 'Los Angeles',
    detail: 'United States',
  },
  {
    name: 'Luanda',
    detail: 'Angola',
  },
  {
    name: 'Lucknow',
    detail: 'India',
  },
  {
    name: 'Lusaka',
    detail: 'Zambia',
  },
  {
    name: 'Madrid',
    detail: 'Spain',
  },
  {
    name: 'Makassar',
    detail: 'Indonesia',
  },
  {
    name: 'Managua',
    detail: 'Nicaragua',
  },
  {
    name: 'Mandalay',
    detail: 'Myanmar',
  },
  {
    name: 'Manila',
    detail: 'Philippines',
  },
  {
    name: 'Maputo',
    detail: 'Mozambique',
  },
  {
    name: 'Maracaibo',
    detail: 'Venezuela',
  },
  {
    name: 'Mashhad',
    detail: 'Iran',
  },
  {
    name: 'Medan',
    detail: 'Indonesia',
  },
  {
    name: 'Medellin',
    detail: 'Colombia',
  },
  {
    name: 'Melbourne',
    detail: 'Australia',
  },
  {
    name: 'Mexico City',
    detail: 'Mexico',
  },
  {
    name: 'Milan',
    detail: 'Italy',
  },
  {
    name: 'Minsk',
    detail: 'Belarus',
  },
  {
    name: 'Monterrey',
    detail: 'Mexico',
  },
  {
    name: 'Montevideo',
    detail: 'Uruguay',
  },
  {
    name: 'Montreal',
    detail: 'Canada',
  },
  {
    name: 'Moscow',
    detail: 'Russia',
  },
  {
    name: 'Mumbai',
    detail: 'India',
  },
  {
    name: 'Munich',
    detail: 'Germany',
  },
  {
    name: 'Nagoya',
    detail: 'Japan',
  },
  {
    name: 'Nagpur',
    detail: 'India',
  },
  {
    name: 'Nairobi',
    detail: 'Kenya',
  },
  {
    name: 'Nanjing',
    detail: 'China',
  },
  {
    name: 'Taipei City',
    detail: 'Taiwan',
  },
  {
    name: 'New York City',
    detail: 'United States',
  },
  {
    name: 'Ningbo',
    detail: 'China',
  },
  {
    name: 'Nizhny Novgorod',
    detail: 'Russia',
  },
  {
    name: 'Novosibirsk',
    detail: 'Russia',
  },
  {
    name: 'Omsk',
    detail: 'Russia',
  },
  {
    name: 'Oran',
    detail: 'Algeria',
  },
  {
    name: 'Osaka',
    detail: 'Japan',
  },
  {
    name: 'Ouagadougou',
    detail: 'Burkina Faso',
  },
  {
    name: 'Palembang',
    detail: 'Indonesia',
  },
  {
    name: 'Paris',
    detail: 'France',
  },
  {
    name: 'Patna',
    detail: 'India',
  },
  {
    name: 'Peshawar',
    detail: 'Pakistan',
  },
  {
    name: 'Philadelphia',
    detail: 'United States',
  },
  {
    name: 'Phnom Penh',
    detail: 'Cambodia',
  },
  {
    name: 'Phoenix',
    detail: 'United States',
  },
  {
    name: 'Porto Alegre',
    detail: 'Brazil',
  },
  {
    name: 'Prague',
    detail: 'Czech Republic',
  },
  {
    name: 'Pune',
    detail: 'India',
  },
  {
    name: 'Pyongyang',
    detail: 'North Korea',
  },
  {
    name: 'Qingdao',
    detail: 'China',
  },
  {
    name: 'Qom',
    detail: 'Iran',
  },
  {
    name: 'Quanzhou',
    detail: 'China',
  },
  {
    name: 'Quezon City',
    detail: 'Philippines',
  },
  {
    name: 'Quito',
    detail: 'Ecuador',
  },
  {
    name: 'Rawalpindi',
    detail: 'Pakistan',
  },
  {
    name: 'Recife',
    detail: 'Brazil',
  },
  {
    name: 'Rio de Janeiro',
    detail: 'Brazil',
  },
  {
    name: 'Riyadh',
    detail: 'Saudi Arabia',
  },
  {
    name: 'Rome',
    detail: 'Italy',
  },
  {
    name: 'Rosario',
    detail: 'Argentina',
  },
  {
    name: 'Rostov-on-Don',
    detail: 'Russia',
  },
  {
    name: 'Saint Petersburg',
    detail: 'Russia',
  },
  {
    name: 'Saitama',
    detail: 'Japan',
  },
  {
    name: 'Salvador',
    detail: 'Brazil',
  },
  {
    name: 'San Antonio',
    detail: 'United States',
  },
  {
    name: 'San Diego',
    detail: 'United States',
  },
  {
    name: "Sana'a",
    detail: 'Yemen',
  },
  {
    name: 'Santa Cruz de la Sierra',
    detail: 'Bolivia',
  },
  {
    name: 'Santiago',
    detail: 'Chile',
  },
  {
    name: 'Sapporo',
    detail: 'Japan',
  },
  {
    name: 'Semarang',
    detail: 'Indonesia',
  },
  {
    name: 'Seoul',
    detail: 'South Korea',
  },
  {
    name: 'Shanghai',
    detail: 'China',
  },
  {
    name: 'Shantou',
    detail: 'China',
  },
  {
    name: 'Shenyang',
    detail: 'China',
  },
  {
    name: 'Shenzhen',
    detail: 'China',
  },
  {
    name: 'Shijiazhuang',
    detail: 'China',
  },
  {
    name: 'Shiraz',
    detail: 'Iran',
  },
  {
    name: 'Singapore',
    detail: 'Singapore',
  },
  {
    name: 'Sofia',
    detail: 'Bulgaria',
  },
  {
    name: 'Surabaya',
    detail: 'Indonesia',
  },
  {
    name: 'Surat',
    detail: 'India',
  },
  {
    name: 'Suwon',
    detail: 'South Korea',
  },
  {
    name: 'Suzhou',
    detail: 'China',
  },
  {
    name: 'Sydney',
    detail: 'Australia',
  },
  {
    name: 'São Paulo',
    detail: 'Brazil',
  },
  {
    name: 'Tbilisi',
    detail: 'Georgia',
  },
  {
    name: 'Tabriz',
    detail: 'Iran',
  },
  {
    name: 'Taichung',
    detail: 'Taiwan',
  },
  {
    name: 'Tainan',
    detail: 'Taiwan',
  },
  {
    name: 'Taipei',
    detail: 'Taiwan',
  },
  {
    name: 'Tangshan',
    detail: 'China',
  },
  {
    name: 'Tashkent',
    detail: 'Uzbekistan',
  },
  {
    name: 'Tehran',
    detail: 'Iran',
  },
  {
    name: 'Tianjin',
    detail: 'China',
  },
  {
    name: 'Tijuana',
    detail: 'Mexico',
  },
  {
    name: 'Tokyo',
    detail: 'Japan',
  },
  {
    name: 'Toronto',
    detail: 'Canada',
  },
  {
    name: 'Tripoli',
    detail: 'Libya',
  },
  {
    name: 'Tunis',
    detail: 'Tunisia',
  },
  {
    name: 'Ulsan',
    detail: 'South',
  },
  {
    name: 'Vienna',
    detail: 'Austria',
  },
  {
    name: 'Vijayawada',
    detail: 'India',
  },
  {
    name: 'Visakhapatnam',
    detail: 'India',
  },
  {
    name: 'Warsaw',
    detail: 'Poland',
  },
  {
    name: 'Wenzhou',
    detail: 'China',
  },
  {
    name: 'Wuhan',
    detail: 'China',
  },
  {
    name: "Xi'an",
    detail: 'China',
  },
  {
    name: 'Xiamen',
    detail: 'China',
  },
  {
    name: 'Yangon',
    detail: 'Myanmar',
  },
  {
    name: 'Yaoundé',
    detail: 'Cameroon',
  },
  {
    name: 'Yekaterinburg',
    detail: 'Russia',
  },
  {
    name: 'Yerevan',
    detail: 'Armenia',
  },
  {
    name: 'Yokohama',
    detail: 'Japan',
  },
  {
    name: 'Zhengzhou',
    detail: 'China',
  },
  {
    name: 'Zhongshan',
    detail: 'China',
  },
  {
    name: 'Zunyi',
    detail: 'China',
  },
  { name: 'Vancouver', detail: 'Canada' },
]

export const getRandomCity = () => {
  let i = Math.floor(Math.random() * cityList.length)
  return { city: cityList[i].name, country: cityList[i].detail }
}
