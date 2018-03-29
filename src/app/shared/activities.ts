import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
    'id' : 1,
    'name' : 'bus route 1',
    'date' : new Date('06/01/2017'),
    'distance' : 21,
    'comments': 'chandigarh to punchkkula',
    'gpxData' : '../../assets/gpx/3.gpx',

},
{
    'id' : 2,
    'name' : 'Bus route 2',
    'date' : new Date('07/01/2017'),
    'distance' : 100,
    'comments': 'okay',
    'gpxData' : '../../assets/gpx/2.gpx',

},
{
    'id' : 3,
    'name' : 'bus route 3',
    'date' : new Date('08/01/2017'),
    'distance' : 250,
    'comments': 'chandigarh to punchkula',
    'gpxData' : '../../assets/gpx/3.gpx',

},
{
    'id' : 4,
    'name' : 'bus route 4',
    'date' : new Date('09/01/2017'),
    'distance' : 15,
    'comments': 'really cool',
    'gpxData' : '../../assets/gpx/2.gpx',

}
];

