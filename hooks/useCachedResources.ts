import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';


const db = SQLite.openDatabase("Pippo");

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        // execute sql lite db scripts
        db.transaction(tx => {
          // todo: create tables
          tx.executeSql(
              "create table if not exists company (id integer primary key not null, name text not null, email text, phoneNumber text);"
          );
          tx.executeSql(
            "create table if not exists sessions (id integer primary key not null, idCompany text not null,date date not null, price integer,"+
              "FOREIGN KEY (idCompany) REFERENCES company(id) ON DELETE CASCADE ON UPDATE NO ACTION);"
          );
          tx.executeSql(
            "create table if not exists groups (id integer primary key not null, idSession integer not null,description text not null,"+
              "FOREIGN KEY (idSession) REFERENCES sessions(id) ON DELETE CASCADE ON UPDATE NO ACTION);"
          );
          tx.executeSql(
            "create table if not exists animal (id integer primary key not null, idGroup integer not null, idAnimal integer not null,note text ,"+
            "front_left_disease text, front_right_disease text,"+
            "rear_left_disease text, rear_right_disease text,"+
            "front_left_cure text, front_right_cure text,"+
            "rear_left_cure text, rear_right_cure text,"+
             "FOREIGN KEY (idGroup) REFERENCES groups(id) ON DELETE CASCADE ON UPDATE NO ACTION);"
          );
          tx.executeSql(
            "create table if not exists disease (id integer primary key not null, description text not null,"  
          );
          tx.executeSql(
            "create table if not exists cure (id integer primary key not null, description text not null,"  
          );


        });
        console.log("pathDB",FileSystem.documentDirectory)
        


      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
