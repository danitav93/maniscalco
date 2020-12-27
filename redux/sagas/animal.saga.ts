import {Events, UserPressedDeleteAnimal, UserSubmittedEditedAnimal, UserSubmittedNewAnimalNotes} from "../events";
import {db} from "../../dbApi";
import {call, delay, fork, put, select, takeLatest} from "redux-saga/effects";
import {NavigationHandler} from "../../navigation/NavigationService";
import {animalDeleted, animalUpdated} from "../actions";

function* deleteAnimal(event: UserPressedDeleteAnimal) {
    yield call(db.deleteAnimal, event.payload.animalId);
    yield delay(1000);
    yield put(animalDeleted({animalId: event.payload.animalId, groupId: event.payload.groupId}));
}

function* watchDeleteAnimalSaga() {
    yield takeLatest(Events.userPressedDeleteAnimal, deleteAnimal);
}


function* EditAnimal(event: UserSubmittedEditedAnimal) {
    yield call(db.updateAnimal, event.payload.newAnimal);
    yield delay(1000);
    yield put(animalUpdated(event.payload.newAnimal));
    NavigationHandler.navigateToSessionDetails(event.payload.sessionId);
}

function* watchEditAnimalSaga() {
    yield takeLatest(Events.userSubmittedEditedAnimal, EditAnimal);
}

function* EditAnimalNotes(event: UserSubmittedNewAnimalNotes) {
    yield call(db.updateAnimal, event.payload);
    yield delay(1000);
    yield put(animalUpdated(event.payload));
}

function* watchEditAnimalNotes() {
    yield takeLatest(Events.userSubmittedNewAnimalNotes, EditAnimalNotes);
}

export function* animalSaga() {
    yield fork(watchDeleteAnimalSaga);
    yield fork(watchEditAnimalSaga);
    yield fork(watchEditAnimalNotes);
}
