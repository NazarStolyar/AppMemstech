import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('agenda.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS agenda (id INTEGER PRIMARY KEY NOT NULL, section TEXT, date TEXT, timestart TEXT, name TEXT, chairmen TEXT, secretary TEXT, description TEXT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getAgenda() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM agenda',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static addFavorite({ section, date, timestart, name, chairmen, secretary, description  }) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO agenda (section, date, timestart, name, chairmen, secretary, description) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [section, date, timestart, name, chairmen, secretary, description],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }
}
