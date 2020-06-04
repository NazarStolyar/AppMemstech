import {DB} from './db'
export async function startAssets () {
    try {
        await DB.init()
    } catch (e) {
        console.log('error', e)
    }

}
